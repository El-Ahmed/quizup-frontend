import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AnswerState.css' ;

interface FullName {
    players: string[];
}


export default function AnswerState(props:FullName) {

	
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
							{props.players.map((player)=> 
								<p className='information'><p>player :</p><p>Didn't answered yet</p></p>
							)}
						
						</div>
					</div>				
					<div className='bouttons'>
						<Link to='/score'>
							<button  className="play">Show question</button>
						</Link>
					</div>

		</div>
	);
}
