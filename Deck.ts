import { Card } from "./Card";
import { enumKeys } from "./enumToarray";
import { Valeur } from "./Valeur";
import { Symbol } from "./Symbol";
export class Deck {

    private cards: Card[]

    constructor() {
        this.cards = []
    }

    /**
     *  Creation du 52 cartes
     */
    public creatDeck(): void {
        const nb_val: number = enumKeys(Valeur).length
        const nb_symb: number = enumKeys(Symbol).length

        for (let s = 0; s < nb_symb; s++) {

            for (let v = 0; v < nb_val; v++) {
                const card = new Card(v as Valeur, s as Symbol)
                this.cards.push(card)
            }

        }
    }

    /**
     * Pour mélanger les cartes
     */
    public shuffle(): void {
        let min: number = 0
        let max: number = this.cards.length

        for (let i = 0; i < max; i++) {
            // tri de min a la longueur du tab
            const nb_hasd: number = Math.floor(Math.random() * (max - min) + min)
            // permutation
            const tmp = this.cards[i]
            this.cards[i] = this.cards[nb_hasd]
            this.cards[nb_hasd] = tmp
            min++
        }
    }

    public addcard(card: Card): void {
        this.cards.push(card)
    }


    /**
     * afficher contenu du deck
     */
    public display(): string {

        let res = ''
        this.cards.forEach(
            c => {
                res += this.cards[this.cards.length - 1] == c ? c.display() : `${c.display()}\n`
            }
        )
        return res
    }

}