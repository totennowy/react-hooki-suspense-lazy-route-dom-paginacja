import {FC, useEffect} from "react";

// @models
import {ModelSingleLayoutEffect} from "./model/ModelSingleLayoutEffect.model";

// @styles
import styles from "./styles/StylesSingleLayoutEffect.module.scss";

const SingleLayoutEffect:FC<ModelSingleLayoutEffect> = () => {

    useEffect(() => {
        const element = document.querySelector('.triangle');

    },[]);

    return <div className={styles.triangle} />

}

export default SingleLayoutEffect;