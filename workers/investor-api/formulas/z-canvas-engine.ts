/**
 * Z-Canvas Kapitalformeln-Engine
 * Vollständige Implementierung aller Formeln aus dem Z-Canvas Endbericht
 */

export interface LocalCapitalParams {
  N: number;              // Anzahl Menschen im Raum
  f: number;              // Freies investierbares BPP pro Person/Jahr (€/Jahr)
  p: number;              // Konversionsrate Interessent → Investor (0-1)
  I_avg: number;          // Durchschnittliche Investition pro Investor/Jahr (€)
  m: number;              // Gewinnmarge (0-1)
  u: number;              // Automatisierungsgrad (0-1)
  K_fix: number;          // Fixkosten pro Jahr (€)
  N_employees: number;    // Anzahl kooptimaler Mitarbeiter:innen
}

export interface GlobalBPPParams {
  BPP_global: number;     // Globale Wirtschaftsleistung pro Jahr (€)
  F_free_rate: number;    // Frei investierbarer Anteil (Standard: 0.05 = 5%)
  alpha_0: number;        // Startanteil von TTT (Standard: 10^-6)
  N_employees: number;    // Anzahl kooptimaler Mitarbeiter:innen
}

export interface ProductionCostParams {
  product_time_hours: number;     // Zeit für Produktherstellung (Stunden)
  production_cost_base: number;   // Basis-Produktionskosten (€)
  mass_capital_factor: number;    // Massenkapitaleinsatz-Faktor
  productivity_rate: number;      // Produktivitätsrate (0-1)
}

export interface CalculationResult {
  // Lokale Kapitalflüsse
  C_max_local: number;           // Theoretischer Maximalstrom (€/Sekunde)
  C_year: number;                // Tatsächlicher Kapitalstrom pro Jahr (€)
  C_sec: number;                 // Tatsächlicher Kapitalstrom pro Sekunde (€)
  C_quarter: number;             // Kapitalstrom pro 0,25 Sekunden (€)
  AQQ: number;                   // Äquizidenz-Qualifikationsquotient
  G: number;                     // Gewinn (€)
  GKK: number;                   // Gewinn-Kosten-Koeffizient
  EQF: number;                   // Effizienz-Qualifikations-Faktor
  bonus_per_employee: number;    // Bonus pro Mitarbeiter (€)
  
  // Globale BPP-Berechnungen
  C_max_global?: number;         // Globaler Maximalstrom (€/Sekunde)
  C_TTT_year?: number;           // TTT Kapitalstrom pro Jahr (€)
  alpha?: number;                // TTT-Anteil am globalen BPP
  G_TTT?: number;                // TTT Gewinn (€)
  
  // Produktionskosten
  production_cost_total?: number; // Gesamte Produktionskosten (€)
  time_cost_factor?: number;      // Zeitkosten-Faktor
  profit_margin?: number;         // Gewinnmarge (€)
}

const SECONDS_PER_YEAR = 31_536_000; // S = 31.536.000 Sekunden

/**
 * Berechnet lokale Kapitalflüsse nach Z-Canvas Formeln
 */
export function calculateLocalCapital(params: LocalCapitalParams): CalculationResult {
  const { N, f, p, I_avg, m, u, K_fix, N_employees } = params;
  
  // Theoretischer Maximalstrom
  const F = N * f; // Gesamtes freies BPP im Raum
  const C_max_local = F / SECONDS_PER_YEAR;
  
  // Tatsächlicher Kapitalstrom
  const C_year = N * p * I_avg;
  const C_sec = C_year / SECONDS_PER_YEAR;
  const C_quarter = 0.25 * C_sec;
  
  // Äquizidenz-Qualifikationsquotient (AQQ)
  const AQQ = C_max_local > 0 ? C_sec / C_max_local : 0;
  
  // Gewinn
  const G = C_year * m - K_fix;
  
  // Gewinn-Kosten-Koeffizient (GKK)
  const GKK = K_fix > 0 ? G / K_fix : (G > 0 ? Infinity : 0);
  
  // Effizienz-Qualifikations-Faktor (EQF)
  const EQF = AQQ * m * u;
  
  // Bonus pro Mitarbeiter
  const bonus_per_employee = (G > 0 && N_employees > 0) ? G / N_employees : 0;
  
  return {
    C_max_local,
    C_year,
    C_sec,
    C_quarter,
    AQQ,
    G,
    GKK,
    EQF,
    bonus_per_employee
  };
}

