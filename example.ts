import { RiskAssessmentService, HazardAssessmentInput } from './src';

// Example usage of the hazard risk assessment service
const service = new RiskAssessmentService();

// Get available hazards for user selection
const availableHazards = service.getAvailableHazards();
console.log('Available Hazards:', availableHazards);

// User selects hazards and provides frequency and consequence
const userAssessments: HazardAssessmentInput[] = [
    { hazardId: 'nh_hyd_001', frequency: 4, consequence: 3 }, // Flooding
    { hazardId: 'th_acc_001', frequency: 2, consequence: 5 }, // Hazardous Chemical Release
    { hazardId: 'th_inf_005', frequency: 3, consequence: 4 }, // Cyberattack
    { hazardId: 'he_bio_002', frequency: 1, consequence: 5 }  // Pandemic
];

// Assess risks and get ranking
const result = service.assessRisks(userAssessments);

console.log('\nRisk Assessment Results:');
console.log('All Risks:', result.risks);
console.log('\nRanked Risks (by consequence):');
result.rankedRisks.forEach((risk, index) => {
    console.log(`${index + 1}. ${risk.hazard.name} - Score: ${risk.riskScore}, Level: ${risk.riskLevel}`);
});