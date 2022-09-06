import * as React from "react";
import S from "./LiSkill.module.scss";

const LiSkill = (props) => {
  return (
    <li className={S.libod}>
      <div className={S.body}>
        <div className={S.img}>{<props.img />}</div>
        <div className={S.progress}>
          {props.text}
          <div className={S.lineBody}>
            <div className={S.line}>
              <div
                style={{ width: `${props.progres}%` }}
                className={S.row}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default LiSkill;
