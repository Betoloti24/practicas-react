import { useRef, useState } from "react"

import Tooltip from "./Tooltip"

function TooltipText(props) {
    let [toooltipDOM, setTooltipDOM] = useState()
    let [showTooltip, setShowTooltip] = useState(false)
    let spanElement = useRef()

    function handleMouseOver(ev) {
        let positionDOM = spanElement.current.getBoundingClientRect()
        setTooltipDOM(positionDOM)
        setShowTooltip(true)
    }

    return (
        <>
            <span className='tooltip-text' ref={spanElement} onMouseLeave={ (ev) => setShowTooltip(false) } onMouseOver={ ev => handleMouseOver(ev) }>
                {props.children}
            </span>
            {
              showTooltip && <Tooltip DOM={toooltipDOM} tooltip={props.tooltip}/>
            }
        </>
    )
}

export default TooltipText