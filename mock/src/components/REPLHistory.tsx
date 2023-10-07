import { Dispatch, SetStateAction } from 'react';
import '../styles/main.css';

interface REPLHistoryProps{
    // TODO: Fill with some shared state tracking all the pushed commands
    history: JSX.Element[]

}
export function REPLHistory(props : REPLHistoryProps) {
    console.log(props)

    return (
        <div className="repl-history">
            {/* This is where command history will go */}
            {props.history.map(logEntrance => logEntrance)}
            
        </div>
    );
}