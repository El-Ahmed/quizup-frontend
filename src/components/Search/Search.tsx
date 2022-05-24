import QuizCard from "../QuizCard/QuizCard";

import './search.css';



function Search() {
    const quizzes = [1,1,1,1,1,1]
    
    return (
        <div>
            <h3 className="link">Explore / search="Countries"</h3>
            <div className="searchList">
                {quizzes.map((quiz) => <div className="card"><QuizCard  /></div>)}
            </div>
        </div>
    )
}

export default Search;