import { calculateRisk, getRiskLevel } from './proprietaryAlgorithm';

describe('ProprietaryAlgorithm', () => {
    describe('calculateRisk', () => {
        test('should calculate risk score correctly', () => {
            expect(calculateRisk(3, 4)).toBe(12);
            expect(calculateRisk(1, 1)).toBe(1);
            expect(calculateRisk(6, 6)).toBe(36);
        });

        test('should handle edge cases', () => {
            expect(calculateRisk(0, 5)).toBe(0);
            expect(calculateRisk(5, 0)).toBe(0);
        });
    });

    describe('getRiskLevel', () => {
        test('should return correct risk level for high scores', () => {
            expect(getRiskLevel(25)).toBe('High');
            expect(getRiskLevel(15)).toBe('High');
        });

        test('should return correct risk level for medium scores', () => {
            expect(getRiskLevel(10)).toBe('Medium');
            expect(getRiskLevel(5)).toBe('Medium');
        });

        test('should return correct risk level for low scores', () => {
            expect(getRiskLevel(4)).toBe('Low');
            expect(getRiskLevel(1)).toBe('Low');
        });

        test('should handle boundary conditions', () => {
            expect(getRiskLevel(15)).toBe('High');
            expect(getRiskLevel(14)).toBe('Medium');
            expect(getRiskLevel(5)).toBe('Medium');
            expect(getRiskLevel(4)).toBe('Low');
        });
    });
});
