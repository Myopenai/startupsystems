/**
 * Analytics Handler
 * Log and retrieve analytics events
 */

export async function logAnalytics(
  env: any,
  eventType: string,
  eventData: any = {}
): Promise<void> {
  const db = env.DB;
  
  await db.prepare(`
    INSERT INTO analytics (event_type, event_data, user_id, session_id, ip_address, user_agent)
    VALUES (?, ?, ?, ?, ?, ?)
  `).bind(
    eventType,
    JSON.stringify(eventData),
    eventData.user_id || null,
    eventData.session_id || 'unknown',
    eventData.ip_address || 'unknown',
    eventData.user_agent || 'unknown'
  ).run();
}

export async function getAnalytics(env: any, filters: {
  startDate?: string;
  endDate?: string;
  eventType?: string;
}): Promise<any[]> {
  const db = env.DB;
  
  let query = 'SELECT * FROM analytics WHERE 1=1';
  const params: any[] = [];

  if (filters.startDate) {
    query += ' AND created_at >= ?';
    params.push(filters.startDate);
  }
  if (filters.endDate) {
    query += ' AND created_at <= ?';
    params.push(filters.endDate);
  }
  if (filters.eventType) {
    query += ' AND event_type = ?';
    params.push(filters.eventType);
  }

  query += ' ORDER BY created_at DESC LIMIT 1000';

  const result = await db.prepare(query).bind(...params).all();
  return result.results || [];
}

export async function getAnalyticsSummary(env: any): Promise<any[]> {
  const db = env.DB;
  
  const result = await db.prepare(`
    SELECT 
      event_type,
      COUNT(*) as count,
      DATE(created_at) as date
    FROM analytics
    WHERE created_at >= datetime('now', '-30 days')
    GROUP BY event_type, DATE(created_at)
    ORDER BY date DESC, count DESC
  `).all();

  return result.results || [];
}

