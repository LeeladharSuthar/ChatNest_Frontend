import React from "react";
import { transformImage } from "../../lib/features.js";
import { FileOpen } from "@mui/icons-material";
function RenderAttachment({ file, url }) {
  switch (file) {
    case "video":
      return <video src={url} preload="none" width={"200px"} controls />;

    case "image":
      return (
        <img
          src={transformImage(url, 200)}
          alt="Error while displaying"
          width={"200px"}
          height={"150px"}
          style={{
            objectFit: "contain",
          }}
        />
      );
    case "audio":
      return <audio src={url} preload="none" width={"200px"} controls />;

    default:
      return <FileOpen />;
  }
}

export default RenderAttachment;
