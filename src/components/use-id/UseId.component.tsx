import {FC} from "react";

// @models
import {ModelUseId} from "./model/ModelUseId.model";

// @styles
import styles from "./styles/StylesUseId.module.scss";
import UseUseIdHooks from "./hooks/UseUseId.hooks";

const UseId: FC<ModelUseId> = () => {
    const {
        hookId
    } = UseUseIdHooks();

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>useId</p>
            <div className={styles.container}>
                <label htmlFor={`${hookId}-email`}>E-mail:</label>
                <input id={`${hookId}-email`} type="email"/>
                <br/>
                <label htmlFor={`${hookId}-name`}>Name</label>
                <input id={`${hookId}-name`} type="text"/>
            </div>
        </div>
    )
}
export default UseId;