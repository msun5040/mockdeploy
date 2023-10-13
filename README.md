# Mock-msun59-syu66
## Project name: Mock

## Team members --
* Sean Yu, 10 hours
* Michael Sun, 10 hours

## repo link-- [https://github.com/cs0320-f23/mock-msun59-syu66.git](https://github.com/cs0320-f23/mock-msun59-syu66.git)

## Design Choices -- 
We elected to use mocks in the sense of faking an example response from the server.
We drew inspiration from the response maps that we returned in server, and we parsed
each of these string response maps into a JSON response map in order to do our work
in displaying and formatting it. 

Everything starts at REPL, which has 2 main components: REPL History and REPLInput
* REPL History is just a container component for the history of all of the commands/responses 
that were run in the course of the session

REPL Input is the main control for all of the possible endpoints in this applicaiton.
It handles input through an input field and ensures that it's one of the three
commands, and from there, it calls a corresponding component for the command. 
* LoadOutput: formats the response for the ```load_csv``` command. it responds with 
the details of command and the associated dataset
* ViewOutput: handles the  ```view ``` and creates a table for the currently loaded
dataset. errors otherwise
* SearchOutput: handles stringent input to the ```search``` command and outputs
a mocked couple of rows. 

In choosing this architecture, we had hoped to make the code more organized
instead of having everything cluttered inside of REPLInput. 

## Errors/Bugs --
No known errors or bugs; everything is case sensitive, which we will change in 
the future for REPL

## Tests --
see testing directory to see how the tests work 


## Running and Testing --
In order to run this repo locally: 
1. ```cd mock```
2. ```npm install```
3. ```npm install playwright```
4. ```npx install playwright```
5. ```npm install react-bootstrap bootstrap```
6. ```npm start```

In order to run the tests:
1. ```npx playwright test``` to run all tests
2. ```npx playwright test --ui``` for test-by-test control
