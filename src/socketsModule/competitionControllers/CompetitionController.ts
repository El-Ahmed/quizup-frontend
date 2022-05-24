import Competition  from "../competitionEntities/Competition";
import PinGenerator from "../generators/PinGenerator";
import Quiz from "../quizEntities/Quiz";



export default class CompetitionController {
    private competition:Competition;


    private pinGenerator:PinGenerator;
    constructor(pinGenerator:PinGenerator, competition:Competition) {
        this.pinGenerator = pinGenerator;
        this.competition = competition;
    }


    public async hostCompetition():Promise<string> {
        let pin = await this.pinGenerator.getPin();
        return pin;
    }
    

    public addPlayer = (playerJson) => {
        this.competition.addPlayer(playerJson);
        return this.competition.getName()
    }
}