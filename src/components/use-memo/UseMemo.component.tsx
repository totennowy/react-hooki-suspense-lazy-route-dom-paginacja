import {FC, useMemo} from "react";

// @models
import {ModelUseMemo} from "./model/ModelUseMemo.model";

// @hooks
import UseUseMemo from "./hooks/UseUseMemo.hooks";

// @styles
import styles from "./styles/StylesUseMemo.module.scss";

// @components
import RenderTest from "./components/render-test/RenderTest.component";

const UseMemo: FC<ModelUseMemo> = () => {
    const {
        firstCounter,
        secondCounter,
        increaseFirstCounter,
        increaseSecondCounter,
        state,
        setState,
        increaseX,
        increaseY
    } = UseUseMemo();

   const firstCounterComponent = useMemo(() => <RenderTest counter={state} index={1} />, [state.x])
   const secondCounterComponent = useMemo(() => <RenderTest counter={state} index={2} />, [state.y])

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>useMemo</p>
            <div className={styles.box}>
                <div className={styles.container}>
                    <p>Licznik nr 1 wynosi {state.x}</p>
                    <button
                        className={styles.button}
                        onClick={increaseX}
                    >
                        Zwiększ licznik nr 1
                    </button>
                </div>

                <div className={styles.container}>
                    <p>Licznik nr 2 wynosi {state.y}</p>
                    <button
                        className={styles.button}
                        onClick={increaseY}
                    >
                        Zwiększ licznik nr 2
                    </button>
                </div>
                <div className={styles.container}>
                    {firstCounterComponent}
                    {secondCounterComponent}
                    {/*<RenderTest counter={state} index={1} />*/}
                    {/*<RenderTest counter={state} index={2} />*/}
                </div>
            </div>
        </div>
    );
}

export default UseMemo;