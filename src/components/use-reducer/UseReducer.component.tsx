import {FC, Key} from "react";

// @models
import {ModelUseReducer} from "./model/ModelUseReducer.model";

// @hooks
import UseUseReducer from "./hooks/UseUseReducer.hooks";

// @styles
import styles from "./styles/StylesUseReducer.module.scss";

// @components
import SingleListItem from "./components/single-list-item/SingleListItem.component";
import AddForm from "./components/add-form/AddForm.component";

const UseReducer: FC<ModelUseReducer> = () => {
    const {
        state,
        dispatch,
        reducer,
        stateCourses,
        dispatchCourses,
        coursesReducer
    } = UseUseReducer();

    console.log(stateCourses);

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>useReducer</p>
            <div className={styles.box}>
                <div className={styles.container}>
                    <p>{state.count}</p>
                    <button
                        className={styles.button}
                        onClick={() => {
                            dispatch({type: "increment"});
                            dispatch({type: "toggleShowText"});
                        }}
                    >
                        Klik
                    </button>
                    <p>{state.showText ? "Wartość jest true więc widać tekst" : null}</p>
                </div>
                <div className={styles.map_container}>
                    {stateCourses.map((person: { id: string; name: string; }) => {
                        return (
                            <SingleListItem
                                key={person.id}
                                id={person.id}
                                name={person.name}
                                onClickHandler={dispatchCourses}
                            />
                        );
                    })
                    }
                    <AddForm addHandler={dispatchCourses}/>
                </div>
            </div>
        </div>
    );
}

export default UseReducer;