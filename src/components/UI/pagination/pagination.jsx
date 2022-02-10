import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import classes from "pagination.module.css"

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className={classes.pages__wrapper}>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? classes.pages__current + classes.pages : classes.pages}
                >
                        {p}
                    </span>
            )}
        </div>
    );
};

export default Pagination;