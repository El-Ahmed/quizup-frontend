import Competition  from "../competitionEntities/Competition";
import PinGenerator from "../generators/PinGenerator";
import QuestionsController from "../quizControllers/QuestionsController";
import Quiz from "../quizEntities/Quiz";



export default class CompetitionController {
    private competition:Competition;
    private questionsController?:QuestionsController;


    private pinGenerator:PinGenerator;
    constructor(pinGenerator:PinGenerator, competition:Competition) {
        this.pinGenerator = pinGenerator;
        this.competition = competition;
    }
    public setQuestionController = (questionsController:QuestionsController) => {
        this.questionsController=questionsController;
    }


    public async hostCompetition():Promise<string> {
        let pin = await this.pinGenerator.getPin();
        return pin;
    }
    

    public addPlayer = (playerJson) => {
        this.competition.addPlayer(playerJson);
        return this.competition.getName()
    }
    
    public addAnswer = (answerJson, playerId: string) => {
        if (this.questionsController)
        this.competition.addAnswer(playerId,answerJson,this.questionsController.getCurrentQuestion());

    }
}