import {FC} from "react";

// @models
import {ModelAddForm} from "./model/ModelAddForm.model";

// @hooks
import UseAddForm from "./hooks/UseAddForm.hooks";

// @styles
import styles from "./styles/StylesAddForm.module.scss";

const AddForm:FC<ModelAddForm> = ({addHandler}) => {
    const {
        inputData,
        setInputData,
        handleOnChange,
        handleOnClick
    } = UseAddForm(addHandler);
    return (
        <div className={styles.wrap}>
            <input
                type="text"
                onChange={handleOnChange}
                value={inputData}
            />
            <button
                className={styles.button}
                onClick={handleOnClick}
            >
                Dodaj
            </button>
        </div>
    );
}

export default AddForm;