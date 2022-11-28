import {useState, useCallback} from "react";


const UseUseCallback = () => {
    const [firstCounter, setFirstCounter] = useState<number>(0);
    const [secondCounter, setSecondCounter] = useState<number>(0);

    const increaseFirstCounter = useCallback(() => setFirstCounter(prevValue => prevValue + 1),[]);
    const increaseSecondCounter = useCallback(() => setSecondCounter(prevValue => prevValue + 1),[]);

    return {
        firstCounter,
        setFirstCounter,
        secondCounter,
        setSecondCounter,
        increaseFirstCounter,
        increaseSecondCounter
    }
}

export default UseUseCallback;