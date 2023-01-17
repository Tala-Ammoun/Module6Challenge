# Module 6 Challenge Web APIs: Code Quiz

## Your Task

Build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. This week’s coursework has taught you all the skills you need to succeed in this challenge.
 

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

Create a code quiz that contains the following requirements:

* A start button that when clicked a timer starts and the first question appears. (time interval and a function)
 
  * Questions contain buttons for each answer. (for loop for multiple choice answers)
  * 
  * When answer is clicked, the next question appears. (onclicking "next" button, let the question function runs, save answer to question index so that we can display their score).
  * 
  * If the answer clicked was incorrect then subtract time from the clock. (if statement, assign variables to correct and incorrect answers, display .textContent on the clock time interval count -10,000 milliseconds)

* The quiz should end when all questions are answered or the timer reaches 0. (if count = 0, return function and display "out of time!".)

  * When the game ends, it should display their score and give the user the ability to save their initials and their score. (target submit button, on click, .textContent = the sum of all correct answers/the sum of all questions. Checkbox, do you wish to save your score?)

  * let them see which questions they did wrong and display the correct answer.
  
## Mock-Up

The following animation demonstrates the application functionality:

![Animation of code quiz. Presses button to start quiz. Clicks the button for the answer to each question, displays if answer was correct or incorrect. Quiz finishes and displays high scores. User adds their intials, then clears their intials and starts over.](./assets/08-web-apis-challenge-demo.gif)

## Grading Requirements

This challenge is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
