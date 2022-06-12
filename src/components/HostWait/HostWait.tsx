import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HostWait.css' ;
import { createCompetition, nextQuestion, startCompetition } from "../../socketsModule/facade/HostFacade";
import QuestionsController from "../../socketsModule/quizControllers/QuestionsController";
import Question from "../../socketsModule/quizEntities/Question";
import Quiz from "../../socketsModule/quizEntities/Quiz";
import AnswerState , {PlayerAnswered} from '../AnswerState/AnsweringState';
import Choice from '../../socketsModule/quizEntities/Choice';
import Player from '../../socketsModule/competitionEntities/Player';



export default function Details() {

	const [pin, setPin] = useState('')
    const [qc, setQC] = useState<QuestionsController>()
    const [players, setPlayers] = useState<Player[]>([])
    const [questionNum, setQN] = useState(1);
    const [counter, setCounter] = useState(0);
	const [playersNans, setPlayersNans] = useState<PlayerAnswered[]>([])

    const playerObserver = (players:Player[], question?:Question) => {
		setPlayers(players); console.log("change happended");
		console.log(question);
		let playernans:PlayerAnswered[] = [];
		players.map((player) => {
			let playernan:PlayerAnswered = {
				playername: player.getName(),
				answered:  question!=undefined && player.didAnswer(question)
			}
			if (question)
			console.log(player.didAnswer(question))
			playernans.push(playernan);
		})
		setPlayersNans(playernans);
		console.log(playernans);
		};
 	const quiz = new Quiz('name','desc',[new Question("test1",[new Choice(0,"wrong"), new Choice(1,"right")]),new Question("test2",[])]);
    const host = ()=> {
        createCompetition(quiz,playerObserver)
        .then(cc => {
            setQC(cc.getQuestionController());
			if (qc)
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
		setQN(questionNum+1);
		}
    }

	useEffect(() => {
	  host();
	}, [])
	useEffect(() => {
		if (qc)
		setPin(qc?.getPin());
	}, [qc])
	
	if(!qc) return <>sad</>;

	if (questionNum !=0){
		return (<AnswerState players={players} playerAnswered= {playersNans} currentQuestion={qc?.getCurrentQuestion()} questionNumber = {questionNum}/>)

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
							{players.map((player1)=> <>{player1.getName()} </>)}
						</p>
					</div>
					<div className='bouttons'>
						<button  >Cancel</button>
						<button onClick={start} >Start the Quiz</button>
					</div>

		</div>
	);
}
