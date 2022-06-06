


export default class ScoreController {
    private score:number = 0;
    public getScore = () => {
        return this.score;
    }
    public setScore = (score:number) => {
        this.score = score;
    }
}