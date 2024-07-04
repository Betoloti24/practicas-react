import { useEffect, useState, useRef } from "react"

function Tooltip({DOM, tooltip}) {
    let [position, setPosition] = useState({top: 0, left: 0})
    let refTooltip = useRef()

    useEffect(() => {
        let { height, width } = refTooltip.current.getBoundingClientRect()
        let coords = {}

        console.log(DOM, height, width)

        if (DOM.y > height) {
            coords.top = DOM.y - height
        }else{
            coords.top = DOM.y + height
        }
        coords.left = DOM.x + (DOM.width / 2) - (width / 2)

        setPosition(coords)
    }, [DOM])

    return (
        <span ref={refTooltip} style={{ left: position.left, top: position.top }} className="tooltip">{tooltip}</span>
    )
}

export default Tooltip