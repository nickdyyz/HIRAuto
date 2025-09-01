import { Hazard, RiskAssessmentResult } from '../models/risk';
import { assessMultipleRisks } from '../logic/assessment';
import { HazardService } from './hazardService';

export interface HazardAssessmentInput {
    hazardId: string;
    frequency: number; // 1-5 scale
    consequence: number; // 1-5 scale
}

export class RiskAssessmentService {
    private hazardService: HazardService;

    constructor() {
        this.hazardService = new HazardService();
    }

    assessRisks(assessments: HazardAssessmentInput[]): RiskAssessmentResult {
        const hazardAssessments = assessments.map(assessment => {
            const hazard = this.hazardService.getHazardById(assessment.hazardId);
            if (!hazard) {
                throw new Error(`Hazard with id ${assessment.hazardId} not found`);
            }
            return {
                hazard,
                frequency: assessment.frequency,
                consequence: assessment.consequence
            };
        });

        return assessMultipleRisks(hazardAssessments);
    }

    getAvailableHazards(): Hazard[] {
        return this.hazardService.getAvailableHazards();
    }
}