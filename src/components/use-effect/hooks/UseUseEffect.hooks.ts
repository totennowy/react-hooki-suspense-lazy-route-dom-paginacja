import {SetStateAction, useEffect, useState} from "react";

// @axios
import axios from "axios";

const UseUseEffectHooks = () => {
    const [mouseHorizontalPosition, setMouseHorizontalPosition] = useState<string>('');
    const [mouseVerticalPosition, setMouseVerticalPosition] = useState<string>('');
    const [axiosData, setAxiosData] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage, setPostsPerPage] = useState<number>(30);

    const handleMouseMoveX = (event: { clientX: SetStateAction<any>; }) => setMouseHorizontalPosition(event.clientX);
    const handleMouseMoveY = (event: { clientY: SetStateAction<any>; }) => setMouseVerticalPosition(event.clientY);

    const paginate = (pageNumber: SetStateAction<number>) => setCurrentPage(pageNumber);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = axiosData.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMoveX);
        window.addEventListener('mousemove', handleMouseMoveY);
    }, []);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                setAxiosData(response.data);
                console.log(response.data);
            });
    }, []);

    return {
        mouseHorizontalPosition,
        setMouseHorizontalPosition,
        mouseVerticalPosition,
        setMouseVerticalPosition,
        axiosData,
        setAxiosData,
        currentPage,
        setCurrentPage,
        postsPerPage,
        setPostsPerPage,
        indexOfLastPost,
        indexOfFirstPost,
        currentPosts,
        handleMouseMoveX,
        handleMouseMoveY,
        paginate
    }
}

export default UseUseEffectHooks;