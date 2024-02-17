import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css'

const menuCategories = () => {
    return (
        <div className={styles.categoryList}>
            <Link href="/blog?cat=style"
                className={`${styles.categoryItem}${styles.style}`}
            >
                Style
            </Link>
            <Link href="/blog?cat=style"
                className={`${styles.categoryItem}${styles.style}`}
            >
                Tech
            </Link>
            <Link href="/blog?cat=style"
                className={`${styles.categoryItem}${styles.style}`}
            >
                Travel
            </Link>
        </div>
    )
}

export default menuCategories
