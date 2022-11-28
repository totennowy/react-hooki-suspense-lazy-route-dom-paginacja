import React from "react";

// @styles
import styles from './styles/StylesHooks.module.scss';

// @routers
import {Link} from "react-router-dom";

// @components
import UseState from "../../components/use-state/UseState.component";
import UseEffect from "../../components/use-effect/UseEffect.component";
import UseId from "../../components/use-id/UseId.component";
import UseRef from "../../components/use-ref/UseRef.component";
import UseReducer from "../../components/use-reducer/UseReducer.component";
import UseMemo from "../../components/use-memo/UseMemo.component";
import UseCallback from "../../components/use-callback/UseCallback.component";
import UseLayoutEffect from "../../components/use-layout-effect/UseLayoutEffect.component";
import UseContext from "../../components/use-context/UseContext.component";
import MainLayout from "../../layout/MainLayout.component";

function Hooks() {
    return (
            <div className={styles.wrap}>
                <div className={styles.main}>
                    <div className={styles.container}>
                        <UseState/>
                    </div>
                    <div className={styles.container}>
                        <UseEffect/>
                    </div>
                    <div className={styles.container}>
                        <UseId/>
                    </div>
                    <div className={styles.container}>
                        <UseRef/>
                    </div>
                    <div className={styles.container}>
                        <UseReducer/>
                    </div>
                    <div className={styles.container}>
                        <UseMemo/>
                    </div>
                    <div className={styles.container}>
                        <UseCallback/>
                    </div>
                    <div className={styles.container}>
                        <UseLayoutEffect/>
                    </div>
                    <div className={styles.container}>
                        <UseContext/>
                    </div>
                </div>
            </div>
    );
}

export default Hooks;