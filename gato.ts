import { Animal } from "./animal";
export class Gato extends Animal {
    constructor(pNombre: string) {
        super(pNombre)
    }

    emitirSonido(): void {
        return console.log("¡Miau!")
    }

    tipoDieta(): void {
        return console.log("Carnivoro")
    }
};