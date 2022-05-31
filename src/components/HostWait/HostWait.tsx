import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HostWait.css' ;
import { createCompetition, nextQuestion, startCompetition } from "../../socketsModule/facade/HostFacade";
import QuestionsController from "../../socketsModule/quizControllers/QuestionsController";
import Question from "../../socketsModule/quizEntities/Question";
import Quiz from "../../socketsModule/quizEntities/Quiz";
import AnswerState from '../AnswerState/AnsweringState';


export default function Details() {

	const [pin, setPin] = useState('')
    const [qc, setQC] = useState<QuestionsController>()
    const [players, setPlayers] = useState<string[]>([])
    const [questionNum, setQN] = useState(0);

    const playerObserver = (players:string[]) => { setPlayers(players); };
 	const quiz = new Quiz('name','desc',[new Question("test1",[]),new Question("test2",[])]);
    const host = ()=> {
        createCompetition(quiz,playerObserver)
        .then(qc => {
            setQC(qc);
            setPin(qc.getPin())
            
        } );
    }
    const start = () => {
        if (qc) {

        startCompetition(qc);
		setQN(1);
		}
		
    }
    const next = () => {
        if (qc) {

        nextQuestion(qc);
		}
    }

	useEffect(() => {
	  host();
	}, [])
	

	if (questionNum !=0){
		return (<AnswerState players={players}/>)

	}
	
	return (
		<div className='app'>
					<div className='theme'>
							Movies / Chernobyl			
					</div>
					<div className='quizz-card'>
						<div className='image-container'>
							<img className='image' src="https://static.hbo.com/content/dam/hbodata/series/chernobyl/key-art/chernobyl-ka-1920.jpg" alt="paris"/>
						</div>
						<div className='quizz-informations'>
							<h2>Code: {pin}</h2>
						</div>
					</div>				
					<div className='details'>
						<p className='titre'>Participants:</p>
						<p>
							{players.map((player)=> <>{player} </>)}
						</p>
					</div>
					<div className='bouttons'>
						<button  >Cancel</button>
						<button onClick={start} >Start the Quiz</button>
					</div>

		</div>
	);
}
