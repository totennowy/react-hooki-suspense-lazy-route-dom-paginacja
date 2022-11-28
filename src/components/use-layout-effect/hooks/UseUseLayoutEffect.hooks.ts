import {useState} from "react";
import SingleLayoutEffect from "../components/single-layout-effect/SingleLayoutEffect.component";

const UseUseLayoutEffect = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleOnClick = () => setIsVisible(prev => !prev);



    return {
        isVisible,
        setIsVisible,
        handleOnClick,
    }
}

export default UseUseLayoutEffect;