import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import IdGenerator from "../generators/IdGenerator";
import ParticipationController, { ParticipationObserver } from "../participationControllers/ParticipationController";
import QuestionManager, { QuestionObserver } from "../playingControllers/QuestionManager";
import ParticipationAcceptenceReceiver from "../receivers/ParticipationAcceptenceReceiver";
import QuestionReceiver from "../receivers/QuestionReceiver";
import ParticipationSender from "../senders/ParticipationSender";
import WebSocketPublisher from "../websocket/WebSocketPublisher";
import WebSocketSender from "../websocket/WebSocketSender";
import AnsweringController from "../playingControllers/AnsweringController";
import AnswerSender from "../senders/AnswerSender";
import Choice from "../quizEntities/Choice";

type AnswerSenderSetter = (answerSender: (choice:Choice) => void) => void;


const participate = (pin:string, playerName:string, participationObserver:ParticipationObserver, questionObserver:QuestionObserver, setId:(id:string)=>void) => {



    const idGenerator = new IdGenerator();
    const stompClient = Stomp.over(new SockJS("http://localhost:8080/ws"));
    const webSocketSender = new WebSocketSender(stompClient);
    const participationController = new ParticipationController(new ParticipationSender(webSocketSender),idGenerator, participationObserver);

    const webSocketPublisher = new WebSocketPublisher(stompClient);
    const participationAcceptenceReceiver = new ParticipationAcceptenceReceiver(participationController);

    






    const onConnected = () => {
        
        participationController.generateId()
            .then(newId => { 
                webSocketPublisher.subscribe(participationAcceptenceReceiver,"Players/"+newId+"/acceptence");
                participationController.attendCompetition(pin,playerName)
                setId(newId);
                observeQuestions(questionObserver,webSocketPublisher,pin);
            });
    };
    const onError = (err) => {console.log(err)};
    stompClient.connect({}, onConnected, onError);
    
    const answerSender = new AnswerSender(webSocketSender);
    const answeringController = new AnsweringController(answerSender); 
    return answeringController;


}
const observeQuestions = (questionObserver:QuestionObserver, webSocketPublisher:WebSocketPublisher, pin:string) => {


    
    const questionManager = new QuestionManager(questionObserver);
    const questionReceiver = new QuestionReceiver(questionManager);

    webSocketPublisher.subscribe(questionReceiver,"Quiz/"+pin+"/question");
    
}

// const getAnswersender = (playerId:string, webSocketSender:WebSocketSender, pin) => {

//     const answerSender = new AnswerSender(webSocketSender);
//     const answeringController = new AnsweringController(playerId,answerSender); 
//     const sendAnswer = (choice:Choice) => {
//         answeringController.answer(choice,pin);
//     }
//     return sendAnswer;
// }

export default {participate, observeQuestions};