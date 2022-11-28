import {FC} from "react";

// @models
import {ModelSingleCodeSplittingItem} from "./model/ModelSingleCodeSplittingItem.model";

// @styles
import styles from "./styles/StylesSingleCodeSplittingItem.module.scss";

const SingleCodeSplittingItem:FC<ModelSingleCodeSplittingItem> = ({postId, postTitle, postBody}) => {

    return (
        <div className={styles.wrap}>
            <div className={styles.id}>{postId}</div>
            <div className={styles.title}>{postTitle}</div>
            <div className={styles.body}>{postBody}</div>
        </div>
    );
}

export default SingleCodeSplittingItem;