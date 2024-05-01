#! /usr/bin/env node
import inquirer from "inquirer"
// let sentence: string = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."


// const wordArr: string[] = sentence.split(" ")
// const wordArrLength: number = wordArr.length
// const wordStr: string = wordArr.join('')
// const wordStrLength = wordStr.length

// console.log(wordArrLength);
// console.log(wordStrLength);

const answer = await inquirer.prompt([{
    message: "Enter sentence to count word and characters",
    type: "input",
    name: "sentence"
}])
const { sentence } = answer
const wordsCounter = (sentence: string) => {
    const regex = /\S+/g
    const wordsCount = sentence.match(regex)?.length
    // console.log(wordsCount);
    return wordsCount
}
const charactersCounter = (sentence: string) => {
    const charactersCount = sentence.replace(/\s/g, '').length
    // console.log(charactersCount);
    return charactersCount
}


console.log(`Characters: ${charactersCounter(sentence)}, Words: ${wordsCounter(sentence)}`);
