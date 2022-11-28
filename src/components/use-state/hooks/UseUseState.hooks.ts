import {useState} from "react";

const UseUseStateHooks = ()  => {
    const [countClicks, setCountClicks] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');
    const [isCheckboxClicked, setIsCheckboxClicked] = useState<boolean>(false);
    const [carObject, setCarObject] = useState<{brand: string; model: string; year: string; color: string;}>({brand: "", model: "", year: "", color: ""});
    const [arrayOfCarObjects, setArrayOfCarObjects] = useState<any[]>([]);

    return {
        countClicks,
        setCountClicks,
        inputValue,
        setInputValue,
        isCheckboxClicked,
        setIsCheckboxClicked,
        carObject,
        setCarObject,
        arrayOfCarObjects,
        setArrayOfCarObjects
    }
}

export default UseUseStateHooks;