import { Dispatch, SetStateAction, useState} from 'react';

interface REPLOutputProps{
    // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
    toggle: number
    responses: JSX.Element[]
    setResponses: Dispatch<SetStateAction<JSX.Element[]>>
  }

export function REPLOutput(command : string, props : REPLOutputProps, response : JSON){
    let concatenatedResponse : JSX.Element;
      // verbose setting
      if (props.toggle == 0) {
        concatenatedResponse = 
        <div>
          <p>
            <b>Brief Output: </b>
            <ul>
              <li>{response["type"] + ": " + JSON.stringify(response["data"])}</li>
            </ul>
          </p>
        </div>

      }

      // non-verbose setting
      else if (props.toggle == 1) {
        concatenatedResponse = 
        <div>
          <p>
            <b>Verbose Output: </b>
            <ul>
              <li>{"Command:" + command}</li>
              <li>{"Response Type:"+  response["type"] }</li>
              <li>{response["type"] + ": " + JSON.stringify(response["data"])}</li>
            </ul>
          </p>
        </div>
      }
      else {
        concatenatedResponse = <div> this isn't right... </div>
      }
      props.setResponses([...props.responses, concatenatedResponse, <hr></hr>])

    }


}

