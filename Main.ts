import { Card } from "./Card";
import { Valeur } from "./Valeur";
import { Symbol } from "./Symbol";
import { enumKeys } from "./enumToarray";
import { Deck } from "./Deck";

/**
 * Test d'affichage d'une carte
 */
let c = new Card(Valeur.as,Symbol.carreau)
let c1 = new Card(0,3)

console.log(c.display())
console.log(c1.display())

/**
 * Test pour le deck
 */
const d = new Deck()
d.creatDeck()
console.log("//------Avant le melange ------//")
console.log(d.display())

d.shuffle()
console.log("//------Apres le melange ------//")
console.log(d.display())