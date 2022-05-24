

export default class PinGenerator {

    public getPin():Promise<string> {
        return fetch("http://localhost:8080/v1/new-id")
            .then(res => res.json())
            .then(res => res.message)
    }
}

