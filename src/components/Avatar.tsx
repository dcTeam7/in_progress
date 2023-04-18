import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar = ({ src, alt }: AvatarProps) => {
  return <img src={src} alt={alt} style={{borderRadius: "50%"}}/>;
};

export default Avatar;
