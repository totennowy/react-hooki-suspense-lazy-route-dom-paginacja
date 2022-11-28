import {useState, createRef, useRef, useEffect } from "react";

const UseUseRef = () => {
    const [counter, setCounter] = useState<number>(0);
    const textInputRef = useRef<any>(true);
    const numberInputRef = createRef<any>();
    const focusOnInput = () => textInputRef.current.focus();

    useEffect(() => {
        textInputRef.current.focus();
    }, [])

    return {
        counter,
        setCounter,
        textInputRef,
        numberInputRef,
        focusOnInput
    }
}

export default UseUseRef;