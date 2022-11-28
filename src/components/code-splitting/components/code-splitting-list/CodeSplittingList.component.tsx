import React, {FC} from "react";

// @models
import {ModelCodeSplittingList} from "./model/ModelCodeSplittingList.model";

// @hooks
import UseCodeSplitting from "../../hooks/UseCodeSplitting.hooks";

// @styles
import styles from "./styles/StylesCodeSplittingList.module.scss";

// @components
import SingleCodeSplittingItem from "./components/single-code-splitting-item/SingleCodeSplittingItem.component";

const CodeSplittingList:FC<ModelCodeSplittingList> = () => {
    const {
        postData
    } = UseCodeSplitting();

    return (
        <div className={styles.wrap}>
            {
                postData.map(person => {
                    return (
                        <SingleCodeSplittingItem
                            key={person.id}
                            postId={person.id}
                            postTitle={person.title}
                            postBody={person.body}
                        />
                    );
                })
            }
        </div>
    );
}

export default CodeSplittingList;