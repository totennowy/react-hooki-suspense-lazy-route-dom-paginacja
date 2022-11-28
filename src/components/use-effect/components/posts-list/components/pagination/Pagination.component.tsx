import {FC} from "react";

// @models
import {ModelPagination} from "./model/ModelPagination.model";

// @styles
import styles from "./styles/StylesPagination.module.scss";
import UseUseEffectHooks from "../../../../hooks/UseUseEffect.hooks";

const Pagination:FC<ModelPagination> = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers:Array<number> = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
      <div className={styles.wrap}>
            <ul className={styles.pagination}>
                {pageNumbers.map(number => {
                    return (
                        <li key={number}>
                            <a
                                href="!#"
                                onClick={(e) => {
                                            paginate(number);
                                            e.preventDefault();
                                        }}
                            >
                                {number}
                            </a>
                        </li>
                    );
                })
                }
            </ul>
      </div>
    );
}

export default Pagination;