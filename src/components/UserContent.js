import React from 'react';
import { importAll } from '../utils/index';
let img = importAll(require.context('./images/', false, /\.(png|jpe?g|svg)$/));

const UserContent = () => {
  return (
    <section className = "user-content">
      <article className = "user-content-container">
        <img src="images/MyPhoto.jpg" className ="user-content-photo"/>
        <p className="user-name"><span>  Иван </span><span>  Виноградов. </span></p>
        <p> Любимые технологии : Js/Css/Html, React, Redux, Webpack, Scss, Pug. </p>
        <div>
           Занимаюсь Front_end разработкой , с использованием  React, Redux.
           Недавно успешно закончил курсы Rolling-scopes-school.
           <h3>Примеры работ:</h3>
           <ol>
             <li>
               <p>Небольшой пример адаптивной верстки.</p>
               <a href="https://github.com/grapeperson/css-recipes-and-layouts">github.com/grapeperson/css-recipes-and-layouts</a>
             </li>
             <li>
               <p>
                 Цель игры найти все одинаковые карты , потратив меньше времени.
                 Код написан на чистом js / html / css.
               </p>
               <a href="https://github.com/grapeperson/MMGame">github.com/grapeperson/MMGame</a>
             </li>
             <li>
               <p>
                 Игра для детей ,необходимо бороться с монстрами ,решая задачи.
                 За основу взят MVC паттерн , использовал библиотеку conva js.
               </p>
               <a href="https://github.com/grapeperson/dangerous-trip">github.com/grapeperson/dangerous-trip</a>
             </li>
             <li>
               <p>
                 Цель игры найти все одинаковые карты , потратив меньше времени.
                 Код написан на React + Redux.
               </p>
               <a href="https://github.com/grapeperson/MMGameRedux">github.com/grapeperson/MMGameRedux</a>
             </li>
             <li>
               <p>
                 Верстка сайта для Imaguru  (Минск-Рига 30 августа 2018).
               </p>
               <a href="https://github.com/grapeperson/hackTrain">github.com/grapeperson/hackTrain</a>
             </li>
             <li>
               <p>
                 Участвовал в разработке Front-End части для Rs School.
                 Создание компонента и контейнера Task.
               </p>
               <a href="https://github.com/grapeperson/rsschool-ui/tree/feature-grapeperson">github.com/grapeperson/rsschool-ui/tree/feature-grapeperson</a>
             </li>
             <li>
               <p>
                 Больше примеров работ на :
               </p>
               <a href="https://github.com/grapeperson">github.com/grapeperson</a>
             </li>
           </ol>
        </div>
      </article>
    </section>
  )
}
export default UserContent;
//i should rework case <img src="http://localhost:1337/img.jpg" width="200px" />
