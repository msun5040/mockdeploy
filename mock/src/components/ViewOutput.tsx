import { Dispatch, SetStateAction } from "react"
import Table from 'react-bootstrap/Table';

interface REPLOutputProps{
    // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
    toggle: number
    responses: JSX.Element[]
    setResponses: Dispatch<SetStateAction<JSX.Element[]>>
  }

interface ViewOutputProp {
    type: string
    data: dataResponse
    error_message: string
}

interface dataResponse {
    headers: string[]
    body: string[][]
}


export function ViewOutput(prop: REPLOutputProps, responseMap: JSON | null) {
   
    let concatenatedResponse :JSX.Element;
    let convertedResponseMap: ViewOutputProp = responseMap as unknown as ViewOutputProp;
    
    // errored response maps should output nothing but an informative message.
    if (responseMap == null || convertedResponseMap.type == "error") {
        concatenatedResponse = <div>No dataset has been loaded at this time.</div>
    } 

    // creating the table
    else {
        let columns : JSX.Element[] = []
        console.log(convertedResponseMap)

        for (let i = 0; i < convertedResponseMap.data.headers.length; i ++) {
            columns.push(<th>{convertedResponseMap.data.headers[i]}</th>)
        }
        let headers : JSX.Element = <thead><tr>{columns}</tr></thead>

        // popoulating the rest of the data
        let rows :JSX.Element[] = []
        for (let i = 0; i < convertedResponseMap.data.body.length;i ++) {
            let row : JSX.Element[] = [];
            for (let j = 0; j < convertedResponseMap.data.body[0].length; j ++) {
                row.push(<td>{convertedResponseMap.data.body[i][j]}</td>)
            }
            rows.push(<tr>{row}</tr>)
        }
        let data : JSX.Element = <tbody>{rows}</tbody>
        let table: JSX.Element = 
            <Table striped bordered hover>
                {headers}
                {data}
            </Table>
        

        concatenatedResponse =  <div>{table}</div>     
    }

    prop.setResponses([...prop.responses, concatenatedResponse, <hr></hr>])
}