'use client'
import { Button } from "@nextui-org/react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App({children} : {children : React.ReactNode}) {
  const handle = useFullScreenHandle();

  return (
    <>
      <Button onClick={handle.enter}>
        Fullscreen
      </Button>

      <FullScreen handle={handle}>
        {children}
      </FullScreen>
    </>
  );
}

export default App;