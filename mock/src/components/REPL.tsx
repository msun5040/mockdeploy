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

export default function REPL() {
  // TODO: Add some kind of shared state that holds all the commands submitted.
  const [cmdList, setCommandList] = useState<string[]>([]);
  const [verbosity, setVerbosity] = useState<number>(0);
  return (
    <div className="repl">  
      <REPLHistory history = {cmdList}/>
      <VerbosityController toggle = {verbosity} setToggle = {setVerbosity}/>
      <hr></hr>
      <REPLInput history = {cmdList} setHistory={setCommandList}/>
    </div>
  );
}
