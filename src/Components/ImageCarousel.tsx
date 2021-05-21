import React, { useState, useRef } from "react";
import { Block } from "../Services/Block";
import BlockImage from "./BlockImage";

interface ImageCarouselProps {
  blocks: Block[];
}

const imageCarouselContainerStyle: React.CSSProperties = {
  paddingRight: 10,
  paddingLeft: 10,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};

const imageCarouselStyle: React.CSSProperties = {
  overflow: 'scroll',
  whiteSpace: 'nowrap',
  scrollbarWidth: 'none'
};

export const ImageCarousel = ({ blocks }: ImageCarouselProps) => {
  const carouselElement = useRef<HTMLDivElement>(null);
  const [sliderPage, setSliderPage] = useState<number>(0);

  const imagePerPage = 4;
  const initialImageIndex = sliderPage * imagePerPage;
  const finalImageIndex = initialImageIndex + imagePerPage;

  const nextButtonEnabled = (blocks.length -1) > finalImageIndex;
  const prevButtonEnabled = initialImageIndex > 0;

  const moveTo = (page: number) => {
    setSliderPage(page);

    const carouselWidth = carouselElement.current?.offsetWidth ?? 0
    const pageWidth = carouselWidth / imagePerPage;
    const targetScrollPosition = page * pageWidth * imagePerPage;

    carouselElement.current?.scrollTo({
      behavior: 'smooth',
      left: targetScrollPosition
    })
  }

  return (
    <div style={imageCarouselContainerStyle}>
      <button disabled={!prevButtonEnabled} onClick={() => moveTo(sliderPage - 1)}>Prev</button>
      <div ref={carouselElement} style={imageCarouselStyle}>
        {blocks.map((item, index) => (
          <BlockImage block={item} index={index} key={index} />
        ))}
      </div>
      <button disabled={!nextButtonEnabled} onClick={() => moveTo(sliderPage + 1)}>Next</button>
    </div>
  );
}