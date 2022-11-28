import React, {FC} from "react";

// @models
import {ModelRenderTest} from "./model/ModelRenderTest.model";

// @styles
import styles from "./styles/StylesRenderTest.module.scss";

const RenderTest:FC<ModelRenderTest> = ({index, counter}) => {

    console.log(`Render licznika nr: ${index}`);

    return (
        <div className={styles.wrap}>
            <p>Licznik nr {index}, wynosi {counter.x}</p>
        </div>
    );
}

export default React.memo(RenderTest);