import {FC, useContext} from "react";

// @models
import {ModelContextUser} from "./model/ModelContextUser.model";

// @hooks
import UseUseContext from "../../hooks/UseUseContext.hooks";

// @styles
import styles from "./styles/StylesContextUser.module.scss";

const ContextUser:FC<ModelContextUser> = () => {
    const {
        username,
        setUsername,
        AppContext
    } = UseUseContext();

    return (
        <div className={styles.wrap}>
            <p> User: {username}</p>
        </div>
    );
}

export default ContextUser;