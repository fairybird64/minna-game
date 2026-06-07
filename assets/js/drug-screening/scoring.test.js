/**
 * Unit tests for scoring.js — run with: node scoring.test.js
 */
const { calculateScore, getTier } = require('./scoring');

let passed = 0;
let failed = 0;

function expect(actual) {
  return {
    toBe(expected) {
      if (actual === expected) {
        console.log(`  ✓ got ${actual}`);
        passed++;
      } else {
        console.error(`  ✗ expected ${expected}, got ${actual}`);
        failed++;
      }
    }
  };
}

// Helper: answer keys mapped to score keys
const N = 'never', L = '1-2', M = 'monthly', W = 'weekly', D = 'daily';
const B = 'before', R = 'recent';

console.log('\n=== calculateScore ===');

console.log('No use (all 0):');
expect(calculateScore({ q1: N, q2: N, q3: N, q4: N, q5: N, q6: N })).toBe(0);

console.log('Tier 1 low (q1 only, score 2):');
expect(calculateScore({ q1: L, q2: N, q3: N, q4: N, q5: N, q6: N })).toBe(2);

console.log('Tier 3 max values (score 39):');
expect(calculateScore({ q1: D, q2: D, q3: D, q4: D, q5: R, q6: R })).toBe(6+6+7+8+6+6);

console.log('\n=== getTier ===');

console.log('score 0 → tier 0:'); expect(getTier(0)).toBe(0);
console.log('score 1 → tier 0:'); expect(getTier(1)).toBe(0);
console.log('score 2 → tier 1:'); expect(getTier(2)).toBe(1);
console.log('score 3 → tier 1:'); expect(getTier(3)).toBe(1);
console.log('score 4 → tier 2:'); expect(getTier(4)).toBe(2);
console.log('score 26 → tier 2:'); expect(getTier(26)).toBe(2);
console.log('score 27 → tier 3:'); expect(getTier(27)).toBe(3);
console.log('score 39 → tier 3:'); expect(getTier(39)).toBe(3);

console.log(`\nResults: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
