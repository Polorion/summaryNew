import * as React from "react";
import S from "./Project.module.scss";
import img from "../../../assets/img/pomodoro.png";

const Project = (props) => {
  return (
    <div className={S.block}>
      <a href={props.url} target={"_blank"} className={S.body}>
        <h2 className={S.title}>{props.title}</h2>
        <div className={S.imgBlock}>
          <img src={props.img} alt="" />
        </div>

        <div className={S.text}>{props.text}</div>
      </a>
    </div>
  );
};

export default Project;
