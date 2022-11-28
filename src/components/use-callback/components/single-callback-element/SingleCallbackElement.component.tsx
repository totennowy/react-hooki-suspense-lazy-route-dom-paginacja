import React, {FC} from "react";

// @models
import {ModelSingleCallbackElement} from "./model/ModelSingleCallbackElement.model";

// @styles
import styles from "./styles/StylesSingleCallbackElement.module.scss";

const SingleCallbackElement:FC<ModelSingleCallbackElement> = ({callback, index}) => {

    console.log(`Render licznika nr ${index}`);

    return (
        <div className={styles.wrap}>
            <button
                className={styles.button}
                onClick={callback}
            >
                Zwiększ licznik {index}
            </button>
        </div>
    );
}

export default React.memo(SingleCallbackElement);