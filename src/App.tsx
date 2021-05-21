import React, { useEffect, useState } from "react";
import { Block } from "./Services/Block";
import { ImageCarousel } from "./Components/ImageCarousel";
import DataAccess from "./Services/DataAccess";

export default function App() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    DataAccess.fetchImages()
      .then((blocks: Block[]) => {
        setBlocks(blocks);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <ImageCarousel blocks={blocks} />
    </div>
  );
}
