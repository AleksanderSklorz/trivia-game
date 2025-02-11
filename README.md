# TriviaGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

# Tasks

- have a quick overview of the project structure
- get familiar with [TriviaService](./src/app/services/trivia.service.ts), [TriviaABCService](./src/app/services/trivia-abc.service.ts) and [TriviaFirstLastLetterService](./src/app/services/trivia-first-last-letter.service.ts) services as well as [Trivia](./src/app/models/trivia.ts) interface
- create reusable `TriviaGame` component in `src/app/components/trivia-game` directory
- `TriviaGame` component should be able to display a list of questions loaded through service
- for each question there should be displayed hints coming from different services e.g. ABCD hints coming from [TriviaABCService](./src/app/services/trivia-abc.service.ts) or first and last letter hints coming from [TriviaFirstLastLetterService](./src/app/services/trivia-first-last-letter.service.ts)
- created component should be independent from specific services as their number will grow in the future
- below each question there should be input to allow answer on question and next question should be displayed when user hits enter to send answer,
- after sending each answer please write 'Correct' or 'Incorrect' message next to answered question
- already answered questions should be displayed until you finish game,
- when you answer all questions display 'You got x out of y questions correct!' bellow questions instead of input and 'End Game' button to return to screen with toggle button to select mode
- in `App` component you will find [Button toggle](https://material.angular.io/components/button-toggle/overview) component with two game modes - ABCD and First and Last Letter, using created `TriviaGame` component display game's questions. You can use any known method to provide correct services for `TriviaGame` component however using Strategy design pattern is preferred
- add unit tests to cover functionalities in selected components/services

`TriviaABCService` and `TriviaFirstLastLetterService` should have access to following functions: 
- `getHints` - should return array of hints for given question
- `validateAnswer` - should return boolean value if answer is correct
- `getTriviaQuestions` - should return array of questions

See gameDemo.mp4 file for example of how the game should work.

# Resources
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
