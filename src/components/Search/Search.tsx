import { useEffect, useState } from "react";
import QuizCard from "../QuizCard/QuizCard";

import './search.css';



export default function Search() {
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/quizzes")
            .then(response => response.json())
            .then(data => {setQuizzes(data); console.log(data);});
    
    }, [])
    
    
    return (
        <div>
            <h3 className="link">Explore / search="Countries"</h3>
            <div className="searchList">
                {quizzes.map((quiz) => <div className="card"><QuizCard  quiz={quiz}/></div>)}
            </div>
        </div>
    )
}
