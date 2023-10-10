import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';
import {LoadOutput} from './LoadOutput'

import {loadResponse} from './response'
import Button from 'react-bootstrap/Button';

interface REPLInputProps{
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  history: string[]
  setHistory: Dispatch<SetStateAction<string[]>>

  toggle: number
  setToggle: Dispatch<SetStateAction<number>>

  responses: JSX.Element[]
  setResponses: Dispatch<SetStateAction<JSX.Element[]>>

  dataMap: Map<string, JSON>
  // setDataMap: Dispatch<SetStateAction<Map<string, JSON>>>
  setDataMap: React.Dispatch<React.SetStateAction<Map<string, JSON>>>;
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
    const [commandString, setCommandString] = useState<string>('');
    // TODO WITH TA : add a count state
    const [count, setCount] = useState<number>(0);
    // TODO WITH TA: build a handleSubmit function called in button onClick
    //const [dataMap, setDataMap] = useState<{ [key: string]: JSON }>({});
    const [dataMap, setDataMap] =useState(new Map<string, JSON>())
    //const [dataMap, setDataMap] = new Map<string, JSON>();
    const [verb, setVerb] = useState<boolean>(false);


    
    /**
     * handles the command-line input and outputs the approriate response
     * @param command the endpoint to be hit
     */
    function handle(command : string) {
      
      let splitCommand : string[] = command.split(" ")
      let parsedCommand : string = splitCommand[0];
      // console.log(splitCommand[0].toLowerCase())
      let response;
      if (splitCommand[0].toLowerCase() == "load_csv") {

        if (dataMap.has(splitCommand[1])){
          response = dataMap.get(splitCommand[1])
        } else {
          response = loadResponse(splitCommand)
          setDataMap(dataMap.set(splitCommand[1], response))
        }
        
        LoadOutput(command , props, response)
        

      } else if (splitCommand[0].toLowerCase() == "view") {
        response = loadResponse(splitCommand)
        // TODO: define another component called view output to handle the view stuff
        handleSubmit(parsedCommand)

      } else if (splitCommand[0].toLowerCase() == "search") {
        response = loadResponse(splitCommand)
        handleSubmit(parsedCommand)
      } else {
        response = loadResponse(splitCommand)
        handleSubmit(command + " is not a valid command.")
      }

    }

    function handleSubmit(commandString : string) {
      setCount(count + 1);
      props.setHistory([...props.history, commandString]);
    }
    // TODO: Once it increments, try to make it push commands... Note that you can use the `...` spread syntax to copy what was there before
    // add to it with new commands.
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    return (
        <div className="repl-input">
            {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
            {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
            <fieldset>
              <legend>Enter a command:</legend>
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
              {/* TODO: DEFINE A METHOD THAT PERFORMS GET REQUESTS ON AN EMPOINT */}
            <Button variant = "primary" onClick = {() => handle(commandString)}>Submitted {count} </Button>
        </div>
    );
  }