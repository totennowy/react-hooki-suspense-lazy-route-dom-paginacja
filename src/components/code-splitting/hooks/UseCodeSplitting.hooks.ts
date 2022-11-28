import {useEffect, useState} from "react";

const UseCodeSplitting = () => {
    const [postData, setPostData] = useState<any[]>([]);

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((data) => setPostData(data))
                .catch((err) => {
                    console.log(err);
                });
    },[])

    return {
        postData
    }
}

export default UseCodeSplitting;