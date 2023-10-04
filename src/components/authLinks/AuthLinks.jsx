"use client"

import React from 'react'
import styles from './authlinks.module.css'
import Link from 'next/link';
import { useState } from 'react';

const AuthLinks = () => {

    const [open, setOpen] = useState(false)

    const status = "notAuthenticated";
    return (
        <>
            {status === "notAuthenticated" ? (
                <Link href="/login">Login</Link>
            ) : (
                <>
                    <Link href="/write">Write</Link>
                    <span className={styles.link}>Logout</span>
                </>
            )}
            <div className={styles.burger}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </>
    );
};

export default AuthLinks