import React from "react";
import FooterLogo from "./img/footer-logo.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="top-footer">
          <div className="container">
            <div className="top-footer-cols">
              <div>
                <h5>ПЛАТФОРМА</h5>
                <ul>
                  <li>
                    <HashLink to="/Services/#top">Услуги</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#about">О компании</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#partner">Партнеры</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#quality">Качество и Сертификаты</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#cont">Контакты</HashLink>
                  </li>
                  {/* <li>
                    <a href="#">English</a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h5>Услуги</h5>
                <ul>
                  <li>
                    <HashLink to="/Services/#project">
                      Проектно-конструкторские работы
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/Services/#izg">
                      Изготовление оборудования по чертежам
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/Services/#post">
                      Поставка готового технологического оборудования
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/Services#other">Другие услуги</HashLink>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h5>Партнеры</h5>
                <ul>
                  <li>
                    <p>АО «Газпром газэнергосеть»</p>
                  </li>
                  <li>
                    <p>ОООО «Газпром межрегионгаз»</p>
                  </li>
                  <li>
                    <p>ООО «Газпром газомоторное топливо»</p>
                  </li>
                  <li>
                    <p>ООО «Газпром энергохолдинг»</p>
                  </li>
                  <li>
                    <p>ПАО «МОЭК».</p>
                  </li>
                  <li>
                    <p>Министерство промышленности и торговли РФ</p>
                  </li>
                </ul>
              </div> */}
            </div>
            <p className="text-center pt-20">
              © Zenon-stroyinvest, 2019. Все права защищены.
            </p>
          </div>
        </div>
        <div className="bottom-footer text-center">
          <HashLink to="/#top">
            <img src={FooterLogo} alt="" />
          </HashLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
