import styles from  "./index.module.scss";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Counter = ({ increase, decrease, page }) => {
  return (
    <div className={styles.counter}>
      {" "}
      <button  disabled={page === 1} onClick={decrease}>
        <GoChevronLeft size={20} />
      </button>
      <p>
        PAGE: <b>{page}</b>
      </p>
      <button onClick={increase}>
        {" "}
        <GoChevronRight size={20} />
      </button>
    </div>
  );
};

export default Counter;
