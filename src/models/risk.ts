export interface Hazard {
    id: string;
    name: string;
    description: string;
    category: string;
}

export interface Risk {
    id: string;
    hazard: Hazard;
    frequency: number; // Scale from 1 to 5
    consequence: number; // Scale from 1 to 5
    riskScore: number;
    riskLevel: 'Low' | 'Medium' | 'High';
}

export interface RiskAssessmentResult {
    risks: Risk[];
    rankedRisks: Risk[];
}