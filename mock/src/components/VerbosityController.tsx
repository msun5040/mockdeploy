// TODO: implement the radio button that controls the brevity of the response.
import { Dispatch, SetStateAction } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton'

interface VerbosityToggler {
    toggle: number
    setToggle: Dispatch<SetStateAction<number>>
}
export function VerbosityController(prop : VerbosityToggler) {
    function toggleVerbosity () {
        // toggle = 0 is brief
        // toggle = 1 is verbose
        if (prop.toggle == 0) {
            prop.setToggle(1)
        } else {
            prop.setToggle(0)
        }
    }

    return (
        <ToggleButton id = 'verbosity-control' value = {prop.toggle} 
        onClick = {() => toggleVerbosity()}>
            {prop.toggle == 0 ? 'brief' : 'verbose'}
        </ToggleButton>
    );
}