import styles from "@/styles/LoadingScreen.module.css";
import { theme } from "@nextui-org/react";
import React from "react";

export default function LoadingScreen() {


  const RandomLoadingPhrases = [
    "Unleashing the power of manga magic!",
    "Lost in the world of manga, just a moment please!",
    "Bringing the excitement of anime to life!",
    "Entering the mystical realm of manga!",
    "Transforming into the ultimate manga fan!",
    "Journey through the manga universe, hold tight!",
    "Saving the world, one manga chapter at a time!",
    "Soaring through the sky with manga heroes!",
    "Fulfilling the destiny of a true manga fan!",
    "The adventure begins, are you ready for manga magic?",
  ];

  const selectRandomPhrase = () => {
    return RandomLoadingPhrases[
      Math.floor(Math.random() * RandomLoadingPhrases.length)
    ];
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector("p").innerHTML = selectRandomPhrase();
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className={styles.container}
      style={{ background: theme.colors.accents0 }}
    >
      <div className={styles.book}>
        <div className={styles.inner}>
          <div
            className={styles.left}
            style={{ background: theme.colors.accents9 }}
          ></div>
          <div
            className={styles.middle}
            style={{ borderColor: theme.colors.accents9 }}
          ></div>
          <div
            className={styles.right}
            style={{ background: theme.colors.accents9 }}
          ></div>
        </div>
        <ul>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
          <li style={{ background: theme.colors.accents9 }}></li>
        </ul>
        <div className={styles.text}>
          <p style={{ color: theme.colors.accents9 }}>{selectRandomPhrase()}</p>
        </div>
      </div>

    </div>
  );
}
