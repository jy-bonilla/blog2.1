import React from 'react'
import styles from "./cardlist.module.css"
import Pagination from "../pagination/Pagination"
import Card from "../card/Card"
import Image from 'next/image'


const CardList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.post}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    )
}

export default CardList
