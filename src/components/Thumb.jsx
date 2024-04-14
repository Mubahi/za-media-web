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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center mt-2">
      {previewUrls.map((url, index) => (
        <div key={index} className="relative">
          <button
            onClick={() => handleRemove(index)}
            className="absolute top-0 right-0 p-1 text-danger"
          >
            <p>X</p>
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
