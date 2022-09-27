import styles from '../styles/Header.module.scss'
import Link from "next/link";
import React, { ReactElement } from 'react';

const Header = ():ReactElement => {
    return (
        <div className={styles.container}>
            <h1><Link href={'/'}>NextJs</Link></h1>
            <div className={styles.linkContainer}>
                <Link href={'/static/About'}>About</Link>
                <Link href="/account/Profile">Go to Profile</Link>
            </div>
        </div>
    )
}

export default Header
