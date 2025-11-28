const StartScreen = ({ onStart }) => {
    return (
        <div id="start-screen">
        <div className="start-top">
            <div className="logo-mark">
                <img src="/images/quizfinish.png" alt="quiz logo" />
            </div>
            <p className="start-subtitle">한국사를 한눈에</p>
        </div>
        <button className="primary-btn" onClick={onStart}>
            시작
        </button>
        </div>
    );
};

export default StartScreen;