/**
 * Berechnet globale BPP-Modelle und Mitarbeiterverstärkung
 */
export function calculateGlobalBPP(params: GlobalBPPParams): CalculationResult {
  const { BPP_global, F_free_rate = 0.05, alpha_0 = 1e-6, N_employees } = params;
  
  // Frei investierbarer Anteil
  const F_free = F_free_rate * BPP_global;
  
  // Theoretischer Maximalstrom global
  const C_max_global = F_free / SECONDS_PER_YEAR;
  
  // TTT-Startanteil mit Mitarbeiterverstärkung
  // Jede kooptimale Mitarbeiterin erhöht den Anteil relativ um 1%
  const alpha = alpha_0 * Math.pow(1.01, N_employees);
  
  // TTT Kapitalstrom
  const C_TTT_sec = alpha * C_max_global;
  const C_TTT_year = C_TTT_sec * SECONDS_PER_YEAR;
  
  // TTT Gewinn (mit angenommener Marge von 80%)
  const G_TTT = C_TTT_year * 0.8;
  
  return {
    C_max_local: 0,
    C_year: 0,
    C_sec: 0,
    C_quarter: 0,
    AQQ: 0,
    G: 0,
    GKK: 0,
    EQF: 0,
    bonus_per_employee: 0,
    C_max_global,
    C_TTT_year,
    alpha,
    G_TTT
  };
}

/**
 * Berechnet Produktionskosten basierend auf Zeit und Faktoren
 */
export function calculateProductionCosts(
  params: ProductionCostParams,
  time_cost_rate: number = 50 // €/Stunde Standard
): CalculationResult {
  const { product_time_hours, production_cost_base, mass_capital_factor, productivity_rate } = params;
  
  // Zeitkosten
  const time_cost = product_time_hours * time_cost_rate;
  
  // Massenkapitaleinsatzkosten
  const mass_capital_cost = production_cost_base * mass_capital_factor;
  
  // Gesamte Produktionskosten
  const production_cost_total = (time_cost + production_cost_base + mass_capital_cost) / productivity_rate;
  
  // Zeitkosten-Faktor (für Zeitkosten-Leitzahl)
  const time_cost_factor = time_cost / production_cost_total;
  
  // Gewinnmarge (20% Standard)
  const profit_margin = production_cost_total * 0.2;
  
  return {
    C_max_local: 0,
    C_year: 0,
    C_sec: 0,
    C_quarter: 0,
    AQQ: 0,
    G: profit_margin,
    GKK: 0,
    EQF: 0,
    bonus_per_employee: 0,
    production_cost_total,
    time_cost_factor,
    profit_margin
  };
}

/**
 * Kombinierte Berechnung: Lokal + Global + Produktionskosten
 */
export function calculateComplete(
  localParams: LocalCapitalParams,
  globalParams?: GlobalBPPParams,
  productionParams?: ProductionCostParams
): CalculationResult {
  const localResult = calculateLocalCapital(localParams);
  
  let globalResult: Partial<CalculationResult> = {};
  if (globalParams) {
    const gr = calculateGlobalBPP(globalParams);
    globalResult = {
      C_max_global: gr.C_max_global,
      C_TTT_year: gr.C_TTT_year,
      alpha: gr.alpha,
      G_TTT: gr.G_TTT
    };
  }
  
  let productionResult: Partial<CalculationResult> = {};
  if (productionParams) {
    const pr = calculateProductionCosts(productionParams);
    productionResult = {
      production_cost_total: pr.production_cost_total,
      time_cost_factor: pr.time_cost_factor,
      profit_margin: pr.profit_margin
    };
  }
  
  return {
    ...localResult,
    ...globalResult,
    ...productionResult
  };
}

/**
 * Zeitkosten-Leitzahl (Self-Investment Signal für Investoren)
 * 
 * Beschreibt die verschwendete/investierte Zeit als Signal für Investor:innen
 */
export function calculateTimeCostIndex(
  total_time_invested_hours: number,
  productive_time_hours: number,
  time_value_rate: number = 50 // €/Stunde
): number {
  if (total_time_invested_hours === 0) return 0;
  
  // Effizienz-Rate
  const efficiency = productive_time_hours / total_time_invested_hours;
  
  // Zeitkosten-Leitzahl (0-1, höher = besser)
  const time_cost_index = efficiency * (1 - (total_time_invested_hours / (total_time_invested_hours + 1)));
  
  return time_cost_index;
}



