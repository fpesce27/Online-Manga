import { Image } from "@nextui-org/react";

export function ShowMangaPanel({ image } : {image : string}) {
  return (
    
      <Image src={image} alt="No image" width="100%" height="100vh" />
   
  );
}
