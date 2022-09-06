import * as React from "react";
import S from "../Portfolio.module.scss";
import { useNavigate } from "react-router-dom";

const ItemPortfolio = (props) => {
  return (
    <div className={S.item}>
      <a target={"_blank"} href={props.url} className={S.bodyitem}>
        <h2 className={S.title}>{props.title}</h2>
        <div className={S.imgBody}>
          <img src={props.img} alt="" />
        </div>
        <p className={S.info}>{props.info}</p>
      </a>
    </div>
  );
};

export default ItemPortfolio;
