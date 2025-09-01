export function calculateRisk(frequency: number, consequence: number): number {
    return frequency * consequence;
}

export function getRiskLevel(riskScore: number): 'Low' | 'Medium' | 'High' {
    if (riskScore >= 15) return 'High';
    if (riskScore >= 5) return 'Medium';
    return 'Low';
}