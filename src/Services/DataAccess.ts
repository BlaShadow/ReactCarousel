import { Block } from "./Block";
import MockImages from './MockData';

const emptyArray = (n: number) => Array.from(new Array(n).keys());

export default class DataAccess {
  private static blockGenerator(): Block {
    const numberOfImages = Math.min(1, Math.round(Math.random() * 10));
    const images = emptyArray(numberOfImages).map(() => {
      const index = Math.round(Math.random() * MockImages.length - 1);

      return MockImages[index];
    });

    return {
      title: 'Title Block',
      images
    }
  }

  static fetchImages = (): Promise<Block[]> => {
    const numberOfBlocks = Math.min(30, Math.round(Math.random() * 100));
    const blocks = emptyArray(numberOfBlocks).map(() => DataAccess.blockGenerator())

    return Promise.resolve(blocks);
  }
}
