import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Player from '../../socketsModule/competitionEntities/Player';
import './Score.css' ;

interface scores {
	players:Player[];
    questionNumber: number;
}

export default function Scores(props:scores) {

	
	return (
		<div className='score-wrapper'>
					<div className='theme'>
							Movies / Chernobyl			
					</div>
					<div className='score-container'>
						<div className='scorPOLJBe-title'>
                            <div className='question-count'>
                                <span>Question 1 / 15 </span>
                            </div>
							<p>SCORES :</p>
						</div>
						<div className='scores'>
							{props.players.map((player) => 
								<p className='information'><p>{player.getName()} :</p><p>{player.getScore().score}</p></p>
							)}
						</div>
					</div>				
					<div className='bouttons'>
						<button  className="play">Next Question</button>
					</div>

		</div>
	);
}
