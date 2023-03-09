'use client'
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Carrousel from "./Carrousel";
import Cascade from "./Cascade";
import styles from './styles/cascade.module.css'

function App({children, images} : {children : React.ReactNode, images : string[]}) {
  const handle = useFullScreenHandle();
  const [showCascade, setShowCascade] = useState(false)
  console.log(images);
  return (
    <>
      <Button onClick={handle.enter}>
        Pantalla Completa
      </Button>

      <Button onClick={() => setShowCascade(!showCascade)}> 
        {showCascade ? 'Ver en carrusel' : 'Ver en cascada'} 
      </Button>

      <FullScreen handle={handle} className={showCascade ? styles.cascadeMode : ''}>
        {showCascade ? <Cascade images={images} /> : <Carrousel images={images} />}
        {children}
      </FullScreen>
    </>
  );
}

export default App;