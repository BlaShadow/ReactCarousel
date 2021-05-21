import React, { memo } from "react";
import { Block } from "../Services/Block";

interface CatImageProps {
  block: Block;
  index: number;
}

const blockContainerStyle: React.CSSProperties = {
  width: '24%',
  height: 300,
  margin: 5,
  display: 'inline-block',
  overflow: 'hidden',
  borderStyle: 'solid',
  borderWidth: 3,
  borderColor: '#333',
};

const blockImageStyle: React.CSSProperties = {
  objectFit: "fill"
};

export const BlockImage = ({ block, index }: CatImageProps) => {
  const randomIndexImage = Math.round(Math.random() * block.images.length);
  const url = block.images[randomIndexImage];

  return (
    <div style={blockContainerStyle}>
      <img src={url} loading={'lazy'} alt={`item ${index}`} style={blockImageStyle} />
    </div>
  );
};
  
export default memo(BlockImage);