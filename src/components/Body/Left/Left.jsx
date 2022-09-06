import * as React from "react";
import Header from "./Header/Header";
import List from "../../UI/List/List";
import S from "./Left.module.scss";
import { ReactComponent as Cake } from "../../../assets/img/new/cake.svg";
import { ReactComponent as Male } from "../../../assets/img/new/male.svg";
import { ReactComponent as Vk } from "../../../assets/img/new/vk.svg";
import { ReactComponent as Tg } from "../../../assets/img/new/tg.svg";
import { ReactComponent as Phone } from "../../../assets/img/new/phone.svg";
import { ReactComponent as Message } from "../../../assets/img/new/message.svg";
import { ReactComponent as Port } from "../../../assets/img/new/port.svg";
import { ReactComponent as Pointer } from "../../../assets/img/new/pointer.svg";
import { ReactComponent as Wood } from "../../../assets/img/new/wood.svg";
import { ReactComponent as Film } from "../../../assets/img/new/film.svg";
import { ReactComponent as Cook } from "../../../assets/img/new/cook.svg";
import { ReactComponent as Bag } from "../../../assets/img/new/bag.svg";
import { ReactComponent as Con } from "../../../assets/img/new/con.svg";
import { ReactComponent as Book } from "../../../assets/img/new/book.svg";
import LiHref from "../../UI/List/Li/LiHref";
import LiItem from "../../UI/List/Li/LiItem";
import LiInter from "../../UI/List/Li/LiInter";
import GeneratorRandomString from "../../../utils/GeneratorRandomString";

const Left = () => {
  const profile = [
    { text: "01/02/1993", img: Cake },
    { text: "Мужской", img: Male },
    { text: "Санкт-Петербург", img: Pointer },
    { text: "Мое Портфолио", img: Port, link: "port" },
  ];
  const inter = [
    { text: "Люблю Лыжи", img: Wood },
    { text: "Обажаю Фильмы", img: Film },
    { text: "Готовлю", img: Cook },
    { text: "Походы", img: Bag },
    { text: "Катаюсь на коньках", img: Con },
    { text: "Люблю читать", img: Book },
  ];
  const contacts = [
    {
      text: "+ 7 911 829 77 63",
      img: Phone,
      link: "tel:+79118297763",
      a: true,
    },
    {
      text: "Noirolop@mail.ru",
      img: Message,
      link: "mailto:noirolop@mail.ru",
      a: true,
    },
    { text: "Vkontakte", img: Vk, link: "https://vk.com/id2043446", a: true },
    { text: "Telegrem", img: Tg, link: "https://t.me/PoloRioN", a: true },
  ];
  return (
    <div className={S.body}>
      <Header />
      <List name={"Профиль"}>
        {profile.map((el) => {
          return (
            <LiItem
              key={GeneratorRandomString()}
              img={el.img}
              text={el.text}
              link={el.link}
            />
          );
        })}
      </List>
      <List name={"Контакты"}>
        {contacts.map((el) => {
          return (
            <LiHref
              key={GeneratorRandomString()}
              img={el.img}
              text={el.text}
              link={el.link}
            />
          );
        })}
      </List>{" "}
      <List name={"Улечения"} flex={true}>
        {inter.map((el) => {
          return (
            <LiInter
              key={GeneratorRandomString()}
              img={el.img}
              text={el.text}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Left;
