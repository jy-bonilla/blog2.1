import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>Culture</span>
                </div>
                <Link href="/">
                    <h1>TITLE TEST</h1>
                </Link>

                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore dolor numquam blanditiis iusto sapiente beatae modi qui,
                    repudiandae, sequi voluptate dolorum nemo ullam?
                    Excepturi nisi, unde voluptates eius accusamus iusto!
                </p>
                <Link href="/" className={styles.link}> Read More</Link>
            </div >
        </div>
    )
}

export default Card;