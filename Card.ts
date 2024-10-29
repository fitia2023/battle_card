import { Valeur } from "./Valeur"
import { Symbol } from "./Symbol";

export class Card {

    private val: Valeur

    private symb: Symbol

    constructor(val:Valeur,symb:Symbol) {
        this.val = val
        this.symb = symb
    }

    public display():string{
        return `${Valeur[this.val]} de ${Symbol[this.symb]}`
    }
}