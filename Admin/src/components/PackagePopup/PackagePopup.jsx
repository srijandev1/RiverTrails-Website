import React, { useState, useRef } from "react";
import { closeB } from "../../assets";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

function PackagePopup({ onClose }) {
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
  // highlights
  const [inputs, setInputs] = useState([{ id: Date.now(), value: "" }]);

  // Function to handle the change in input value
  const handleInputChange = (id, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  // Function to add a new input field
  const addInputField = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  // Function to remove an input field
  const removeInputField = (id) => {
    setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[70vw] h-[85vh] px-8 py-6 rounded-[15px]">
        {/* heading */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[1.3rem]">Add Packages</h1>
          <img
            onClick={onClose}
            className="w-[1.5rem] cursor-pointer"
            src={closeB}
            alt=""
          />
        </div>
        <div className="h-[70vh] overflow-auto">
          {/* content */}
          <div className="flex justify-between mb-8">
            <label className="flex flex-col w-[25rem]" htmlFor="">
              Title:
              <input
                className="border-black border-[1.5px] px-3 py-2 rounded-[5px]"
                placeholder="eg. Time-crunched angler"
                type="text"
              />
            </label>
            <label className="flex flex-col w-[7rem]" htmlFor="">
              Duration:
              <input
                className="border-black border-[1.5px] px-3 py-2 rounded-[5px]"
                placeholder="eg. 7"
                type="text"
              />
            </label>
            <label className="flex flex-col w-[7rem]" htmlFor="">
              Nights:
              <input
                className="border-black border-[1.5px] px-3 py-2 rounded-[5px]"
                placeholder="eg. 8"
                type="text"
              />
            </label>
            <label className="flex flex-col w-[7rem]" htmlFor="">
              Days:
              <input
                className="border-black border-[1.5px] px-3 py-2 rounded-[5px]"
                placeholder="eg. 9"
                type="text"
              />
            </label>
            <label className="flex flex-col w-[7rem]" htmlFor="">
              Ratings:
              <input
                className="border-black border-[1.5px] px-3 py-2 rounded-[5px]"
                placeholder="eg. 4.5"
                type="text"
              />
            </label>
          </div>
          {/* gallery upload */}
          <div className="flex flex-col mb-6">
            <div className="flex flex-col">
              <label className="" htmlFor="upload">
                Select photos
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="file"
                  id="upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  multiple
                  className="border-black border-[1px] rounded-[5px] cursor-pointer"
                  ref={fileInputRef}
                />
                <p>Max photos: 5</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.url}
                    alt={`Uploaded ${index + 1}`}
                    className="w-[5rem] h-[4.5rem] rounded shadow-md"
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
          {/* highlights */}
          <div className="mb-6">
            <label className="flex flex-col" htmlFor="">
              Highlights:
              {inputs.map((input, index) => (
                <div key={input.id} className="flex items-center gap-3 my-2">
                  <input
                    className="border-black border-[1.5px] px-3 py-2 rounded-[5px] w-[25rem]"
                    placeholder="e.g., Freshly Prepared Meals"
                    type="text"
                    value={input.value}
                    onChange={(e) =>
                      handleInputChange(input.id, e.target.value)
                    }
                  />
                  {index === 0 ? (
                    <button
                      className="shadow-md px-3 py-2 text-[1.75rem] hover:text-white hover:bg-[#005EE6] duration-300 bg-white rounded"
                      onClick={addInputField}
                      type="button"
                    >
                      <IoMdAdd />
                    </button>
                  ) : (
                    <button
                      className="shadow-md px-3 py-2 text-[1.75rem] text-red-600 hover:bg-red-500 hover:text-white duration-300 bg-white rounded"
                      onClick={() => removeInputField(input.id)}
                      type="button"
                    >
                      <IoMdRemove />
                    </button>
                  )}
                </div>
              ))}
            </label>
          </div>
          {/* description */}
          <div>
            <label className="flex flex-col w-[full]" htmlFor="">
              Description:
              <textarea
                placeholder="Enter your package description here..."
                className="border-black border-[1.5px] px-3 py-2 rounded-[5px] h-[6rem]"
                name=""
                id=""
              ></textarea>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackagePopup;
