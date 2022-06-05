import React, { useState } from 'react';
import Question from '../../socketsModule/quizEntities/Question';
import './Question.css';

interface Quest {
	question: Question
}
export default function Question1({question}: Quest) {
	
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [counter, setCounter] = useState(15);
// 
	// React.useEffect(() => {
		// const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		// return () => clearInterval(timer);
	//   }, [counter]);

	const handleAnswerOptionClick = (isCorrect) => {
	
	};
	return (
		<div className='app'>
				<>
					<div className='question-section'>
						<div className='question-text'><h2>{question.getQuestionText()}</h2></div>
					</div>
					{/* <div className='image-container'>
					<img src="https://www.museos.com/wp-content/uploads/2021/02/Eiffelturm-Paris6-scaled.jpg" alt="paris"/>
					</div> */}
					<div className='answer-section'>
						{question.getChoices().map((choice) => (
							<button  onClick={() => {}}>{choice.getText()}</button>
						))}
					</div>
				</>
		</div>
	);
}
