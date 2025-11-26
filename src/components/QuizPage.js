import { useState } from "react";

const QuizPage = ({ quizes, onFinish, onScore, score }) => {
    const [current, setCurrent] = useState(0);

    const handleClick = (idx) => {
    // 정답 체크 (correct는 0,1,2,3 인덱스 기준)
    if (idx === quizes[current].correct) {
      // 점수 += 20
    onScore(20);
    }

    // 다음 문제로 이동 또는 종료
    if (current < quizes.length - 1) {
        setCurrent(current + 1);
    } else {
        onFinish(true);
    }
};

    const currentQuiz = quizes[current];

    return (
        <div id="quiz-page">
        <h3>퀴즈 ({current + 1}/{quizes.length})</h3>
        <p className="quiz-question">{currentQuiz.question}</p>

        <ul className="choices">
            {currentQuiz.choices.map((item, idx) => {
            // 0→A, 1→B, 2→C, 3→D
            const label = String.fromCharCode(65 + idx);

            return (
                <li
                key={idx}
                className="choice-item"
                onClick={() => handleClick(idx)}
                >
                <div className="choice-label">{label}</div>
                <div className="choice-text">{item}</div>
                </li>
            );
            })}
        </ul>

        <p>Child Score : {score}</p>
        </div>
    );
};

export default QuizPage;
