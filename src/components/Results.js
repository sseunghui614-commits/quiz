const Results = ({ score, onReStart }) => {
    return (
        <div id="results-page">
        <div className="logo-mark small">📚</div>
        <h2>퀴즈 완료</h2>
        <p className="result-score">{score}</p>

        <div className="result-buttons">
            <button className="primary-btn" onClick={onReStart}>
            다시 풀기
            </button>
            <button className="secondary-btn">완료</button>
        </div>
        </div>
    );
};

export default Results;
