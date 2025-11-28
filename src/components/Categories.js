const Categories = ({categories,onSelect}) => {
    console.log(categories);
    return (
        <div id="categories">
        <img src="/images/quizfinish.png" alt="quiz logo" />
        <h3>카테고리를 선택하세요</h3>
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
