import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = props => {
  return (
    <div>
      <div>
        <div className=" form pa4 br3 shadow-5 center">
          <input
            className="f4 pa2 w-70 center"
            type="tex"
            placeholder="Put an image url to get started."
          />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-dark-blue">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
