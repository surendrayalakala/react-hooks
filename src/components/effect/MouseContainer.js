import React, {useState} from 'react'
import EffectHookMouse from './EffectHookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => {setDisplay(!display)}}>Toggle display</button>
            {display && <EffectHookMouse />}
        </div>
    )
}

export default MouseContainer
