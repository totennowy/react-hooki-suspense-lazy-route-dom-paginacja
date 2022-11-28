import {useMemo, useState} from "react";

const UseUseMemo = () => {
    const [firstCounter, setFirstCounter] = useState<number>(0);
    const [secondCounter, setSecondCounter] = useState<number>(0);
    const [state, setState] = useState<{x: number, y: number}>({x: 0, y: 0});

    const increaseX = () => setState({...state, x: state.x + 1})
    const increaseY = () => setState({...state, y: state.y + 1})

    const increaseFirstCounter = () => setFirstCounter(firstCounter + 1);
    const increaseSecondCounter = () => setSecondCounter(secondCounter + 1);

    return {
        firstCounter,
        secondCounter,
        increaseFirstCounter,
        increaseSecondCounter,
        state,
        setState,
        increaseX,
        increaseY
    }
}

export default UseUseMemo;