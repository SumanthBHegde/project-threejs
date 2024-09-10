import React from "react";

import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-col flex-1">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          <span className="text-gray-300">Upload File</span>
        </label>
        <p className="mt-2 text-xs text-gray-300 truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        <CustomButton
          type="outline"
          title="logo"
          handleClick={() => readFile("logo")}
          customStyles="text-s"
        />
        <CustomButton
          type="filled"
          title="full"
          handleClick={() => readFile("full")}
          customStyles="text-s"
        />
      </div>
    </div>
  );
};

export default FilePicker;
