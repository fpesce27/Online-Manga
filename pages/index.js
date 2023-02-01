import { Button, Grid, Text, theme } from "@nextui-org/react";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home - My Anime List">
      <h1 style={{ marginBottom: 25 }}>Welcome to My Anime List!</h1>
      <Grid.Container gap={2} justify='center'>
        <Grid md={3} sm={3} xs={12}>
          <Box href="/anime" title="Anime" description="Check out the latest anime releases!" color='rgb(48, 80, 200)' image="url('/anime-hover.png')" />
        </Grid>
        <Grid md={3} sm={3} xs={12}>
          <Box href="/manga" title="Manga" description="Check out the latest manga releases!" color='rgb(200, 48, 48)' image="url('/manga-hover.png')" />
        </Grid>
        <Grid md={3} sm={3} xs={12}>
          <Box href="/clubs" title="Clubs" description="Join a club and meet other anime fans!" color='rgb(48, 200, 48)' image="url('/clubs-hover.png')" />
        </Grid>
        <Grid md={3} sm={3} xs={12}>
          <Box href="/random" title="Random" description="Get a random anime or manga!" color='rgb(200, 200, 48)' image="url('/random-hover.png')" />
        </Grid>
      </Grid.Container>
    </Layout>
  );
}

const Box = (props) => {
  return (
    <Link href={props.href} className={styles.box} style={{ backgroundColor:props.color, backgroundImage:props.image }}>
      <div className={styles.boxText}>
        <Text size={60}>{props.title}</Text>
        <Text>{props.description}</Text>
      </div>
    </Link>
  );
}
















{/* <div class={styles.boxContainer}>
        <Link class={styles.animeBox} href="/anime">
          <div className={styles.boxText}>
            <Text size={60}>Anime</Text>
            <Text>Check out the latest anime releases!</Text>
          </div>
        </Link>
        <Link class={styles.mangaBox} href="/manga">
          <div className={styles.boxText}>
            <Text size={60}>Manga</Text>
            <Text>Check out the latest manga releases!</Text>
          </div>
        </Link>
        <Link class={styles.clubsBox} href="/clubs">
          <div className={styles.boxText}>
            <Text size={60}>Clubs</Text>
            <Text>Come join our community!</Text>
          </div>
        </Link>
        <Link class={styles.randomBox} href="/random">
          <div className={styles.boxText}>
            <Text size={60}>Random</Text>
            <Text>Get a random anime or manga!</Text>
          </div>
        </Link>
      </div> */}