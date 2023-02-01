import Header from "./Header";
import Head from "next/head";
import styles from "../styles/Layout.module.css";

export default function App({ children, title }) {

  return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name='author' content='fpesce27' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <Header />
                <main className={styles.container}>
                    {children}
                </main>
            </div>
        </>
    );
}