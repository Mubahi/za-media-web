import React, { useState } from "react";
import config from "./../services/config.json";
import ThumbnailPreviews from "./Thumb";
import axios from "axios";
import Divider from "./Divider";
// import MediaList from "./Med iaList";

const MediaFile = ({ onFilesUploaded, onImageRemove }) => {
  const [mediaSource, setMediaSource] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const { api_url } = config;

  const handleMediaTypeChange = (event) => {
    setMediaSource(event.target.value);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files); // Convert FileList to Array
    const allFiles = [...selectedFiles, ...newFiles]; // Combine old and new files
    setSelectedFiles(allFiles);
  };

  const handleImageRemove = (indexToRemove) => {
    const updatedFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedFiles(updatedFiles);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let file of selectedFiles) {
      // Loop through the files and append them
      formData.append("files[]", file); // Use "files[]" as the key
    }

    try {
      const { data } = await axios.post(`${api_url}/upload-images`, formData);
      if (data.code === 200) {
        const uploaded_files = data.uploadedImages.map((media) => ({
          file: media,
          source: mediaSource,
        }));
        onFilesUploaded(uploaded_files);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Divider />
      <hr />
      <div className="flex justify-center items-center">
        <label className="block cursor-pointer">
          <span className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            Select File
          </span>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            multiple
          />
        </label>
      </div>
      <div className="flex justify-center items-center">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>

      {/* Thumbnail Preview */}
      <ThumbnailPreviews
        selectedFiles={selectedFiles}
        onRemove={handleImageRemove}
      />

      {/* <MediaList
        MediaFiles={SelectedShop.shop_medias}
        onImageRemove={onShopImageRemove}
      /> */}
    </div>
  );
};

export default MediaFile;
