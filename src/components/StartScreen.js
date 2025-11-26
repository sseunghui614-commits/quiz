const StartScreen = ({ onStart }) => {
    return (
        <div id="start-screen">
        <div className="logo-mark">📚</div>
        <p className="start-subtitle">한국사를 한눈에</p>
        <button className="primary-btn" onClick={onStart}>
            시작
        </button>
        </div>
    );
};

export default StartScreen;