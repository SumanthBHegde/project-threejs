import React from "react";
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Ask Ai"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking Ai...."
            customStyles="text-xs "
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="Ai Logo"
              customStyles="text-xs "
              handleClick={() => handleSubmit("logo")}
            />

            <CustomButton
              type="filled"
              title="Ai Full"
              customStyles="text-xs "
              handleClick={() => handleSubmit("full")}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
