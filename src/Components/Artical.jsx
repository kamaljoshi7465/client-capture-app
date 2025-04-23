import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
import comp1 from "../Assets/Artical/camp1.jpeg";
import comp2 from "../Assets/Artical/camp2.jpeg";
import comp3 from "../Assets/Artical/camp3.jpeg";

const images = [
  {
    original: comp1,
  },
  {
    original: comp2,
  },
  {
    original: comp3,
  },
];

function Artical() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center text-orange-600 mb-6">
        Awareness Campaign for One Nation, One Election <br /> Cross Country Race
      </h1>

      <div className="rounded-lg shadow-lg overflow-hidden">
        <div className="max-h-[650px] flex justify-center items-center">
          <ReactImageGallery
            items={images}
            showFullscreenButton={true}
            showPlayButton={false}
            showThumbnails={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Artical;
