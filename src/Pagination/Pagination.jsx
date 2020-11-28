import React, { useState } from 'react';
import styles from './Pagination.module.css';
import cn from 'classnames';

let Pagination = ({ totalItemsCount, pageSize, currentPage, onPageSelected, portionSize = 10 }) => {

    let [portionNumber, setPortiopnNumber] = useState(1);

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return <div className={styles.pagination} >
        {portionNumber > 1 &&
            <button onClick={() => { setPortiopnNumber(portionNumber - 1) }} >PREV</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                    key={p}
                    onClick={(e) => {
                        onPageSelected(p);
                    }} >{p}</span>
            })}

        {portionCount > portionNumber &&
            <button onClick={() => { setPortiopnNumber(portionNumber + 1) }} >NEXT</button>}

    </div>
}

export default Pagination;