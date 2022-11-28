import React, {FC} from "react";

// @model
import {ModelUseState} from "./model/ModelUseState.model";

// @hooks
import UseUseStateHooks from "./hooks/UseUseState.hooks";

// @styles
import styles from "./styles/StylesUseState.module.scss";

const UseState:FC<ModelUseState> = () => {
    const {
        countClicks,
        setCountClicks,
        inputValue,
        setInputValue,
        isCheckboxClicked,
        setIsCheckboxClicked,
        carObject,
        setCarObject,
        arrayOfCarObjects,
        setArrayOfCarObjects
    } = UseUseStateHooks();

    return (
        <div className={styles.wrap}>
            <p className={styles.wrap_title}>useState</p>
            <div className={styles.wrap_box}>
                <div className={styles.container}>
                    <p className={styles.title}>Hook useState number</p>
                    <button
                        className={styles.button}
                        onClick={() => setCountClicks(countClicks + 1)}
                    >
                        Kliknięto {countClicks} razy
                    </button>
                </div>

                <div className={styles.container}>
                    <p className={styles.title}>Hook useState string</p>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <p>{inputValue}</p>
                </div>

                <div className={styles.container}>
                    <p className={styles.title}>Hook useState boolean</p>
                    <input type="checkbox" value={inputValue} onClick={() => setIsCheckboxClicked(!isCheckboxClicked)}/>
                    <p>{isCheckboxClicked ? "Przycisk jest kliknięty" : "Przycisk nie jest kliknięty"}</p>
                </div>

                <div className={styles.container}>
                    <p className={styles.title}>Hook useState object</p>
                        <input type="text" value={carObject.brand} placeholder="marka" onChange={(e) => setCarObject(prevState => ({...prevState, brand: e.target.value}))} />
                        <input type="text" value={carObject.model} placeholder="model" onChange={(e) => setCarObject(prevState => ({...prevState, model: e.target.value}))} />
                        <input type="text" value={carObject.year} placeholder="lata" onChange={(e) => setCarObject(prevState => ({...prevState, year: e.target.value}))} />
                        <input type="text" value={carObject.color} placeholder="kolor" onChange={(e) => setCarObject(prevState => ({...prevState, color: e.target.value}))} />
                    <ul>
                        <li>Marka: {carObject.brand}</li>
                        <li>Model: {carObject.model}</li>
                        <li>Lata: {carObject.year}</li>
                        <li>Kolor: {carObject.color}</li>
                    </ul>
                    <button type="button" className={styles.button} onClick={(e) => setArrayOfCarObjects(prevArray => [...prevArray, {brand:carObject.brand, model: carObject.model, year: carObject.year,color: carObject.color}])}>Kliknij żeby dodać do tabeli</button>
                </div>

                <div className={styles.container}>
                    <p className={styles.title}>Hook useState array</p>
                    <ul>
                    {arrayOfCarObjects.map((item) => {
                        return (
                            <li>Marka: {item.brand} Model: {item.model} Lata: {item.year} Kolor: {item.color}</li>
                        )})
                    }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UseState;
