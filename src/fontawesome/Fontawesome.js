import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

const Fontawesome = (icon) => {
  console.log(faCoffee);
  return <FontAwesomeIcon icon={icon.icon}></FontAwesomeIcon>;
};

export default Fontawesome;
