import styles from '../styles/Grid.module.scss'
import {ReactNode} from "react";
import React, { FC, ReactElement } from 'react';

interface GridProps {
    children: ReactNode
}

const Grid:FC<GridProps> = ({children}):ReactElement => {
    return (
        <div className={styles.grid}>
            {children}
        </div>
    )
}

export default Grid
