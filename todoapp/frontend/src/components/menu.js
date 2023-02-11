import React from "react";


const Menu = () => {

    return (
        <menu className="menu">
          <li><a href="#">Главная</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Контакты</a>
            <ul>
              <li><a href="#">Адрес</a></li>
              <li><a href="#">Телефон</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </li>
          <li><a href="#">О нас</a></li>
        </menu>
    )
}

export default Menu