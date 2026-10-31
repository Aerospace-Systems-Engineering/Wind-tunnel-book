import React, { useState } from 'react';

/**
 * Multiple-choice quiz with immediate answer feedback.
 *
 * Props
 * ─────
 * question   string   The question text.
 * options    string[] Answer choices (2–6 items).
 * correct    number   Zero-based index of the correct option.
 * feedback   string   (optional) Explanation shown after answering.
 *
 * Usage in MDX
 * ────────────
 * import Quiz from '@site/src/components/Quiz';
 *
 * <Quiz
 *   question="What is the test-section cross-section of PROTOFLOW?"
 *   options={['250 × 250 mm', '500 × 500 mm', '1000 × 1000 mm']}
 *   correct={1}
 *   feedback="The test section measures 500 × 500 mm, giving a hydraulic diameter of 0.5 m."
 * />
 */
export default function Quiz({ question, options, correct, feedback }) {
  const [selected, setSelected] = useState(null);
  const answered = selected !== null;

  function handleSelect(idx) {
    if (!answered) setSelected(idx);
  }

  function reset() {
    setSelected(null);
  }

  return (
    <div className="quiz-container">
      <p className="quiz-question">❓ {question}</p>

      {options.map((opt, idx) => {
        let cls = 'quiz-option';
        if (answered) {
          if (idx === correct) cls += ' quiz-option--correct';
          else if (idx === selected) cls += ' quiz-option--incorrect';
          else cls += ' quiz-option--dimmed';
          cls += ' quiz-option--locked';
        }
        return (
          <div
            key={idx}
            className={cls}
            onClick={() => handleSelect(idx)}
            role="button"
            tabIndex={answered ? -1 : 0}
            onKeyDown={(e) => e.key === 'Enter' && handleSelect(idx)}
          >
            <span className="quiz-option__letter">{String.fromCharCode(65 + idx)}.</span>
            <span>{opt}</span>
          </div>
        );
      })}

      {answered && (
        <div className={`quiz-feedback quiz-feedback--${selected === correct ? 'correct' : 'incorrect'}`}>
          {selected === correct
            ? '✅ Correct!'
            : `❌ Not quite — the correct answer is ${String.fromCharCode(65 + correct)}.`}
          {feedback && (
            <p className="quiz-feedback__explanation">{feedback}</p>
          )}
          <button className="quiz-reset-btn" onClick={reset}>
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
