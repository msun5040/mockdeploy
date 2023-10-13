import { Dispatch, SetStateAction } from "react";
import Table from "react-bootstrap/Table";
// import { TableComponent } from "./TableComponent";
import { TableComponentSearch } from "./TableComponentSearch";
import { mockedSearchZoo } from "../../mocks/searchResponse";

interface REPLOutputProps {
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  toggle: number;
  responses: JSX.Element[];
  setResponses: Dispatch<SetStateAction<JSX.Element[]>>;
  currentDataset: JSON | null;
}

interface ResponseMap {
  type: string;
  data: JSON;
  error_message: string;
}

function successResponseMap(prop: REPLOutputProps, response: ResponseMap) {
  return [
    <li>{"Response Type:" + response["type"]}</li>,
    <li>{response["type"] + ": " + JSON.stringify(response["data"])}</li>,
  ];
}

function errorResponseMap(response: ResponseMap) {
  return [
    <li>{"Response Type:" + response["type"]}</li>,
    <li>
      {response["type"] + ": " + JSON.stringify(response["error_message"])}
    </li>,
  ];
}

export function searchOutput(command: string, prop: REPLOutputProps) {
  let splitCommand: string[] = command.split(" ");
  let searchColumn: string | number = splitCommand[1];
  let searchTerm: string = splitCommand[2];
  let concatenatedResponse: JSX.Element;

  if (prop.currentDataset == null) {
    concatenatedResponse = (
      <div className="error-message" aria-label="search-error">
        <b>No dataset has been loaded at this time.</b>
      </div>
    );
    prop.setResponses([
      ...prop.responses,
      concatenatedResponse,
      <hr aria-label="command-separator"></hr>,
    ]);
  } else {
    let temp = mockedSearchZoo(searchColumn, searchTerm);
    console.log(temp)
    if (temp.length == 1 && temp[0].length == 0) {
      concatenatedResponse = (
        <div className="error-message" aria-label="search-error">
          <b>No entries with column or search term were found in loaded csv.</b>
        </div>
      );
    } else {
      concatenatedResponse = (
        <div aria-label="search-response">
          {TableComponentSearch(mockedSearchZoo(searchColumn, searchTerm))}
        </div>
      );
    }

    prop.setResponses([
      ...prop.responses,
      concatenatedResponse,
      <hr aria-label="command-separator"></hr>,
    ]);
  }
}
