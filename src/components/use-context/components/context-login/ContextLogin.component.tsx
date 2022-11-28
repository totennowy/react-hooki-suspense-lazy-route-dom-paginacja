import {FC} from "react";

// models
import {ModelContextLogin} from "./model/ModelContextLogin.model";

// @hooks
import UseUseContext from "../../hooks/UseUseContext.hooks";

// @styles
import styles from "./styles/StylesContextLogin.module.scss";

const ContextLogin:FC<ModelContextLogin> = () => {
    const {
        username,
        setUsername,
        AppContext
    } = UseUseContext();

    return (
        <div className={styles.wrap}>
            <input
                onChange={(e) =>{
                    setUsername(e.target.value);
                }}
            />
        </div>
    );
}

export default ContextLogin;