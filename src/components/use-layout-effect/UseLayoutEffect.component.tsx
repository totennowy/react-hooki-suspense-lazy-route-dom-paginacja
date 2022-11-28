import {FC, useEffect, useLayoutEffect} from "react";

// @modules
import {ModelUseLayoutEffect} from "./model/ModelUseLayoutEffect.model";

// @hooks
import UseUseLayoutEffect from "./hooks/UseUseLayoutEffect.hooks";

// @styles
import styles from "./styles/StylesUseLayoutEffect.module.scss";

const UseLayoutEffect:FC<ModelUseLayoutEffect> = () => {
    const {
        isVisible,
        setIsVisible,
        handleOnClick
    } = UseUseLayoutEffect();

    useEffect(() => {
        console.log('Po wyrenderowaniu DOM')
    }, []);

    useLayoutEffect(() => {
        console.log('Przed wyrenderowaniem DOM')
    },[]);

    console.log('render');

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>useLayoutEffect</p>
            <div className={styles.box}>
                <div className={styles.container}>
                    <button
                        className={styles.button}
                        onClick={handleOnClick}
                    >
                        Przełączaj
                    </button>

                </div>
            </div>
        </div>
    );
}

export default UseLayoutEffect;