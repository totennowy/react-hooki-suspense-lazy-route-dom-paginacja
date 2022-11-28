import {useId} from "react";

const UseUseId = () => {
    const hookId = useId();

    return {
        hookId
    }
}
export default UseUseId;