import { FormEvent, FormEventHandler, useState } from "react";
import ParticipantFacade from "../../socketsModule/facade/ParticipantFacade";
import Question from "../../socketsModule/quizEntities/Question";
import WebSocketPublisher from "../../socketsModule/websocket/WebSocketPublisher";



function PlayerTest() {
    
    const [pin, setPin] = useState('');
    const [participated, setParticipated] = useState(false);
    const [webPub, setWebPub] = useState<WebSocketPublisher>();
    const participationObserver = () => {setParticipated(true)}
    // ParticipantFacade.participate()
    const [id, setId] = useState('')
    

    const writePin = (e:FormEvent<HTMLInputElement>) => {
        setPin(e.currentTarget.value);
    }
    const participate = () => {
        let webSocketPublisher = ParticipantFacade.participate(pin, "player", participationObserver,  setId);
        setWebPub(webSocketPublisher);
    }
    const getQuestion = () => {
        if (webPub)
        ParticipantFacade.observeQuestions((question:Question)=> {console.log(question.getQuestionText())}, webPub, pin);
    }
    
    return (
        <>
        <h1>player</h1>
        <input type="text" value={pin} onChange={writePin} />
        <button onClick={participate}>participate</button>
        <button onClick={getQuestion} disabled={!participated}>get question</button>
        
        </>
    )
}

export default PlayerTest;