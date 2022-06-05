import React, { useEffect } from 'react';
import { FormEvent, FormEventHandler, useState } from "react";
import { Link, useSearchParams } from 'react-router-dom';
import Question from '../../socketsModule/quizEntities/Question';
import ParticipantFacade from '../../socketsModule/facade/ParticipantFacade';
import './PlayerWait.css' ;
import Question1 from '../Question/Question1';



export default function PlayerWaiting() {

	const [searchParams, setSearchParams] = useSearchParams();
	let name = searchParams.get("name");
	const pin = searchParams.get("pin");


	const [currentQuestion, setCurrentQuestion] = useState<Question>();


	if (name == null) {
		name = "unamedPlayer";
	}

	const [id, setId] = useState<string>();
	const [accepted, setAccepted] = useState(false);
    const questionObserver = (question:Question)=> {setCurrentQuestion(question)}
	const participationObserver = () => {setAccepted(true)};

    
	useEffect(() => {
		if (pin && name) 
       	ParticipantFacade.participate(pin, name, participationObserver, questionObserver, setId);
	}, [pin,name]);
	

	if (pin==null) {
		return (<h1>no pin!!!!</h1>);
	}



	if (!accepted)
		return (<h1>Connecting ...</h1>);
	if (currentQuestion == null)
		return (<h1>Waiting for the host to start the quiz...</h1>);
	
	return (
		<>
		<Question1 question={currentQuestion}></Question1>
		</>
	);
}
