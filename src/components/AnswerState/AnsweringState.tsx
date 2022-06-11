import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Player from '../../socketsModule/competitionEntities/Player';
import Question from '../../socketsModule/quizEntities/Question';
import './AnswerState.css' ;

export type PlayerAnswered = {
	playername: string,
	answered: boolean
}
interface Iprops {
    players: Player[];
    currentQuestion?: Question;
    counter: number;
	playerAnswered:PlayerAnswered[]
}


export default function AnswerState(props:Iprops) {

	
	
	const checkAnswer = (player:Player) => {
		if (props.currentQuestion && player.didAnswer(props.currentQuestion))
			return "did answer";
		return "didn't answer yet"
	}
	const didAnswer = (answred:boolean) => {
		if (answred) 
			return "did answer";
		return "didn't answer yet"
	}
	
	return (
		<div className='score-wrapper'>
					<div className='theme'>
							Movies / Chernobyl			
					</div>
					<div className='score-container'>
						<div className='score-title'>
                            <div className='question-count'>
                                <span>Question 1 / 15 </span>
                            </div>
                            <div className='question-text'><p>Question</p></div>
						</div>
						<div className='scores'>
							{props.playerAnswered.map((player)=> 
								<p className='information'><p>{player.playername} :</p><p>{didAnswer(player.answered)}</p></p>
							)}
						
						</div>
					</div>				
					<div className='bouttons'>
						<Link to='/score'>
							<button  className="play">Show scores</button>
						</Link>
					</div>

		</div>
	);
}
