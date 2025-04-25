import { iAnimal } from "./iAnimal";

export abstract class Animal implements iAnimal {
    protected nombreAnimal: string;
    constructor(pNombreAnimal: string) {
        this.nombreAnimal = pNombreAnimal
    }
    getNombreAnimal(){
        return this.nombreAnimal;
    }
    setNombreAnimal(pNombreAnimal:string){
        this.nombreAnimal=pNombreAnimal;
    }

    emitirSonido(): void {

    };
    moverse(): void {
        return console.log(`${this.nombreAnimal} se mueve..`)

    }
    abstract tipoDieta(): void;

}