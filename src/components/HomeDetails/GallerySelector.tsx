import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Picture } from "../../hooks/useHouse";
interface Props {
  picture: Picture[];
}

const GallerySelector = ({ picture }: Props) => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  picture.map((p) =>
    images.push({ original: p.picture, thumbnail: p.picture })
  );
  return (
    <ImageGallery
      infinite={false}
      showNav={false}
      showPlayButton={false}
      items={images}
      
    />
  );
};

export default GallerySelector;
