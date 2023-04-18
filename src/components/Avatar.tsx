import React from "react";

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar = (props: AvatarProps) => {
  return <img src={props.src} alt={props.alt} style={{borderRadius: "50%"}}/>;
};

export default Avatar;
