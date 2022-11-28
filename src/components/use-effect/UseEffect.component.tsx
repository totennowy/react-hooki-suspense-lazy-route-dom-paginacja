import React, {FC, SetStateAction, Suspense} from "react";

// @models
import {ModelUseEffect} from "./model/ModelUseEffect.hooks";

// @hooks
import UseUseEffectHooks from "./hooks/UseUseEffect.hooks";

// @styles
import styles from "./styles/StylesUseEffect.module.scss";

// @components
import Pagination from "./components/posts-list/components/pagination/Pagination.component";

// @lazyComponents
const PostList = React.lazy(() => import ("./components/posts-list/PostList.component"));

const UseEffect: FC<ModelUseEffect> = () => {
    const {
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
    } = UseUseEffectHooks();

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>useEffect</p>
            <div className={styles.box}>
                <div className={styles.container}>
                    <p>Współrzędne myszki</p>
                    <p>X: {mouseHorizontalPosition}</p>
                    <p>Y: {mouseVerticalPosition}</p>
                </div>
                <Suspense fallback={<h2>Loading...</h2>}>
                        <PostList />
                </Suspense>
            </div>
        </div>
    );
}

export default UseEffect;