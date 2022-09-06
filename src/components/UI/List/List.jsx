import * as React from "react";
import S from "./List.module.scss";

const List = ({ children, ...props }) => {
  return (
    <ul className={S.ul}>
      <li className={S.nameListItem}>
        <p className={S.nameList}>{props.name}</p>{" "}
        <span className={S.nameListZero}></span>
      </li>
      <div className={`${props.flex && S.flex} ${props.stec && S.stec}`}>
        {children}
      </div>
    </ul>
  );
};

export default List;
