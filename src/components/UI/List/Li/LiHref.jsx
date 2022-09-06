import * as React from "react";
import S from "../List.module.scss";

const LiHref = (props) => {
  return (
    <li className={`${S.item}  ${S.hover}`}>
      <a href={props.link}>
        {<props.img width={30} height={30} />}{" "}
        <span className={props.link}>{props.text}</span>
      </a>
    </li>
  );
};

export default LiHref;
