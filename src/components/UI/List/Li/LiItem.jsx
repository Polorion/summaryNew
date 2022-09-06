import * as React from "react";
import S from "../List.module.scss";
import { useNavigate } from "react-router-dom";

const LiItem = (props) => {
  const history = useNavigate();
  const handler = () => {
    if (props.link) {
      history(props.link);
    }
  };
  return (
    <li onClick={handler} className={`${S.item} ${props.link && S.pointer}`}>
      {<props.img width={30} height={30} />}{" "}
      <span className={props.link && S.anim}>{props.text}</span>
    </li>
  );
};

export default LiItem;
