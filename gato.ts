import { Animal } from "./animal";
export class Gato extends Animal {
    constructor(pNombreAnimal: string) {
        super(pNombreAnimal)
    }
    getNombreAnimal(): string {
        return this.nombreAnimal;
    }
    setNombreAnimal(pNombreAnimal: string): void {
        this.nombreAnimal=pNombreAnimal;
    }

    emitirSonido(): void {
        return console.log("¡Miau!")
    }

    tipoDieta(): void {
        return console.log("Carnivoro")
    }
};