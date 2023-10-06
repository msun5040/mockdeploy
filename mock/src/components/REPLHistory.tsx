import { Dispatch, SetStateAction } from 'react';
import '../styles/main.css';

interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    history: string[]
}
export function REPLHistory(props : REPLHistoryProps) {
    console.log(props)
    return (
        <div className="repl-history">
            {/* This is where command history will go */}
            {props.history.map(cmd => <p>{cmd}</p>)}
            
        </div>
    );
}