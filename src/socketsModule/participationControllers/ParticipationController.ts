import IdGenerator from "../generators/IdGenerator";
import ParticipationSender from "../senders/ParticipationSender";


export type ParticipationObserver = () => void; 

export default class ParticipationController {

    private participationSender:ParticipationSender;
    private idGenerator: IdGenerator;
    private competitionName?:string;
    private playerId?:string;
    private participationObserver: ParticipationObserver;

    constructor(participationSender:ParticipationSender, idGenerator:IdGenerator, participationObserver:ParticipationObserver) {
        this.participationSender = participationSender;
        this.idGenerator = idGenerator;
        this.participationObserver = participationObserver;
    }
    public async generateId():Promise<string> {
        this.playerId = await this.idGenerator.getId();
        return this.playerId;
    }

    public attendCompetition(pin:string, playerName:string){
        if (!this.playerId)
            throw new Error("id not set yet");
        this.participationSender.sendParticipation(pin, this.playerId, playerName);
    }
    
    public setCompetitionName(competitionName) {
        this.competitionName = competitionName
        this.participationObserver();
    }
    public getCompetitionName():string|undefined {
        return this.competitionName;
    }


}