import { Dispatch, SetStateAction } from "react"

interface REPLOutputProps{
    // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
    toggle: number
    responses: JSX.Element[]
    setResponses: Dispatch<SetStateAction<JSX.Element[]>>
  }

interface ViewOutputProp {
    type: string
    data: JSON
    error_message: string
}

interface dataResponse {
    header: string[]
    body: string[][]
}


export function ViewOutput(prop: REPLOutputProps, responseMap: JSON | null) {
   
    let concatenatedResponse :JSX.Element;
    if (responseMap == null) {
        concatenatedResponse = <div>No dataset has been loaded at this time.</div>
    } else {
        let convertedResponseMap: ViewOutputProp = responseMap as unknown as ViewOutputProp;

        // beautify this; make it into an html table. 
        concatenatedResponse = <div>{JSON.stringify(convertedResponseMap.data)}</div>
         
    }

    prop.setResponses([...prop.responses, concatenatedResponse, <hr></hr>])
}