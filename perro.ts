import { Animal } from "./animal";
export class Perro extends Animal {
    constructor(pNombreAnimal: string) {
        super(pNombreAnimal)
    }
    getNombreAnimal(): string {
        return this.nombreAnimal;
    }
    setNombreAnimal(pNombreAnimal: string): void {
        this.nombreAnimal = pNombreAnimal;
    }

    emitirSonido(): void {
        return console.log("¡Guau!")
    }

    tipoDieta(): void {
        return console.log("Omnivoro")
    }


};