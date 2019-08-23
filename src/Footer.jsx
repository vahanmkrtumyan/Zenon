import React from "react";
import FooterLogo from "./img/footer-logo.png";

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
                    <a href="#">Услуги</a>
                  </li>
                  <li>
                    <a href="#">О компании</a>
                  </li>
                  <li>
                    <a href="#">Проекты</a>
                  </li>
                  <li>
                    <a href="#">Партнеры</a>
                  </li>
                  <li>
                    <a href="#">Качество и Сертификаты</a>
                  </li>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                  <li>
                    <a href="#">English</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Услуги</h5>
                <ul>
                  <li>
                    <a href="#">Проектно-конструкторские работы</a>
                  </li>
                  <li>
                    <a href="#">Изготовление оборудования по чертежам</a>
                  </li>
                  <li>
                    <a href="#">
                      Поставка готового технологического оборудования
                    </a>
                  </li>
                  <li>
                    <a href="#">Другие услуги</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Партнеры</h5>
                <ul>
                  <li>
                    <a href="#">АО «Газпром газэнергосеть»</a>
                  </li>
                  <li>
                    <a href="#">ОООО «Газпром межрегионгаз»</a>
                  </li>
                  <li>
                    <a href="#">ООО «Газпром газомоторное топливо»</a>
                  </li>
                  <li>
                    <a href="#">ООО «Газпром энергохолдинг»</a>
                  </li>
                  <li>
                    <a href="#">ПАО «МОЭК».</a>
                  </li>
                  <li>
                    <a href="#">Министерство промышленности и торговли РФ</a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center pt-20">
              © Zenon-stroyinvest, 2019. Все права защищены.
            </p>
          </div>
        </div>
        <div className="bottom-footer text-center">
          <a href="#">
            <img src={FooterLogo} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
