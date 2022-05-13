# FlashCards

## Abstract

A program to simulate a set of flash cards through the command line! A user will be able to see the questions, take guesses, and see a final score at the end of the round.

## A GIF of the working application
![flashcards-demo_AdobeCreativeCloudExpress (2)](https://user-images.githubusercontent.com/98505112/168188865-a1fa96d7-9fff-49a9-8af4-0ba18e893493.gif)



## Technologies used

- node
- javascript
- mocha/chai

## Install/Setup instructions:

Clone down this repo.

```bash
git clone [remote-address]
```

Once you have cloned the repo, change into the directory and install the library dependencies. Run:

```bash
npm install
```

To verify that it is setup correctly, run `npm test` in your terminal. You should have 40 tests show up in your terminal.

Running `node index.js` from the root of your project should result in the first card coming up to select an answer using the arrow keys on your keyboard.

Play until you complete a round and receive a message with your percentage of correct answers.
