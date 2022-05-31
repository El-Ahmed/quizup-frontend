import { useState } from "react";
import { createCompetition, nextQuestion, startCompetition } from "../../socketsModule/facade/HostFacade";
import QuestionsController from "../../socketsModule/quizControllers/QuestionsController";
import Question from "../../socketsModule/quizEntities/Question";
import Quiz from "../../socketsModule/quizEntities/Quiz";



function HostTest() {
    const [pin, setPin] = useState('')
    const [qc, setQC] = useState<QuestionsController>()
    const [players, setPlayers] = useState<string[]>([])
    
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
        if (qc)
        startCompetition(qc);
    }
    const next = () => {
        if (qc)
        nextQuestion(qc);
    }

    
   
    return (
        <>
            <h1>
                hosting {pin}
            </h1>
            <button onClick={host}>host</button>
            {players.map((player) => <p>{player}</p>)}
            <button onClick={start}>start</button>
            <button onClick={next}>next</button>
            
        </>
    )
}

export default HostTest;