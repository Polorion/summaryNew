import * as React from "react";
import S from "../../../Body/Right/Right.module.scss";
import GeneratorRandomString from "../../../../utils/GeneratorRandomString";

const LiExp = (props) => {
  return (
    <div className={S.sectionExp}>
      <ul className={S.listFirst}>
        {props.array.map((el) => {
          return (
            <li key={GeneratorRandomString()}>
              <div className={S.ali}>
                {el.year} <div className={S.dotBig}></div>{" "}
              </div>
              <ul>
                {el.prog.map((e) => {
                  return (
                    <li key={GeneratorRandomString()}>
                      <div className={S.dotSmall}></div>
                      {e}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
      <div className={S.info}>
        Студент двухгодового курса Frontend-разработчик, апрель 2021 - по
        настоящее время. На данный момент я активно занимаюсь изучением
        бибилотеки React. Получил диплом после прохождения курса по верстке и
        закончил курс по JS,React. Умею: создавать SPA приложения, верстать
        сайты и лендинги по макетам , Создавать страницы комфортные для
        просмотра и взаимодействия на любом экране и устройстве, в любом
        браузере, не забывая и о IE11, Взаимодействовать с различными API,
        используя GET и POST запросы, Подключать дополнительные библиотеки, css
        и js файлов, npm-пакетов, Соблюдать кодстайл, писать понятный и легкий
        для прочтения код.
      </div>
    </div>
  );
};

export default LiExp;
