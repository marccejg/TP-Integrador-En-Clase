import { Animal } from "./animal";
export class Perro extends Animal {
    nombreAnimal: string;
    constructor(pNombreAnimal: string) {
        super(pNombreAnimal)
    }

    emitirSonido(): void {
        return console.log("¡Guau!")
    }

    tipoDieta(): void {
        return console.log("Omnivoro")
    }


};