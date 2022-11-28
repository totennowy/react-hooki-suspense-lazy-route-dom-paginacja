import {FC} from "react";

// @models
import {ModelMainLayout} from "./model/ModelMainLayout.model";

// @styles
import styles from "./styles/StylesMainLayout.module.scss";

// @routes
import {Link} from "react-router-dom";

const MainLayout:FC<ModelMainLayout> = ({children}) => {
    return (
      <div className={styles.wrap}>
          <div className={styles.wrap_header}>
             <Link to='/'>Strona główna</Link>
             <Link to='/hooks'>Hooki</Link>
             <Link to='/code-splitting'>Code Splitting(Suspense/Lazy)</Link>
          </div>
          <div className={styles.wrap_main}>
              {children}
          </div>
      </div>
    );
}

export default MainLayout;