import {createContext, useState} from "react";

const UseUseContext = () => {
    const [username, setUsername] = useState<string>('');

    const AppContext = createContext<any>(null);

    return {
        username,
        setUsername,
        AppContext
    }
}

export default UseUseContext;