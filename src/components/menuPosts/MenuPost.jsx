import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './menuPosts.module.css'

const MenuPost = ({ withImage }) => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                {withImage && (<div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill sizes="100%" className={styles.image} />
                </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.travel}`}>
                        Travel
                    </span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jon Doe</span>
                        <span className={styles.date}> - 10.16.23</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (<div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" sizes="100%" fill className={styles.image} />
                </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.food}`}>
                        Food
                    </span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jon Doe</span>
                        <span className={styles.date}> - 10.16.23</span>
                    </div>
                </div>
            </Link>
            <Link href="/" className={styles.item}>
                {withImage && (
                    <div className={styles.imageContainer}>
                        <Image src="/p1.jpeg" alt="" sizes="100%" fill className={styles.image} />
                    </div>
                )}
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.tech}`}>
                        Tech
                    </span>
                    <h3 className={styles.postTitle}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.userName}>Jon Doe</span>
                        <span className={styles.date}> - 10.16.23</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPost
