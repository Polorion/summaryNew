import * as React from "react";
import S from "./Right.module.scss";
import Owner from "./Owner/Owner";
import List from "../../UI/List/List";
import LiExp from "../../UI/List/Li/LiExp";
import LiStec from "../../UI/List/Li/LiStec";
import { ReactComponent as Redux } from "../../../assets/img/new/redux.svg";
import { ReactComponent as ReactIcon } from "../../../assets/img/new/react.svg";
import { ReactComponent as Js } from "../../../assets/img/new/JS.svg";
import { ReactComponent as Api } from "../../../assets/img/new/api.svg";
import { ReactComponent as Bem } from "../../../assets/img/new/bem.svg";
import { ReactComponent as Css } from "../../../assets/img/new/css.svg";
import { ReactComponent as Flux } from "../../../assets/img/new/flux.svg";
import { ReactComponent as Git } from "../../../assets/img/new/git.svg";
import { ReactComponent as Html } from "../../../assets/img/new/html.svg";
import { ReactComponent as Hyk } from "../../../assets/img/new/hyk.svg";
import { ReactComponent as Scss } from "../../../assets/img/new/scss.svg";
import { ReactComponent as Token } from "../../../assets/img/new/token.svg";
import { ReactComponent as Ts } from "../../../assets/img/new/ts.svg";
import { ReactComponent as Webpack } from "../../../assets/img/new/WebPack.svg";
import { ReactComponent as MobX } from "../../../assets/img/new/mobx.svg";
import { ReactComponent as Saga } from "../../../assets/img/new/reduxSaga.svg";
import { ReactComponent as Thunk } from "../../../assets/img/new/thunk.svg";
import { ReactComponent as Figma } from "../../../assets/img/new/figma.svg";
import LiSkill from "../../UI/List/Li/LiSkill";
import GeneratorRandomString from "../../../utils/GeneratorRandomString";
const Right = () => {
  const exp = [
    {
      year: "2012",
      prog: ['Повар Хц "две палочки" '],
    },
    {
      year: "2014",
      prog: ['Повар Гц "две палочки" '],
    },
    {
      year: "2015",
      prog: ['Повар Сушист "две палочки"', 'Повар Гц "Graf-in"'],
    },
    {
      year: "2016",
      prog: ['Сушеф "две палочки" '],
    },
    {
      year: "2019",
      prog: ['Шеф-повар "Marmabar" '],
    },
    {
      year: "2021",
      prog: [
        "Начал изучение от Skillbox",
        "HTML",
        "CSS",
        "Figma",
        "JS",
        "Rest-Api",
      ],
    },
    {
      year: "2022",
      prog: [
        "React",
        "Hooks",
        "HOC",
        "SSR",
        "WebPack",
        "React-Router",
        "Redux",
        "Portal",
      ],
    },
  ];
  const stec = [
    { text: "Redux", img: Redux },
    { text: "React", img: ReactIcon },
    { text: "JavaScript", img: Js },
    { text: "Figma", img: Figma },
  ];
  const skills = [
    { text: "React", progres: "65", img: ReactIcon },
    { text: "Redux", progres: "90", img: Redux },
    { text: "JavaScript", progres: "70", img: Js },
    { text: "TypeScript", progres: "30", img: Ts },
    { text: "CSS", progres: "80", img: Css },
    { text: "HTML", progres: "90", img: Html },
    { text: "SCSS", progres: "50", img: Scss },
    { text: "RestApi", progres: "90", img: Api },
    { text: "MobX", progres: "60", img: MobX },
    { text: "Redux-Saga", progres: "70", img: Saga },
    { text: "Redux-Thunk", progres: "90", img: Thunk },
    { text: "BEM", progres: "80", img: Bem },
    { text: "WebPack", progres: "35", img: Webpack },
    { text: "Flux", progres: "70", img: Flux },
    { text: "GIT", progres: "60", img: Git },
    { text: "Hooks", progres: "100", img: Hyk },
    { text: "JWT-Token", progres: "60", img: Token },
  ];
  return (
    <div className={S.body}>
      <Owner />
      <List name={"Опыт Работы"} stec={true}>
        <LiExp array={exp} />
      </List>
      <List name={"Стек"} flex={true}>
        {stec.map((el) => {
          return (
            <LiStec key={GeneratorRandomString()} img={el.img} text={el.text} />
          );
        })}
      </List>
      <List name={"Умения"} flex={true}>
        {skills.map((el) => {
          return (
            <LiSkill
              key={GeneratorRandomString()}
              img={el.img}
              text={el.text}
              progres={el.progres}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Right;
