import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import CompetitionController from "../competitionControllers/CompetitionController";
import Competition, { PlayersObserver } from "../competitionEntities/Competition";
import PinGenerator from "../generators/PinGenerator";
import QuestionsController from "../quizControllers/QuestionsController";
import Quiz from "../quizEntities/Quiz";
import ParticipationReceiver from "../receivers/ParticipationReceiver";
import ParticipationAcceptenceSender from "../senders/ParticipationAcceptenceSender";
import QuestionSender from "../senders/QuestionSender";
import WebSocketPublisher from "../websocket/WebSocketPublisher";
import WebSocketSender from "../websocket/WebSocketSender";


// need to call competitionController.host to get the pin
const createCompetition = async (quiz:Quiz, playersObserver:PlayersObserver) => {
    const competition = new Competition(quiz.getName(),quiz,playersObserver);
    const competitionController = new CompetitionController(new PinGenerator(),competition);

    const pin = await competitionController.hostCompetition();
    
    const stompClient = Stomp.over(new SockJS("http://localhost:8080/ws"));
    const webSocketPublisher = new WebSocketPublisher(stompClient);
    const webSocketSender = new WebSocketSender(stompClient);
    const participationAcceptenceSender = new ParticipationAcceptenceSender(webSocketSender);
    const participationReceiver = new ParticipationReceiver(competitionController, participationAcceptenceSender);


    // subscribe to websocket waiting for player participation
    const onConnected = () => {
        webSocketPublisher.subscribe(participationReceiver,"Quiz/"+pin+"/connect");
    };
    const onError = (err) => {console.log(err)};
    stompClient.connect({}, onConnected, onError);




    const questionSender = new QuestionSender(webSocketSender);
    const questionsController = new QuestionsController(pin,questionSender,quiz.getQuestions());



    

    return [pin, questionsController];

}

const startCompetition = (questionsController:QuestionsController) => {
    questionsController.sendCurrentQuestion();
    return questionsController.getCurrentQuestion();

}

const nextQuestion = (questionsController:QuestionsController) => {
    questionsController.nextQuestion();
    questionsController.sendCurrentQuestion();
    return questionsController.getCurrentQuestion();
};



export {createCompetition, startCompetition, nextQuestion}

