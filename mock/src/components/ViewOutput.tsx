import { Dispatch, SetStateAction } from "react";
import Table from "react-bootstrap/Table";
import { TableComponent } from "./TableOutput";

interface REPLOutputProps {
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  toggle: number;
  responses: JSX.Element[];
  setResponses: Dispatch<SetStateAction<JSX.Element[]>>;
}

interface ViewOutputProp {
  type: string;
  data: dataResponse;
  error_message: string;
}

interface dataResponse {
  headers: string[];
  body: string[][];
}

export function ViewOutput(prop: REPLOutputProps, responseMap: JSON | null) {
   
    let concatenatedResponse :JSX.Element;
    let convertedResponseMap: ViewOutputProp = responseMap as unknown as ViewOutputProp;
    
    // errored response maps should output nothing but an informative message.
    if (responseMap == null || convertedResponseMap.type == "error") {
        concatenatedResponse = <div>No dataset has been loaded at this time.</div>
    } 


  concatenatedResponse = <div aria-label = 'view-response'> TableComponent(responseMap)}</div>;
        
    prop.setResponses([...prop.responses, concatenatedResponse, 
    <hr aria-label = "command-separator"></hr>])
}

