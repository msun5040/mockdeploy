import { useState } from 'react';
import '../styles/main.css';
import { REPLHistory } from './REPLHistory';
import { REPLInput } from './REPLInput';
import { VerbosityController } from './VerbosityController';


/* 
  You'll want to expand this component (and others) for the sprints! Remember 
  that you can pass "props" as function arguments. If you need to handle state 
  at a higher level, just move up the hooks and pass the state/setter as a prop.
  
  This is a great top level component for the REPL. It's a good idea to have organize all components in a component folder.
  You don't need to do that for this gearup.
*/

// interface 

export default function REPL() {
  // TODO: Add some kind of shared state that holds all the commands submitted.
  const [cmdList, setCommandList] = useState<string[]>([]);
  const [responses, setResponses] = useState<JSX.Element[]>([]);
  const [verbosity, setVerbosity] = useState<number>(0);
  const [dataMap, setDataMap] = useState<Map<string, JSON>>(new Map<string, JSON>())
  return (
    <div className="repl">  
      <REPLHistory history = {responses}/>
      <VerbosityController toggle = {verbosity} setToggle = {setVerbosity}/>
      <hr></hr>
      <REPLInput history = {cmdList} setHistory={setCommandList}
      toggle = {verbosity} setToggle = {setVerbosity} 
      responses = {responses} setResponses= {setResponses}
      dataMap={dataMap} setDataMap={setDataMap}/>
    </div>
  );
}
