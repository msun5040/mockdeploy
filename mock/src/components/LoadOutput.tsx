import { Dispatch, SetStateAction, useState} from 'react';

interface REPLOutputProps{
    // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
    toggle: number
    responses: JSX.Element[]
    setResponses: Dispatch<SetStateAction<JSX.Element[]>>
  }

interface ResponseMap {
  type: string
  data: JSON
  error_message: string
}


function successResponseMap(response: ResponseMap) {
  return ([
    <li aria-label = "load-success-response">{"Response Type: "+  response["type"] }</li>, 
    <li>{response["type"] + ": " + JSON.stringify(response["data"])}</li>
  ])
}

function errorResponseMap(response: ResponseMap) {
    return ([
      <li aria-label = "load-error-response">{"Response Type: "+  response["type"] }</li>, 
      <li>{response["type"] + ": " + JSON.stringify(response["error_message"])}</li>
    ])
  }

export function LoadOutput(command : string, props : REPLOutputProps, response : ResponseMap){
    // console.log(command)
    // console.log(props)
    // console.log(response)

    let contentResponse : JSX.Element[]
    let concatenatedResponse : JSX.Element;
    console.log("type:" + response.type)
    if (response.type == "success"){
        contentResponse = successResponseMap(response)
    } else if (response.type == "error") {
        contentResponse = errorResponseMap(response)
    } else {
      // should never happen
      props.setResponses([
        ...props.responses, 

        <div className = {'error-message'} aria-label= {'load-error'}>
          <p><b>load_csv requires a valid filepath</b></p>
        </div>, 

      <hr></hr>]);
      return
    }

    // verbose setting
    if (props.toggle == 0) {
      concatenatedResponse = 
      <div aria-label = "load-response">
        <p aria-label = "brief-label">
          <b>Brief Output: </b>
          <ul aria-label = "load-response-map">
            {contentResponse}
          </ul>
        </p>
      </div>
    }

    // non-verbose setting
    else if (props.toggle == 1) {
      concatenatedResponse = 
      <div aria-label = "load-response">
        <p>
          <b aria-label = "verbose-label">Verbose Output: </b>
          <ul aria-label = "load-response-map">
            <li>{"Command: " + command}</li>
            {contentResponse}
          </ul>
        </p>
      </div>
    }
    else {
      concatenatedResponse = <div> this isn't right... </div>
    }
      props.setResponses([...props.responses, concatenatedResponse, 
      <hr aria-label = "command-separator"></hr>])

    }




