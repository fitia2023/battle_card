import { Card } from "./Card";
import { Valeur } from "./Valeur";
import { Symbol } from "./Symbol";

/**
 * Test d'affichage d'une carte
 */
let c = new Card(Valeur.as,Symbol.carreau)
let c1 = new Card(0,3)

console.log(c.display())
console.log(c1.display())
