import { useEffect } from "react";
import QuizCard from "../QuizCard/QuizCard";

import './search.css';



function Search() {
    const quizzes = [1,1,1,1,1,1]
    useEffect(() => {
      
        fetch("http://localhost:8080/quizzes")
            .then(response => response.json())
            .then(data => console.log(data));
    }, [])
    
    
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