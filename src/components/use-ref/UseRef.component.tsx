import {FC} from "react";

// @models
import {ModelUseRef} from "./model/ModelUseRef.model";

// @hooks
import UseUseRefHooks from "./hooks/UseUseRef.hooks";

// @styles
import styles from "./styles/StylesUseRef.module.scss";

const UseRef: FC<ModelUseRef> = () => {
    const {
        counter,
        setCounter,
        textInputRef,
        numberInputRef,
        focusOnInput
    } = UseUseRefHooks();

    console.log(textInputRef.current);
    console.log(numberInputRef.current);

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>useRef</p>
            <div className={styles.container}>
                <input
                    ref={textInputRef}
                    type="text"
                />
                <button className={styles.button} onClick={focusOnInput}>
                    Ustaw focus na input
                </button>
                <button className={styles.button} onClick={() => setCounter(counter + 1)}>
                   Przerenderuj komponent
                </button>
            </div>
        </div>
    );
}

export default UseRef;