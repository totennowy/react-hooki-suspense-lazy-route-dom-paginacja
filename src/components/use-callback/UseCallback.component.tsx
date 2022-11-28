import {FC, useMemo} from "react";

// @models
import {ModelUseCallback} from "./model/ModelUseCallback.model";

// @hooks
import UseUseCallback from "./hooks/UseUseCallback.hooks";

// @styles
import styles from "./styles/StylesUseCallback.module.scss";

// @components
import SingleCallbackElement from "./components/single-callback-element/SingleCallbackElement.component";

const UseCallback: FC<ModelUseCallback> = () => {
    const {
        firstCounter,
        setFirstCounter,
        secondCounter,
        setSecondCounter,
        increaseFirstCounter,
        increaseSecondCounter
    } = UseUseCallback();

    const firstCounterComponent = <SingleCallbackElement callback={increaseFirstCounter} index={1} />;
    const secondCounterComponent = <SingleCallbackElement callback={increaseSecondCounter} index={2} />;

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>useCallback</p>
            <div className={styles.box}>
                <div className={styles.container}>
                    <p>Licznik nr 1 wynosi {firstCounter}</p>
                    {firstCounterComponent}
                </div>
                <div className={styles.container}>
                    <p>Licznik nr 2 wynosi {secondCounter}</p>
                    {secondCounterComponent}
                </div>
            </div>
        </div>
    );
}

export default UseCallback;