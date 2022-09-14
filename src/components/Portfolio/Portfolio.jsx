import * as React from "react";
import S from "./Portfolio.module.scss";
import ItemPortfolio from "./Item/ItemPortfolio";
import ReactDOM from "react-dom";
import pomodoro from "../../assets/img/pomodoro.png";
import todo from "../../assets/img/todo.png";
import timer from "../../assets/img/timer.png";
import reddit from "../../assets/img/reddit.png";
import verstka from "../../assets/img/verstkatest.png";
import todoMobx from "../../assets/img/todoMobX.png";
import js from "../../assets/img/js.png";
import { useNavigate } from "react-router-dom";
import GeneratorRandomString from "../../utils/GeneratorRandomString";

const Portfolio = () => {
  const node = document.querySelector("#modal");
  const history = useNavigate();
  if (!node) {
    return null;
  }
  const test = [
    {
      title: "Reddit",
      info: "Зеркало Reddit лучшие посты React-Redux-SSR",
      img: reddit,
      url: "https://mirror-reddit-owner.herokuapp.com/post",
    },
    {
      title: "Таймер Помодоро",
      info: "Таймер помогает контролировать рабочее время и не забывает напомнить когда надо отдохнуть",
      img: pomodoro,
      url: "https://pomodoro-hazel.vercel.app/",
    },
    {
      title: "Тестовое задание адаптивная верстка",
      info: "Верстка сайта на React и элементами адаптива и навигации",
      img: verstka,
      url: "https://will-skill-test-jade.vercel.app/",
    },
    {
      title: "Тестовое задание Todo React+MobX+TS+адаптив",
      info: "Todo на React+MobX+TS+адаптив",
      img: todoMobx,
      url: "https://todo-type-script-mob-x.vercel.app/",
    },
    {
      title: "Таймер",
      info: "Таймер помогает засекать время так же имеет функцию отсчета круга и статистики между каждым кругом",
      img: timer,
      url: "https://timer-eight-teal.vercel.app/",
    },
    {
      title: "ToDo",
      info: "Приложение помогает расписать свой трудовой день",
      img: todo,
      url: "https://todo-react-ten-vert.vercel.app/",
    },
    {
      title: "JavaScript",
      info: "4 мини программки на Js (игра, драг-дроп, слайдер,сверкающие кубики)",
      img: js,
      url: "https://polorion.github.io/JStesting/",
    },
  ];
  const handler = () => {
    history("/");
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  return ReactDOM.createPortal(
    <div onClick={handler} className={S.portfolio}>
      <div onClick={stopPropagation} className={S.body}>
        {test.map((el) => {
          return (
            <ItemPortfolio
              key={GeneratorRandomString()}
              title={el.title}
              info={el.info}
              img={el.img}
              url={el.url}
            />
          );
        })}
      </div>
    </div>,
    node
  );
};

export default Portfolio;
