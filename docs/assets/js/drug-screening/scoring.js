/**
 * บคก.กสธ. V2 — Pure scoring logic
 * Source: Thai Ministry of Public Health substance use screening tool
 */

'use strict';

// Score tables per question
const Q1_SCORES = { 'never': 0, '1-2': 2, 'monthly': 3, 'weekly': 4, 'daily': 6 };
const Q2_SCORES = { 'never': 0, '1-2': 3, 'monthly': 4, 'weekly': 5, 'daily': 6 };
const Q3_SCORES = { 'never': 0, '1-2': 4, 'monthly': 5, 'weekly': 6, 'daily': 7 };
const Q4_SCORES = { 'never': 0, '1-2': 5, 'monthly': 6, 'weekly': 7, 'daily': 8 };
const Q56_SCORES = { 'never': 0, 'before': 3, 'recent': 6 };

/**
 * @param {{ q1: string, q2: string, q3: string, q4: string, q5: string, q6: string }} answers
 * @returns {number}
 */
function calculateScore(answers) {
  return (
    (Q1_SCORES[answers.q1] ?? 0) +
    (Q2_SCORES[answers.q2] ?? 0) +
    (Q3_SCORES[answers.q3] ?? 0) +
    (Q4_SCORES[answers.q4] ?? 0) +
    (Q56_SCORES[answers.q5] ?? 0) +
    (Q56_SCORES[answers.q6] ?? 0)
  );
}

/**
 * @param {number} score
 * @returns {0|1|2|3}
 */
function getTier(score) {
  if (score <= 1) return 0;
  if (score <= 3) return 1;
  if (score <= 26) return 2;
  return 3;
}

/**
 * @param {{ q1: string, q2: string, q3: string, q4: string, q5: string, q6: string }} answers
 * @param {string[]} substances
 * @param {string} primarySubstance
 * @param {boolean} injectionUse
 * @param {string|null} injectionFrequency
 * @returns {{ substanceType: string[], primarySubstance: string, scores: object, totalScore: number, tier: number, injectionUse: boolean, injectionFrequency: string|null, completedAt: string, screeningVersion: string }}
 */
function buildResult(answers, substances, primarySubstance, injectionUse, injectionFrequency) {
  const totalScore = calculateScore(answers);
  return {
    substanceType: substances,
    primarySubstance,
    scores: { q1: Q1_SCORES[answers.q1] ?? 0, q2: Q2_SCORES[answers.q2] ?? 0, q3: Q3_SCORES[answers.q3] ?? 0, q4: Q4_SCORES[answers.q4] ?? 0, q5: Q56_SCORES[answers.q5] ?? 0, q6: Q56_SCORES[answers.q6] ?? 0 },
    totalScore,
    tier: getTier(totalScore),
    injectionUse,
    injectionFrequency: injectionUse ? injectionFrequency : null,
    completedAt: new Date().toISOString(),
    screeningVersion: 'bkk-v2'
  };
}

// Node.js exports for unit tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateScore, getTier, buildResult };
}
