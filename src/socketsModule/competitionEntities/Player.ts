import Answer from "./Answer";
import Score from "./Score";

export default class Player {
    private playerId:string;
    private name:string;
    private answers:Answer[];
    
    constructor(playerId:string, name:string) {
        this.playerId=playerId;
        this.name = name;
        this.answers = [];
    }
    public getPlayerId():string {
        return this.playerId;
    }
    public getName():string {
        return this.name;
    }
    public addAnswer(answerJson) {
        //TODO

    }
    public getScore():Score {
        let score = 0;
        this.answers.forEach(answer => {
            score += answer.getScore();
        });
        return {playerId:this.playerId, score:score};
    }
}