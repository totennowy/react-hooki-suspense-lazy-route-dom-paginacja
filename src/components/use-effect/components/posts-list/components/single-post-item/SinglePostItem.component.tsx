import {FC} from "react";

// @models
import {ModelSinglePostItem} from "./model/ModelSinglePostItem.model";

// @styles
import styles from "./styles/StylesSinglePostItem.module.scss";

const SinglePostItem:FC<ModelSinglePostItem> = ({id, name}) => {
    return (
        <div className={styles.wrap}>
            <li key={id}>{name}</li>
        </div>
    );
}

export default SinglePostItem;