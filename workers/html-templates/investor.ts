/**
 * Auto-generated HTML template
 * Source: public/investor/index.html
 * Generated: 2025-11-28T13:41:19.921Z
 */

export const investorHTML = `<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Investor Portal - Startup Systems | Z-Canvas Kapitalformeln</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #0066CC;
            --secondary-color: #00AA44;
            --accent-color: #FF6600;
            --investor-color: #FFD700;
            --dark-bg: #1a1a2e;
            --light-bg: #f5f5f5;
            --text-light: #ffffff;
            --text-dark: #333333;
            --success-color: #00ff88;
            --error-color: #ff4444;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, var(--dark-bg) 0%, #16213e 100%);
            color: var(--text-light);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Header */
        .header {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 15px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .header h1 {
            color: var(--investor-color);
            font-size: 2.5em;
            margin-bottom: 10px;
        }

        .header p {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.1em;
        }

        /* Dashboard Grid */
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        /* Calculation Card */
        .calc-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .calc-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(255, 215, 0, 0.2);
        }

        .calc-card h2 {
            color: var(--investor-color);
            margin-bottom: 20px;
            font-size: 1.5em;
            border-bottom: 2px solid var(--investor-color);
            padding-bottom: 10px;
        }

        /* Form Inputs */
        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 500;
        }

        .form-group input,
        .form-group select {
            width: 100%;
            padding: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-light);
            font-size: 1em;
            transition: border-color 0.3s, background 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus {
            outline: none;
            border-color: var(--investor-color);
            background: rgba(255, 255, 255, 0.15);
        }

        /* Buttons */
        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 1em;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--investor-color) 0%, #FFA500 100%);
            color: var(--dark-bg);
            width: 100%;
        }

        .btn-primary:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-light);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        /* Results */
        .results {
            margin-top: 20px;
            padding: 20px;
            background: rgba(0, 255, 136, 0.1);
            border-radius: 10px;
            border-left: 4px solid var(--success-color);
            display: none;
        }

        .results.show {
            display: block;
            animation: fadeIn 0.5s;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .result-item {
            margin-bottom: 10px;
            padding: 8px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 5px;
        }

        .result-label {
            font-weight: 600;
            color: var(--success-color);
            margin-right: 10px;
        }

        .result-value {
            color: var(--text-light);
            font-size: 1.1em;
        }

        /* Scenarios Section */
        .scenarios-section {
            grid-column: 1 / -1;
            margin-top: 20px;
        }

        .scenario-controls {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .scenario-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 15px;
        }

        .scenario-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 15px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .scenario-card h3 {
            color: var(--investor-color);
            margin-bottom: 10px;
        }

        /* Loading Spinner */
        .loading {
            display: none;
            text-align: center;
            padding: 20px;
        }

        .loading.show {
            display: block;
        }

        .spinner {
            border: 4px solid rgba(255, 255, 255, 0.1);
            border-top: 4px solid var(--investor-color);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Error Message */
        .error {
            background: rgba(255, 68, 68, 0.2);
            border-left: 4px solid var(--error-color);
            color: var(--error-color);
            padding: 15px;
            border-radius: 8px;
            margin-top: 10px;
            display: none;
        }

        .error.show {
            display: block;
        }

        /* API Info */
        .api-info {
            background: rgba(0, 102, 204, 0.1);
            padding: 15px;
            border-radius: 10px;
            margin-top: 20px;
            border-left: 4px solid var(--primary-color);
            font-size: 0.9em;
        }

        .api-info code {
            background: rgba(0, 0, 0, 0.3);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>💰 Investor Portal</h1>
            <p>Z-Canvas Kapitalformeln | Produktionskosten-Berechnung | Zeitkosten-Leitzahl</p>
            <p style="font-size: 0.9em; margin-top: 10px; color: rgba(255, 255, 255, 0.6);">
                Startup Systems - Vollständige Investor-Berechnungsplattform
            </p>
        </div>

        <!-- Dashboard Grid -->
        <div class="dashboard-grid">
            <!-- Lokale Kapitalberechnung -->
            <div class="calc-card">
                <h2>📊 Lokale Kapitalflüsse</h2>
                <form id="localForm">
                    <div class="form-group">
                        <label>N (Anzahl Menschen im Raum)</label>
                        <input type="number" id="local_N" value="10000" required>
                    </div>
                    <div class="form-group">
                        <label>f (Freies BPP pro Person/Jahr in €)</label>
                        <input type="number" id="local_f" value="5000" required>
                    </div>
                    <div class="form-group">
                        <label>p (Konversionsrate 0-1)</label>
                        <input type="number" id="local_p" value="0.1" step="0.01" min="0" max="1" required>
                    </div>
                    <div class="form-group">
                        <label>I_avg (Durchschnittliche Investition €)</label>
                        <input type="number" id="local_I_avg" value="10000" required>
                    </div>
                    <div class="form-group">
                        <label>m (Gewinnmarge 0-1)</label>
                        <input type="number" id="local_m" value="0.2" step="0.01" min="0" max="1" required>
                    </div>
                    <div class="form-group">
                        <label>u (Automatisierungsgrad 0-1)</label>
                        <input type="number" id="local_u" value="0.8" step="0.01" min="0" max="1" required>
                    </div>
                    <div class="form-group">
                        <label>K_fix (Fixkosten pro Jahr in €)</label>
                        <input type="number" id="local_K_fix" value="50000" required>
                    </div>
                    <div class="form-group">
                        <label>N_employees (Anzahl Mitarbeiter)</label>
                        <input type="number" id="local_N_employees" value="10" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Berechnen</button>
                </form>
                <div class="loading" id="localLoading">
                    <div class="spinner"></div>
                </div>
                <div class="error" id="localError"></div>
                <div class="results" id="localResults"></div>
            </div>

            <!-- Globale BPP-Berechnung -->
            <div class="calc-card">
                <h2>🌍 Globale BPP-Modelle</h2>
                <form id="globalForm">
                    <div class="form-group">
                        <label>BPP_global (Globale Wirtschaftsleistung in €)</label>
                        <input type="number" id="global_BPP_global" value="100000000000000" required>
                    </div>
                    <div class="form-group">
                        <label>F_free_rate (Frei investierbarer Anteil 0-1)</label>
                        <input type="number" id="global_F_free_rate" value="0.05" step="0.01" min="0" max="1" required>
                    </div>
                    <div class="form-group">
                        <label>alpha_0 (TTT Startanteil)</label>
                        <input type="number" id="global_alpha_0" value="0.000001" step="0.000001" required>
                    </div>
                    <div class="form-group">
                        <label>N_employees (Anzahl Mitarbeiter)</label>
                        <input type="number" id="global_N_employees" value="10" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Berechnen</button>
                </form>
                <div class="loading" id="globalLoading">
                    <div class="spinner"></div>
                </div>
                <div class="error" id="globalError"></div>
                <div class="results" id="globalResults"></div>
            </div>

            <!-- Produktionskosten -->
            <div class="calc-card">
                <h2>🏭 Produktionskosten</h2>
                <form id="productionForm">
                    <div class="form-group">
                        <label>product_time_hours (Produktionszeit in Stunden)</label>
                        <input type="number" id="prod_product_time_hours" value="40" required>
                    </div>
                    <div class="form-group">
                        <label>production_cost_base (Basis-Kosten in €)</label>
                        <input type="number" id="prod_production_cost_base" value="1000" required>
                    </div>
                    <div class="form-group">
                        <label>mass_capital_factor (Massenkapitaleinsatz-Faktor)</label>
                        <input type="number" id="prod_mass_capital_factor" value="1.5" step="0.1" required>
                    </div>
                    <div class="form-group">
                        <label>productivity_rate (Produktivitätsrate 0-1)</label>
                        <input type="number" id="prod_productivity_rate" value="0.9" step="0.01" min="0" max="1" required>
                    </div>
                    <div class="form-group">
                        <label>time_cost_rate (Zeitkosten-Rate €/Stunde)</label>
                        <input type="number" id="prod_time_cost_rate" value="50" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Berechnen</button>
                </form>
                <div class="loading" id="productionLoading">
                    <div class="spinner"></div>
                </div>
                <div class="error" id="productionError"></div>
                <div class="results" id="productionResults"></div>
            </div>

            <!-- Zeitkosten-Leitzahl -->
            <div class="calc-card">
                <h2>⏱️ Zeitkosten-Leitzahl</h2>
                <form id="timeIndexForm">
                    <div class="form-group">
                        <label>total_time_invested_hours (Gesamt investierte Zeit)</label>
                        <input type="number" id="time_total_time" value="1000" required>
                    </div>
                    <div class="form-group">
                        <label>productive_time_hours (Produktive Zeit)</label>
                        <input type="number" id="time_productive_time" value="800" required>
                    </div>
                    <div class="form-group">
                        <label>time_value_rate (Zeitwert-Rate €/Stunde)</label>
                        <input type="number" id="time_time_value_rate" value="50" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Berechnen</button>
                </form>
                <div class="loading" id="timeIndexLoading">
                    <div class="spinner"></div>
                </div>
                <div class="error" id="timeIndexError"></div>
                <div class="results" id="timeIndexResults"></div>
            </div>
        </div>

        <!-- Kombinierte Berechnung -->
        <div class="calc-card scenarios-section">
            <h2>🔗 Kombinierte Berechnung & Szenarien</h2>
            <p style="margin-bottom: 20px; color: rgba(255, 255, 255, 0.7);">
                Kombinieren Sie lokale Kapitalflüsse, globale BPP und Produktionskosten in einem Szenario.
            </p>
            <form id="completeForm">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
                    <div>
                        <h3 style="color: var(--investor-color); margin-bottom: 15px;">Lokale Parameter</h3>
                        <div class="form-group">
                            <label>N</label>
                            <input type="number" id="complete_local_N" value="10000">
                        </div>
                        <div class="form-group">
                            <label>f (€)</label>
                            <input type="number" id="complete_local_f" value="5000">
                        </div>
                        <div class="form-group">
                            <label>p</label>
                            <input type="number" id="complete_local_p" value="0.1" step="0.01">
                        </div>
                        <div class="form-group">
                            <label>I_avg (€)</label>
                            <input type="number" id="complete_local_I_avg" value="10000">
                        </div>
                        <div class="form-group">
                            <label>m</label>
                            <input type="number" id="complete_local_m" value="0.2" step="0.01">
                        </div>
                        <div class="form-group">
                            <label>u</label>
                            <input type="number" id="complete_local_u" value="0.8" step="0.01">
                        </div>
                        <div class="form-group">
                            <label>K_fix (€)</label>
                            <input type="number" id="complete_local_K_fix" value="50000">
                        </div>
                        <div class="form-group">
                            <label>N_employees</label>
                            <input type="number" id="complete_local_N_employees" value="10">
                        </div>
                    </div>
                    <div>
                        <h3 style="color: var(--investor-color); margin-bottom: 15px;">Globale Parameter</h3>
                        <div class="form-group">
                            <label>BPP_global (€)</label>
                            <input type="number" id="complete_global_BPP_global" value="100000000000000">
                        </div>
                        <div class="form-group">
                            <label>F_free_rate</label>
                            <input type="number" id="complete_global_F_free_rate" value="0.05" step="0.01">
                        </div>
                        <div class="form-group">
                            <label>alpha_0</label>
                            <input type="number" id="complete_global_alpha_0" value="0.000001" step="0.000001">
                        </div>
                    </div>
                    <div>
                        <h3 style="color: var(--investor-color); margin-bottom: 15px;">Produktions-Parameter</h3>
                        <div class="form-group">
                            <label>product_time_hours</label>
                            <input type="number" id="complete_prod_product_time_hours" value="40">
                        </div>
                        <div class="form-group">
                            <label>production_cost_base (€)</label>
                            <input type="number" id="complete_prod_production_cost_base" value="1000">
                        </div>
                        <div class="form-group">
                            <label>mass_capital_factor</label>
                            <input type="number" id="complete_prod_mass_capital_factor" value="1.5" step="0.1">
                        </div>
                        <div class="form-group">
                            <label>productivity_rate</label>
                            <input type="number" id="complete_prod_productivity_rate" value="0.9" step="0.01">
                        </div>
                    </div>
                </div>
                <div class="form-group" style="margin-top: 20px;">
                    <label>Szenario-Name (optional)</label>
                    <input type="text" id="scenarioName" placeholder="z.B. Optimistisches Szenario 2025">
                </div>
                <button type="submit" class="btn btn-primary" style="margin-top: 10px;">Kombinierte Berechnung durchführen</button>
            </form>
            <div class="loading" id="completeLoading">
                <div class="spinner"></div>
            </div>
            <div class="error" id="completeError"></div>
            <div class="results" id="completeResults"></div>
        </div>

        <!-- API Info -->
        <div class="api-info">
            <strong>🔌 API-Endpunkte:</strong><br>
            <code>POST /api/investor/calculate/local</code> | 
            <code>POST /api/investor/calculate/global</code> | 
            <code>POST /api/investor/calculate/production</code> | 
            <code>POST /api/investor/calculate/time-index</code> | 
            <code>POST /api/investor/calculate/complete</code>
        </div>
    </div>

    <script>
        const API_BASE = window.location.origin;

        // Helper Functions
        function showLoading(id) {
            document.getElementById(id).classList.add('show');
        }

        function hideLoading(id) {
            document.getElementById(id).classList.remove('show');
        }

        function showError(id, message) {
            const errorEl = document.getElementById(id);
            errorEl.textContent = message;
            errorEl.classList.add('show');
        }

        function hideError(id) {
            document.getElementById(id).classList.remove('show');
        }

        function showResults(id, result) {
            const resultsEl = document.getElementById(id);
            resultsEl.innerHTML = '';
            
            for (const [key, value] of Object.entries(result)) {
                if (typeof value === 'number') {
                    const formattedValue = value.toLocaleString('de-DE', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                    resultsEl.innerHTML += \`
                        <div class="result-item">
                            <span class="result-label">\${key}:</span>
                            <span class="result-value">\${formattedValue} €</span>
                        </div>
                    \`;
                } else {
                    resultsEl.innerHTML += \`
                        <div class="result-item">
                            <span class="result-label">\${key}:</span>
                            <span class="result-value">\${value}</span>
                        </div>
                    \`;
                }
            }
            
            resultsEl.classList.add('show');
        }

        // Local Calculation
        document.getElementById('localForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            hideError('localError');
            showLoading('localLoading');
            
            const params = {
                N: parseInt(document.getElementById('local_N').value),
                f: parseFloat(document.getElementById('local_f').value),
                p: parseFloat(document.getElementById('local_p').value),
                I_avg: parseFloat(document.getElementById('local_I_avg').value),
                m: parseFloat(document.getElementById('local_m').value),
                u: parseFloat(document.getElementById('local_u').value),
                K_fix: parseFloat(document.getElementById('local_K_fix').value),
                N_employees: parseInt(document.getElementById('local_N_employees').value)
            };
            
            try {
                const response = await fetch(\`\${API_BASE}/api/investor/calculate/local\`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(params)
                });
                
                const data = await response.json();
                hideLoading('localLoading');
                
                if (data.success) {
                    showResults('localResults', data.result);
                } else {
                    showError('localError', data.error || 'Berechnung fehlgeschlagen');
                }
            } catch (error) {
                hideLoading('localLoading');
                showError('localError', \`Fehler: \${error.message}\`);
            }
        });

        // Global Calculation
        document.getElementById('globalForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            hideError('globalError');
            showLoading('globalLoading');
            
            const params = {
                BPP_global: parseFloat(document.getElementById('global_BPP_global').value),
                F_free_rate: parseFloat(document.getElementById('global_F_free_rate').value),
                alpha_0: parseFloat(document.getElementById('global_alpha_0').value),
                N_employees: parseInt(document.getElementById('global_N_employees').value)
            };
            
            try {
                const response = await fetch(\`\${API_BASE}/api/investor/calculate/global\`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(params)
                });
                
                const data = await response.json();
                hideLoading('globalLoading');
                
                if (data.success) {
                    showResults('globalResults', data.result);
                } else {
                    showError('globalError', data.error || 'Berechnung fehlgeschlagen');
                }
            } catch (error) {
                hideLoading('globalLoading');
                showError('globalError', \`Fehler: \${error.message}\`);
            }
        });

        // Production Calculation
        document.getElementById('productionForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            hideError('productionError');
            showLoading('productionLoading');
            
            const params = {
                product_time_hours: parseFloat(document.getElementById('prod_product_time_hours').value),
                production_cost_base: parseFloat(document.getElementById('prod_production_cost_base').value),
                mass_capital_factor: parseFloat(document.getElementById('prod_mass_capital_factor').value),
                productivity_rate: parseFloat(document.getElementById('prod_productivity_rate').value)
            };
            
            const time_cost_rate = parseFloat(document.getElementById('prod_time_cost_rate').value);
            
            try {
                const response = await fetch(\`\${API_BASE}/api/investor/calculate/production?time_cost_rate=\${time_cost_rate}\`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(params)
                });
                
                const data = await response.json();
                hideLoading('productionLoading');
                
                if (data.success) {
                    showResults('productionResults', data.result);
                } else {
                    showError('productionError', data.error || 'Berechnung fehlgeschlagen');
                }
            } catch (error) {
                hideLoading('productionLoading');
                showError('productionError', \`Fehler: \${error.message}\`);
            }
        });

        // Time Index Calculation
        document.getElementById('timeIndexForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            hideError('timeIndexError');
            showLoading('timeIndexLoading');
            
            const params = {
                total_time_invested_hours: parseFloat(document.getElementById('time_total_time').value),
                productive_time_hours: parseFloat(document.getElementById('time_productive_time').value),
                time_value_rate: parseFloat(document.getElementById('time_time_value_rate').value)
            };
            
            try {
                const response = await fetch(\`\${API_BASE}/api/investor/calculate/time-index\`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(params)
                });
                
                const data = await response.json();
                hideLoading('timeIndexLoading');
                
                if (data.success) {
                    showResults('timeIndexResults', data.result);
                } else {
                    showError('timeIndexError', data.error || 'Berechnung fehlgeschlagen');
                }
            } catch (error) {
                hideLoading('timeIndexLoading');
                showError('timeIndexError', \`Fehler: \${error.message}\`);
            }
        });

        // Complete Calculation
        document.getElementById('completeForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            hideError('completeError');
            showLoading('completeLoading');
            
            const local = {
                N: parseInt(document.getElementById('complete_local_N').value) || 10000,
                f: parseFloat(document.getElementById('complete_local_f').value) || 5000,
                p: parseFloat(document.getElementById('complete_local_p').value) || 0.1,
                I_avg: parseFloat(document.getElementById('complete_local_I_avg').value) || 10000,
                m: parseFloat(document.getElementById('complete_local_m').value) || 0.2,
                u: parseFloat(document.getElementById('complete_local_u').value) || 0.8,
                K_fix: parseFloat(document.getElementById('complete_local_K_fix').value) || 50000,
                N_employees: parseInt(document.getElementById('complete_local_N_employees').value) || 10
            };
            
            const global = {
                BPP_global: parseFloat(document.getElementById('complete_global_BPP_global').value) || 100000000000000,
                F_free_rate: parseFloat(document.getElementById('complete_global_F_free_rate').value) || 0.05,
                alpha_0: parseFloat(document.getElementById('complete_global_alpha_0').value) || 0.000001,
                N_employees: local.N_employees
            };
            
            const production = {
                product_time_hours: parseFloat(document.getElementById('complete_prod_product_time_hours').value) || 40,
                production_cost_base: parseFloat(document.getElementById('complete_prod_production_cost_base').value) || 1000,
                mass_capital_factor: parseFloat(document.getElementById('complete_prod_mass_capital_factor').value) || 1.5,
                productivity_rate: parseFloat(document.getElementById('complete_prod_productivity_rate').value) || 0.9
            };
            
            const body = {
                local,
                global,
                production,
                name: document.getElementById('scenarioName').value || 'Unbenanntes Szenario'
            };
            
            try {
                const response = await fetch(\`\${API_BASE}/api/investor/calculate/complete\`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });
                
                const data = await response.json();
                hideLoading('completeLoading');
                
                if (data.success) {
                    showResults('completeResults', data.result);
                } else {
                    showError('completeError', data.error || 'Berechnung fehlgeschlagen');
                }
            } catch (error) {
                hideLoading('completeLoading');
                showError('completeError', \`Fehler: \${error.message}\`);
            }
        });
    </script>
</body>
</html>



`;
