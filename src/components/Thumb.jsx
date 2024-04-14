import React, { useEffect, useState } from "react";
// import { XCircleFill } from "react-bootstrap-icons";

const ThumbnailPreviews = ({ selectedFiles, onRemove }) => {
  const [previewUrls, setPreviewUrls] = useState([]);

  useEffect(() => {
    // Create object URLs for the selected files
    const newPreviewUrls = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviewUrls(newPreviewUrls);

    // Clean up: Revoke the object URL to avoid memory leaks
    return () => {
      newPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [selectedFiles]);

  const handleRemove = (index) => {
    // Revoke URL for the removed item to prevent memory leaks
    URL.revokeObjectURL(previewUrls[index]);
    onRemove(index); // Call the passed onRemove function with the index of the file to remove
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center mt-2">
      {previewUrls.map((url, index) => (
        <div key={index} className="relative w-32">
          <button
            onClick={() => handleRemove(index)}
            className="absolute top-0 right-0 p-1 text-danger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-square-fill text-red-700 hover:text-red-600 transition-colors duration-700"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
            </svg>
          </button>
          <img
            className="h-24 w-24 rounded-full border-2 border-primary object-cover"
            alt="Preview"
            src={url}
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailPreviews;
