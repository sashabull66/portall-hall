import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";

export const Portal = ({children, title}) => {
    const [div] = useState(document.createElement('div'))
    let newWindow = useRef(null)
    useEffect(() => {
        newWindow.current = window.open("","","width=300,height=300,left=250,top=200");
        newWindow.current.document.body.appendChild(div);
        newWindow.current.document.title = title
        document.querySelectorAll('style, link').forEach(x => {
            newWindow.current.document.head.appendChild(x.cloneNode(true))
        })
        return () => newWindow.current && newWindow.current.close()
    }, [div]) //  обязательно див в зависимости

    return createPortal(children, div)
}