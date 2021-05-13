import React from "react";
import { baseUrl } from "../../constants";

const LocalImage = ({
  src, alt,
}: {
  src: string,
  alt: string,
}) => <img src={`${baseUrl}/${src}`} alt={alt} />

export default LocalImage;
