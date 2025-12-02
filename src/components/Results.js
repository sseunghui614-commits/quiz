const Results = ({ score, onReStart,onGoStart }) => {
    return (
        <div id="results-page">
            <div className="result-header">
                <img
                    className="result-logo" 
                    src={`${process.env.PUBLIC_URL}/images/quizfinished.png`}
                    alt="quiz logo" />
                <h2 className="results-title">퀴즈 완료</h2>
                <p className="result-score">{score}</p>
            </div>
        <div className="result-buttons">
            <button className="primary-btn" onClick={onReStart}>
            다시 풀기
            </button>
            <button className="secondary-btn" onClick={onGoStart}>완료</button>
        </div>
        </div>
    );
};

export default Results;
