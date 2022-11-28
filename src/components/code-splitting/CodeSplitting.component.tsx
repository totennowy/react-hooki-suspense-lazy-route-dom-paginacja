import React, {FC, Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";

// @models
import {ModelCodeSplitting} from "./model/ModelCodeSplitting.model";

// @hooks
import UseCodeSplitting from "./hooks/UseCodeSplitting.hooks";

// @styles
import styles from "./styles/StylesCodeSplitting.module.scss";

// @components
import ErrorFallback from "./components/error-boundary/ErrorBoundary.component";

// @lazy components
const CodeSplittingList = React.lazy(() => import("./components/code-splitting-list/CodeSplittingList.component"));

const CodeSplittingComponent: FC<ModelCodeSplitting> = () => {
    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>Code Splitting</p>
            <div className={styles.box}>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {}}
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <CodeSplittingList />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>
    );
}

export default CodeSplittingComponent;