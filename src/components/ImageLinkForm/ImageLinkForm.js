import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = props => {
  return (
    <div>
      <p className="f3 center white">
        {"This super AI will detect faces in your pictures."}
      </p>
      <div>
        <div className=" form pa4 br3 shadow-5 center">
          <input className="f4 pa2 w-70 center" type="tex" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-dark-blue">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
