

export default class IdGenerator {
    
    public getId():Promise<string> {
        return fetch("http://localhost:8080/v1/new-player-id")
            .then(res => res.json())
            .then(res => res.message)
    }
}