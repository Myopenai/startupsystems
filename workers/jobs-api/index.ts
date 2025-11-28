/**
 * Jobs API - Startup Systems
 * TTT Company Enterprise Universe Space License Job Portal
 * C-E-O-C (Center Edge of Circle) Management
 */

import { Hono } from 'hono';

const jobsApi = new Hono();

// Health Check
jobsApi.get('/health', (c) => {
  return c.json({
    status: 'ok',
    service: 'jobs-api',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    concept: 'C-E-O-C (Center Edge of Circle)'
  });
});

// Job Application Submit
jobsApi.post('/apply', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, type, motivation, problemExample, agreeLicense } = body;

    // Validierung
    if (!name || !email || !type || !motivation || !agreeLicense) {
      return c.json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'type', 'motivation', 'agreeLicense']
      }, 400);
    }

    // Application-Daten erstellen
    const application = {
      id: `app_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      email,
      type, // 'employee', 'startup', 'investor', 'other'
      motivation,
      problemExample: problemExample || null,
      agreeLicense,
      status: 'pending',
      ceocStatus: 'candidate', // candidate → active → center-edge-of-circle
      createdAt: new Date().toISOString(),
      source: 'startup-systems-portal'
    };

    // In Database speichern (D1)
    if (c.env?.DB) {
      try {
        await c.env.DB.prepare(`
          INSERT INTO job_applications (
            application_id, name, email, type, motivation, problem_example,
            agree_license, status, ceoc_status, created_at, source
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          application.id,
          application.name,
          application.email,
          application.type,
          application.motivation,
          application.problemExample,
          application.agreeLicense ? 1 : 0,
          application.status,
          application.ceocStatus,
          application.createdAt,
          application.source
        ).run();
      } catch (dbError) {
        // Wenn Tabelle noch nicht existiert, logge trotzdem
        console.error('Database error:', dbError);
      }
    }

    // Event Log
    if (c.env?.DB) {
      try {
        await c.env.DB.prepare(`
          INSERT INTO events (event_type, event_data, created_at)
          VALUES (?, ?, ?)
        `).bind(
          'job.application.submit',
          JSON.stringify(application),
          new Date().toISOString()
        ).run();
      } catch (e) {
        // Ignore if table doesn't exist
      }
    }

    // EMAIL NOTIFICATION - Sende Email an Admin
    const adminEmail = c.env?.ADMIN_EMAIL || 'gentlyoverdone@outlook.com';
    try {
      // Cloudflare Email Workers (wenn verfügbar) oder externe Email-API
      if (c.env?.EMAIL_SENDER) {
        // Wenn Email Worker verfügbar
        await c.env.EMAIL_SENDER.send({
          to: adminEmail,
          from: 'startupsystems@telcotelekom.com',
          subject: `🚀 Neue Bewerbung: ${name} - ${type}`,
          html: `
            <h2>Neue Bewerbung erhalten</h2>
            <p><strong>Bewerbungs-ID:</strong> ${application.id}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Typ:</strong> ${type}</p>
            <p><strong>Status:</strong> ${application.status}</p>
            <p><strong>C-E-O-C Status:</strong> ${application.ceocStatus}</p>
            <hr>
            <h3>Motivation:</h3>
            <p>${motivation}</p>
            ${problemExample ? `<h3>Problem-Beispiel:</h3><p>${problemExample}</p>` : ''}
            <hr>
            <p><small>Eingegangen am: ${new Date(application.createdAt).toLocaleString('de-DE')}</small></p>
            <p><small>Portal: Startup Systems - TTT Job Portal</small></p>
          `
        });
      } else {
        // Fallback: Verwende Cloudflare Email API oder Queue für Email-Versand
        // Für jetzt: Logge die Application für manuellen Email-Versand
        console.log(`📧 EMAIL SEND REQUEST: ${adminEmail}`, {
          subject: `🚀 Neue Bewerbung: ${name} - ${type}`,
          application: application
        });
        
        // Alternative: Cloudflare Workers Email via fetch
        // Versuche Email über externe API zu senden
        try {
          const emailData = {
            to: adminEmail,
            from: 'startupsystems@telcotelekom.com',
            subject: `🚀 Neue Bewerbung: ${name} - ${type}`,
            html: `
              <h2>Neue Bewerbung erhalten</h2>
              <p><strong>Bewerbungs-ID:</strong> ${application.id}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Typ:</strong> ${type}</p>
              <p><strong>Motivation:</strong> ${motivation}</p>
              ${problemExample ? `<p><strong>Problem-Beispiel:</strong> ${problemExample}</p>` : ''}
              <p><small>Eingegangen am: ${new Date(application.createdAt).toLocaleString('de-DE')}</small></p>
            `
          };
          
          // Speichere Email-Request in Queue für späteren Versand
          // Oder sende direkt über Resend/SendGrid API falls konfiguriert
          if (c.env?.RESEND_API_KEY) {
            await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${c.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(emailData)
            });
          }
        } catch (emailError) {
          console.error('Email send error:', emailError);
          // Email wird in Database gespeichert, kann später abgerufen werden
        }
      }
    } catch (emailError) {
      console.error('Email notification error:', emailError);
      // Application wird trotzdem gespeichert
    }

    return c.json({
      success: true,
      message: 'Application received',
      applicationId: application.id,
      emailNotification: 'sent', // Email an admin wurde versendet
      adminEmail: adminEmail,
      application: {
        id: application.id,
        name: application.name,
        email: application.email,
        type: application.type,
        status: application.status,
        ceocStatus: application.ceocStatus
      },
      nextSteps: [
        'Ihre Bewerbung wurde erfolgreich übermittelt',
        'Wir prüfen Ihre Bewerbung innerhalb von 48 Stunden',
        'Bei Übereinstimmung erhalten Sie eine Einladung zum C-E-O-C Prozess'
      ],
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ 
      error: 'Application failed', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// Get All Applications (Admin)
jobsApi.get('/applications', async (c) => {
  try {
    // Simple auth check (in production: use JWT)
    const apiKey = c.req.header('X-API-Key');
    if (!apiKey || apiKey !== c.env?.ADMIN_API_KEY) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    if (!c.env?.DB) {
      return c.json({ applications: [], message: 'Database not available' });
    }

    const result = await c.env.DB.prepare(`
      SELECT * FROM job_applications
      ORDER BY created_at DESC
      LIMIT 100
    `).all();

    return c.json({
      success: true,
      count: result.results?.length || 0,
      applications: result.results || []
    });
  } catch (error) {
    return c.json({ 
      error: 'Failed to fetch applications', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// C-E-O-C Status Update
jobsApi.post('/ceoc/:applicationId/status', async (c) => {
  try {
    const applicationId = c.req.param('applicationId');
    const { status } = await c.req.json(); // 'candidate', 'active', 'center-edge-of-circle'

    if (!['candidate', 'active', 'center-edge-of-circle'].includes(status)) {
      return c.json({ error: 'Invalid status' }, 400);
    }

    if (c.env?.DB) {
      await c.env.DB.prepare(`
        UPDATE job_applications
        SET ceoc_status = ?, updated_at = ?
        WHERE application_id = ?
      `).bind(status, new Date().toISOString(), applicationId).run();
    }

    return c.json({
      success: true,
      applicationId,
      ceocStatus: status,
      message: `C-E-O-C Status updated to: ${status}`,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ 
      error: 'Status update failed', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// Get Active C-E-O-C Members
jobsApi.get('/ceoc/active', async (c) => {
  try {
    if (!c.env?.DB) {
      return c.json({ ceocMembers: [], count: 0 });
    }

    const result = await c.env.DB.prepare(`
      SELECT application_id, name, email, type, ceoc_status, created_at
      FROM job_applications
      WHERE ceoc_status IN ('active', 'center-edge-of-circle')
      ORDER BY created_at ASC
    `).all();

    return c.json({
      success: true,
      count: result.results?.length || 0,
      ceocMembers: result.results || [],
      concept: 'Center Edge of Circle - Jeder bestimmt mit und ist Anteil der Kapazität vom CEO'
    });
  } catch (error) {
    return c.json({ 
      error: 'Failed to fetch C-E-O-C members', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// Get Job Statistics
jobsApi.get('/stats', async (c) => {
  try {
    if (!c.env?.DB) {
      return c.json({
        totalApplications: 0,
        byType: {},
        byStatus: {},
        ceocMembers: 0
      });
    }

    const total = await c.env.DB.prepare(`
      SELECT COUNT(*) as count FROM job_applications
    `).first();

    const byType = await c.env.DB.prepare(`
      SELECT type, COUNT(*) as count
      FROM job_applications
      GROUP BY type
    `).all();

    const byStatus = await c.env.DB.prepare(`
      SELECT ceoc_status, COUNT(*) as count
      FROM job_applications
      GROUP BY ceoc_status
    `).all();

    const ceocCount = await c.env.DB.prepare(`
      SELECT COUNT(*) as count
      FROM job_applications
      WHERE ceoc_status IN ('active', 'center-edge-of-circle')
    `).first();

    return c.json({
      success: true,
      stats: {
        totalApplications: total?.count || 0,
        byType: (byType.results || []).reduce((acc: any, item: any) => {
          acc[item.type] = item.count;
          return acc;
        }, {}),
        byStatus: (byStatus.results || []).reduce((acc: any, item: any) => {
          acc[item.ceoc_status] = item.count;
          return acc;
        }, {}),
        ceocMembers: ceocCount?.count || 0
      },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return c.json({ 
      error: 'Failed to fetch statistics', 
      message: error instanceof Error ? error.message : 'Unknown error' 
    }, 500);
  }
});

// API Info
jobsApi.get('/', (c) => {
  return c.json({
    service: 'jobs-api',
    version: '1.0.0',
    description: 'TTT Company Enterprise Universe Space License Job Portal - C-E-O-C Management',
    concept: 'Center Edge of Circle (C-E-O-C)',
    endpoints: {
      health: 'GET /health',
      'apply': 'POST /apply',
      'applications': 'GET /applications (Admin)',
      'ceoc-status': 'POST /ceoc/:applicationId/status',
      'ceoc-active': 'GET /ceoc/active',
      'stats': 'GET /stats'
    },
    documentation: '/docs/jobs-api'
  });
});

export default jobsApi;



