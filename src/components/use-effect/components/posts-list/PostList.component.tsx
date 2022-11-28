import {FC} from "react";

// @models
import {ModelPostList} from "./model/ModelPostList.model";

// @hooks
import UseUseEffectHooks from "../../hooks/UseUseEffect.hooks";

// @styles
import styles from "./styles/StylesPostList.module.scss";

// @components
import SinglePostItem from "./components/single-post-item/SinglePostItem.component";
import Pagination from "./components/pagination/Pagination.component";

const PostList: FC<ModelPostList> = () => {
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
            <div className={styles.container}>
                {currentPosts.map(post => {
                    return (
                        <SinglePostItem
                            key={post.id}
                            id={post.id}
                            name={post.name}
                        />
                    );
                })
                }
            </div>
            <div className={styles.container}>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={axiosData.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default PostList;