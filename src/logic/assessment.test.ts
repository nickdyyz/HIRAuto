import { assessRisk, rankRisks, assessMultipleRisks } from './assessment';
import { Hazard } from '../models/risk';

describe('Assessment Logic', () => {
    const mockHazard: Hazard = {
        id: 'test-001',
        name: 'Test Hazard',
        description: 'A test hazard for unit testing',
        category: 'Test Category'
    };

    describe('assessRisk', () => {
        test('should create a risk assessment correctly', () => {
            const result = assessRisk(mockHazard, 3, 4);

            expect(result.hazard).toEqual(mockHazard);
            expect(result.frequency).toBe(3);
            expect(result.consequence).toBe(4);
            expect(result.riskScore).toBe(12);
            expect(result.riskLevel).toBe('Medium');
            expect(result.id).toContain('risk-test-001-');
        });

        test('should handle different risk levels', () => {
            const lowRisk = assessRisk(mockHazard, 1, 2);
            const highRisk = assessRisk(mockHazard, 5, 6);

            expect(lowRisk.riskLevel).toBe('Low');
            expect(lowRisk.riskScore).toBe(2);
            
            expect(highRisk.riskLevel).toBe('High');
            expect(highRisk.riskScore).toBe(30);
        });
    });

    describe('rankRisks', () => {
        test('should rank risks by score in descending order', () => {
            const risk1 = assessRisk(mockHazard, 1, 2); // score: 2
            const risk2 = assessRisk(mockHazard, 3, 4); // score: 12
            const risk3 = assessRisk(mockHazard, 2, 3); // score: 6

            const ranked = rankRisks([risk1, risk2, risk3]);

            expect(ranked[0].riskScore).toBe(12);
            expect(ranked[1].riskScore).toBe(6);
            expect(ranked[2].riskScore).toBe(2);
        });

        test('should not mutate original array', () => {
            const risk1 = assessRisk(mockHazard, 1, 2);
            const risk2 = assessRisk(mockHazard, 3, 4);
            const original = [risk1, risk2];

            const ranked = rankRisks(original);

            expect(original[0]).toBe(risk1);
            expect(original[1]).toBe(risk2);
            expect(ranked).not.toBe(original);
        });
    });

    describe('assessMultipleRisks', () => {
        test('should assess multiple risks and return results', () => {
            const hazard2: Hazard = {
                id: 'test-002',
                name: 'Test Hazard 2',
                description: 'Another test hazard',
                category: 'Test Category'
            };

            const assessments = [
                { hazard: mockHazard, frequency: 2, consequence: 3 },
                { hazard: hazard2, frequency: 4, consequence: 5 }
            ];

            const result = assessMultipleRisks(assessments);

            expect(result.risks).toHaveLength(2);
            expect(result.rankedRisks).toHaveLength(2);
            expect(result.rankedRisks[0].riskScore).toBe(20); // Higher score first
            expect(result.rankedRisks[1].riskScore).toBe(6);
        });
    });
});
