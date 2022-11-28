import {useEffect, useReducer} from "react";

// @data
import {arrayOfPeople} from "../data/UseReducerData";

const UseUseReducer = () => {

    const reducer = (state: { count: number; showText: boolean; }, action: { type: any; }) => {
        switch (action.type) {
            case "increment":
                return {count: state.count + 1, showText: state.showText};
            case "toggleShowText":
                return {count: state.count, showText: !state.showText};
            default:
                return state;
        }
    }

    const coursesReducer = (stateCourses: any, action: any) => {
        switch (action.type){
            case 'ADD':
                return [...stateCourses, action.newCourse];
            case 'REMOVE':
                return stateCourses.filter((course: any) => course.id !== action.id);
            default:
                return stateCourses;
        }
    }

    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});
    const [stateCourses, dispatchCourses] = useReducer(coursesReducer, arrayOfPeople);

    return {
        state,
        dispatch,
        reducer,
        stateCourses,
        dispatchCourses,
        coursesReducer
    };
}

export default UseUseReducer;