import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPost'

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPosts withImage={false} />
            <h2 className={styles.subtitle}>Discovered by topic</h2>
            <h1 className={styles.title}>Categories</h1>
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
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <div className={styles.items}>
                <Link href="/" className={styles.item}>
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
            <h2 className={styles.subtitle}>Choosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
            <MenuPosts withImage={true} />
        </div>
    )
}

export default Menu