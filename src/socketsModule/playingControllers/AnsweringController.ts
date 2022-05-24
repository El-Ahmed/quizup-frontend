import Choice from "../quizEntities/Choice";
import AnswerSender from "../senders/AnswerSender";


export default class AnsweringController {
    private playerId:string;
    private answerSender:AnswerSender;

    constructor(playerId:string, answerSender:AnswerSender) {
        this.playerId = playerId;
        this.answerSender = answerSender;
    }

    public answer(choice:Choice) {
        this.answerSender.sendAnswer(this.playerId,choice.getText());
    }


}