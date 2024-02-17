import React from 'react';
import styles from "./featured.module.css";
import Image from 'next/image';

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hola! </b> Check out my personal tech blog.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}> Lorem ipsum dolor sit, amet consectetur.</h1>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consequatur voluptatem quisquam
                        natus amet numquam odio fuga atque,
                        dolorum suscipit! Obcaecati nisi commodi beatae sunt odit minus ratione ipsum! In.
                    </p>
                    <button className={styles.button}> Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
