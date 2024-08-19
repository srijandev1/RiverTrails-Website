import React, { useState, useRef } from "react";
import { closeB } from "../../../assets";

function GalleryP({ onPopup }) {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);

    // Reset the file input
    const dt = new DataTransfer();
    updatedImages.forEach((image) => dt.items.add(image.file));
    fileInputRef.current.files = dt.files;
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[25rem]  px-8 py-6 rounded-[15px]">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[1.3rem]">Add Photos</h1>
          <img
            onClick={onPopup}
            className="w-[1.5rem] cursor-pointer"
            src={closeB}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-1">
            <label className="text-[#00000089] text-[0.95rem]" htmlFor="upload">Select photos</label>
            <input
              type="file"
              id="upload"
              accept="image/*"
              onChange={handleImageUpload}
              multiple
              className="mb-4 border-black border-[1px] rounded-[5px] cursor-pointer"
              ref={fileInputRef}
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.url}
                  alt={`Uploaded ${index + 1}`}
                  className="w-[5rem] h-[4.5rem] rounded shadow-lg"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-2 right-2 bg-white shadow-md text-white rounded-[5px] p-1 hover:bg-white"
                >
                  <img className="w-[0.75rem]" src={closeB} alt="" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onPopup}
          className="w-full text-white bg-[#005EE6] p-3 mt-8 rounded-[5px]"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default GalleryP;
