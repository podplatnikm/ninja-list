import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css"

export default function Home() {
	return (
		<div>
			<Head>
				<title>Ninja list | Home</title>
				<meta name="keywords" content="ninjas"/>
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>Lorem ipsum</p>
				<p className={styles.text}>Lorem ipsum</p>
				<p className={styles.text}>Lorem ipsum</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</div>
	)
}
