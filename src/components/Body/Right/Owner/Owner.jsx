import * as React from "react";
import S from "./Owner.module.scss";

const Owner = () => {
  return (
    <div className={S.body}>
      <h1 className={S.title}>Обо мне</h1>
      <p className={S.subtitle}>
        Меня зовут Артём, мне 29 лет. Я позитивный frontend-developer=) люблю
        писать приложения, которые будут помогать людям решать их трудности. Уже
        как 1.5 года погружаюсь в дебри разработки и получаю от этого
        колоссальное удовольствие!
      </p>
    </div>
  );
};

export default Owner;
