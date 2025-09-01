import { Risk, Hazard, RiskAssessmentResult } from '../models/risk';
import { calculateRisk, getRiskLevel } from '../algorithm/proprietaryAlgorithm';

export function assessRisk(hazard: Hazard, frequency: number, consequence: number): Risk {
    const riskScore = calculateRisk(frequency, consequence);
    const riskLevel = getRiskLevel(riskScore);
    
    return {
        id: `risk-${hazard.id}-${Date.now()}`,
        hazard,
        frequency,
        consequence,
        riskScore,
        riskLevel
    };
}

export function rankRisks(risks: Risk[]): Risk[] {
    return [...risks].sort((a, b) => b.riskScore - a.riskScore);
}

export function assessMultipleRisks(hazardAssessments: Array<{ hazard: Hazard; frequency: number; consequence: number }>): RiskAssessmentResult {
    const risks = hazardAssessments.map(({ hazard, frequency, consequence }) => 
        assessRisk(hazard, frequency, consequence)
    );
    
    return {
        risks,
        rankedRisks: rankRisks(risks)
    };
}