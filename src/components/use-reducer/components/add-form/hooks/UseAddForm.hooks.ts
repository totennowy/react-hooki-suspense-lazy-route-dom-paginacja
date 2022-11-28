import {SetStateAction, useState} from "react";

const UseAddForm = (addHandler: any) => {
    const [inputData, setInputData] = useState('');

    const handleOnChange = (event:any) => setInputData(event.target.value);

    const handleOnClick = () => {
        const newCourse = {
            id: Math.floor(Math.random() * 1000),
            name: inputData,
        };
        addHandler({type: 'ADD', newCourse});
        setInputData('');
    };

    return {
        inputData,
        setInputData,
        handleOnChange,
        handleOnClick
    };
}

export default UseAddForm;