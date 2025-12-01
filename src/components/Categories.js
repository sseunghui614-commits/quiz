const Categories = ({categories,onSelect}) => {
    return (
        <div id="categories">
            <div className="category-header">
                <img 
                className="category-logo"
                src="/images/quizfinish.png"
                alt="quiz logo" />
                <h3>카테고리를 선택하세요</h3>
            </div>
        <ul>
            {
                categories.map((item,idx)=>{
                    return(
                    <li key={idx}
                    onClick={()=>{onSelect(item)}}>
                        {item}
                        </li>
                    )
                })
            }
        </ul>
        </div>
    )
}

export default Categories
