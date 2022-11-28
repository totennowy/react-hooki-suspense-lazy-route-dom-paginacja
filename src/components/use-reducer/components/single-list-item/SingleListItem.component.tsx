import {FC} from "react";

// @models
import {ModelSingleListItem} from "./model/ModelSingleListItem.model";

// @hooks
import UseSingleListItem from "./hooks/UseSingleListItem.hooks";

// @styles
import styles from "./styles/StylesSingleListItem.module.scss";

const SingleListItem:FC<ModelSingleListItem> = ({id, name, onClickHandler}) => {
    const {
        handleOnClick
    } = UseSingleListItem(id, onClickHandler);

    return (
        <div className={styles.wrap}>
            <p>{name}</p>
            <button
                className={styles.button}
                onClick={handleOnClick}
            >
                Usuń
            </button>
        </div>
    );
}

export default SingleListItem;