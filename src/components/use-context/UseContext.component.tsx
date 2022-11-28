import {FC} from "react";

// @models
import {ModelUseContext} from "./model/ModelUseContext.model";

// @hooks
import UseUseContext from "./hooks/UseUseContext.hooks";

// @styles
import styles from "./styles/StylesUseContext.module.scss";

// @components
import ContextLogin from "./components/context-login/ContextLogin.component";
import ContextUser from "./components/context-user/ContextUser.component";

const UseContext: FC<ModelUseContext> = () => {
    const {
        username,
        setUsername,
        AppContext
    } = UseUseContext();

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>useContext</p>
            <div className={styles.box}>
                <div className={styles.container}>
                    <AppContext.Provider value={{username, setUsername}}>
                        <ContextLogin />
                        <ContextUser />
                    </AppContext.Provider>
                </div>
            </div>
        </div>
    );
}

export default UseContext;