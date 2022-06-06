import CompetitionController from "../competitionControllers/CompetitionController";

export default class AnswerReceiver implements IWebSocketSubscriber {
    private competitionController:CompetitionController;

    constructor(competitionController: CompetitionController) {
        this.competitionController = competitionController;

    }

    update = (messageObject: any) => {
        this.receiveAnswer(messageObject);
    }

    public receiveAnswer(answerJson) {
        this.competitionController.addAnswer(answerJson,answerJson.playerId);
    }

}