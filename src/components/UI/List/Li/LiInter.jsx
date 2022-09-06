import * as React from "react";
import S from "../List.module.scss";

const LiInter = (props) => {
  return (
    <li className={`${S.item}`}>
      {<props.img width={30} height={30} />}{" "}
      <span className={props.link}>{props.text}</span>
    </li>
  );
};

export default LiInter;
