import { Gato } from "./gato";
import { Perro } from "./perro";

let perro1 = new Perro("Perro");
let gato1 = new Gato("Gato");


perro1.emitirSonido();
perro1.moverse();
perro1.tipoDieta();


gato1.emitirSonido();
gato1.moverse();
gato1.tipoDieta();