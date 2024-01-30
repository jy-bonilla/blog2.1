import style from './singlePage.module.css'
import Menu from "@/components/menu/Menu"
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const Singlepage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={textContainer}>
                    <h1> Lorem ipsum dolor sit amet</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Jon Doe</span>
                            <span className={styles.date}>10.23.2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates quo iusto molestiae mollitia nam sapiente et
                            quisquam aliquid illum distinctio, ullam earum,
                            ex expedita fugit natus esse commodi perspiciatis. Cumque?
                        </p>
                        <h2>Header</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates quo iusto molestiae mollitia nam sapiente et
                            quisquam aliquid illum distinctio, ullam earum,
                            ex expedita fugit natus esse commodi perspiciatis. Cumque?
                        </p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Singlepage
