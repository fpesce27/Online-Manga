/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout";
import { searchMangas } from "../../api/functions";
import { Image, Loading } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Manga.module.css";

export async function getServerSideProps(context) {
    let { q } = context.query;
    let results = await searchMangas(q);

  return {
    props: {
      q,
      results
    },
  };
}

export default function index({ q, results }) {


  return (
    <Layout>
      <h1>Results for: {q}</h1>
      <div className={styles.resultsContainer}>

        {results?.map((manga, index) => (
          <Link key={index} href={`/manga/read/${manga.mal_id}`}>
            <div className={styles.manga}>
              <Image
                src={manga.images.jpg.image_url}
                alt={manga.title}
                width={300}
                height={300}
                showSkeleton
                css={{ borderRadius: "25px" }}
                objectFit="cover"
              />
              <div className={styles.mangaInfo}>
                <h3>{manga.title}</h3>
                <p>{manga.synopsis}</p>
              </div>
            </div>
          </Link>
        ))}

        {results?.length === 0 && (
            <h4>No results found</h4>
        )}
      </div>
    </Layout>
  );
}
