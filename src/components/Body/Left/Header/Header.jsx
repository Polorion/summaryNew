import * as React from "react";
import S from "./Header.module.scss";
import avatar from "../../../../assets/img/foto.webp";
const Header = () => {
  return (
    <div className={S.body}>
      <div className={S.avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={S.name}>Лопатков Артём</div>
      <div className={S.profesion}> Frontend-developer</div>
    </div>
  );
};

export default Header;
