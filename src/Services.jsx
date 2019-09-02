import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import ServicesImage from "./ServicesImage";
import { Collapse } from "react-collapse";
import navigateTo from "./lib/NavigateTo";
import Photo1 from "./img/Photo11.jpg";
import Photo2 from "./img/Photo22.jpg";
import Photo3 from "./img/Photo33.jpg";
import Logo from "./img/logo.png";

const Services = () => {
  const [bannerDimensions, setBannerDimensions] = useState({});
  const banner = useRef();
  const [className, setClassName] = useState("sticky");

  const scrollToRef = pos => {
    document.getElementById(pos).scrollIntoView({ behavior: "smooth" });
  };

  window.addEventListener("scroll", listener);

  function listener() {
    let scrollpos = window.scrollY;
    if (scrollpos > 100) {
      // console.log(className)
      if (!className) {
        setClassName("sticky");
      }
    }

    if (scrollpos < 100) {
      console.log(className);
      if (className) {
        setClassName("");
      }
    }
  }

  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <React.Fragment>
      <header className={className}>
        <div className="container">
          <div className="logo">
            <Link to={`/`} className="logo">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <nav className="header-menu">
            <ul>
              <li>
                {/* <Link to={`/#abouts`} className="logo"> */}
                <a href="/#about">О компании</a>
                {/* </Link> */}
              </li>
              <li>
                <a href="/#cont">Контакты</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="banner services-banner" id="top" ref={banner}>
        <div className="content">
          <h1 className="uppercase ">услуги</h1>
          <ServicesImage />
        </div>
      </section>
      <section className="service-section py-80" id="project">
        <div className="container">
          <div className="text-with-img img-right">
            <div className="section-top">
              <div className="section-top-text">
                <h3>Проектно-конструкторские работы</h3>
                <div className="gradient-bg"></div>
              </div>
              <div
                className="section-img"
                style={{ backgroundImage: `url(${Photo1})` }}
              />
            </div>
            <div className="section-text">
              <div className="section-text-content">
                <p>
                  Компания «ЗенонСтройИнвест» оказывает проектно-конструкторские
                  работы и услуги по техническому перевооружению производства.
                  Выполняем проектирование предприятий на основе индивидуальных
                  решений, определяемых назначением будущего сооружения. Мы
                  предлагаем современные решения для Вашего предприятия. Также
                  предлагаем услуги по проектированию и установке
                  автоматизированных систем управления технологическими
                  процессами и производством. Проводим комплексную автоматизацию
                  или модернизацию Вашего оборудования. На базе нашего
                  инжинирингового центра работает конструкторское бюро. Опытные
                  специалисты помогут подготовить проект технологического
                  оборудования в соответствии с Вашими требованиями. При
                  разработке проекта наши специалисты учитывают индивидуальные
                  особенности производства и требования заказчика. Мы подготовим
                  документацию для сборки любых установок, включая
                  технологические линии импортного производства.
                </p>
                <button className="btn outline btn-sm mt-20">далее</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section py-80" id="izg">
        <div className="container">
          <div className="text-with-img img-left">
            <div className="section-top">
              <div className="section-top-text">
                <h3>Изготовление оборудования по чертежам</h3>
                <div className="gradient-bg"></div>
              </div>
              <div
                className="section-img"
                style={{ backgroundImage: `url(${Photo2})` }}
              />
            </div>
            <div className="section-text">
              <div className="section-text-content">
                <p>
                  Компания «ЗенонСтройИнвест» занимается изготовлением
                  технологического оборудования на заказ по чертежам Заказчика,
                  а так же предоставлением услуг связанных с обработкой металлов
                  на ведущих российских и европейских предприятиях с
                  возможностью доставки готовых изделий по всей России. Мы имеем
                  возможность изготовить изделие по документации или образцам
                  наших Заказчиков. Наша компания располагает собственным
                  современным оборудованием и мощной производственной базой,
                  поэтому можем оперативно и своевременно изготавливать заказы
                  по предоставленным чертежам вне зависимости от их сложности и
                  объема.
                </p>
                <button className="btn outline btn-sm mt-20">далее</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section py-80" id="post">
        <div className="container">
          <div className="text-with-img img-right">
            <div className="section-top">
              <div className="section-top-text">
                <h3>Поставка готового технологического оборудования</h3>
                <div className="gradient-bg"></div>
              </div>
              <div
                className="section-img"
                style={{ backgroundImage: `url(${Photo3})` }}
              />
            </div>
            <div className="section-text">
              <div className="section-text-content">
                <p>
                  Компания «ЗенонСтройИнвест» имеет многолетний опыт поставки
                  сложного технологического оборудования для нефтегазохимической
                  промышленности и электроэнергетики. Также накоплен большой
                  опыт поставки нестандартного крупногабаритного промышленного
                  оборудования в сложных транспортных габаритных размерах. Наши
                  специалисты имеют большой опыт логистического и таможенного
                  делопроизводства. По требованию Заказчика наша компания готова
                  обеспечить передачу интеллектуальной собственности на
                  технологию и сопутствующие СОФТ на поставляемое импортное
                  оборудование. Компания «ЗенонСтройИнвест» предлагает к
                  поставке следующие оборудование: Оборудование (сосуды)
                  работающие под давлением - пар, газ, газообразном, сжиженном
                  состоянии, вода при температуре нагрева более 115 градусов
                  Цельсия; под давлением более 0,07 мегапаскаля. - Автоклавы до
                  40 м3; - Лаверы; - Хранилища. - Котлы. - Смесители и
                  разделители. Насосное оборудование. Дисковые рафинеры и
                  конические мельницы Емкостное оборудование из нержавеющей и
                  остекленной стали по конфигурации Заказчика. (Баки
                  дезактивирующих растворов, баки трапных вод, баки напорные,
                  ёмкости для хранения кислот и щелочей, баки приёма жидких
                  отходов, сборники конденсата, баки для фильтрата и шлама,
                  мерники растворов щелочей и кислот, ванны дезактивации,
                  ресиверы азота и водорода, воздухосборники, а также любое
                  нестандартное емкостное оборудование). Теплообменное
                  оборудование: охладители, теплообменники промконтура,
                  регенеративные теплообменники, охладители отбора проб,
                  выпарные аппараты Крупногабаритное энергетическое оборудование
                  (трансформаторы, выключатели, генераторное оборудование)
                  Компрессоры, газораздаточное оборудование, осушители газа,
                  оборудование для газозаправочных станций. Станки и
                  комплектующие:
                </p>
                <button className="btn outline btn-sm mt-20">далее</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other-services" id={"other"}>
        <h3 className="text-center">другие услуги</h3>
        <div className="content">
          <ul>
            <li>Металлообработка на станках с ЧПУ</li>
            <li>Резка металла</li>
            <li>Доработка и корректировка изделий</li>
            <li>Термообработка</li>
          </ul>
          <ul>
            <li>Штамповка</li>
            <li>Шлифовка готовых изделий</li>
            <li>Нанесение защитной пленки и покраска</li>
            <li>Сварочные работы любой сложности</li>
          </ul>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Services;
