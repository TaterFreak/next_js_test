import styles from '../styles/Wrapper.module.scss'
import {ReactNode} from "react";
import React, { FC, ReactElement } from 'react';
import Header from "./Header";

interface GridProps {
    children: ReactNode
}

const Grid:FC<GridProps> = ({children}):ReactElement => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Grid
