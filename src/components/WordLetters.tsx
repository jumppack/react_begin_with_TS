import { clsx } from "clsx"
import type {JSX} from 'react'

type WordLettersProp = {
    currentWord: string;
    guessedLetters: string[];
    isGameLost: boolean;
}

export default function WordLetters({ currentWord, guessedLetters, isGameLost }:WordLettersProp):JSX.Element {
    return (
        <section className="word">
            {currentWord.split("").map((letter:string, index:number):JSX.Element => {
                const shouldRevealLetter:boolean = isGameLost || guessedLetters.includes(letter)
                // const letterClassName:string = clsx(
                //     isGameLost && !guessedLetters.includes(letter) && "missed-letter"
                // )
                // Just another wasy of using clsx is as below
                const letterClassName:string = clsx({
                   "missed-letter": isGameLost && !guessedLetters.includes(letter) 
                });
                return (
                    <span key={index} className={letterClassName}>
                        {shouldRevealLetter ? letter.toUpperCase() : ""}
                    </span>
                )
            })}
        </section>
    )
}