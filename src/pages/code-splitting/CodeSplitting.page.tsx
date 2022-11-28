import React from "react";

// @styles
import styles from './styles/StylesCodeSplitting.module.scss';

// @components
import CodeSplittingComponent from "../../components/code-splitting/CodeSplitting.component";

function CodeSplitting() {
    return (
        <div className={styles.wrap}>
            <CodeSplittingComponent />
        </div>
    )
}

export default CodeSplitting;