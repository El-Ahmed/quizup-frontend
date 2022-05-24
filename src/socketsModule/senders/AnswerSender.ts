import WebSocketSender from "../websocket/WebSocketSender";



export default class AnswerSender {


    private webSocketSender:WebSocketSender;

    constructor(webSocketSender:WebSocketSender) {
        this.webSocketSender = webSocketSender;
    }

    public sendAnswer(playerId:string, answerText:string) {
        this.webSocketSender.sendMessage("Players/"+playerId+"/answer",{answerText:answerText})
    }

}