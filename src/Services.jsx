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
import { HashLink } from "react-router-hash-link";
import { ReactComponent as ReactLogo } from "./img/Zenon-Services-Opacity.svg";

const Services = () => {
  const banner = useRef();
  const [className, setClassName] = useState("sticky");
  const [isOpened, setIsopened] = useState(false);

  // const scrollToRef = pos => {
  //   document.getElementById(pos).scrollIntoView({ behavior: "smooth" });
  // };

  window.addEventListener("scroll", listener);

  function listener() {
    let scrollpos = window.scrollY;
    if (scrollpos > 100) {
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

  // useEffect(() => {
  //   try {
  //     // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
  //     window.scroll({
  //       top: 0,
  //       left: 0
  //     });
  //   } catch (error) {
  //     // just a fallback for older browsers
  //     window.scrollTo(0, 0);
  //   }
  // }, []);

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
                <HashLink to="/#about">About us</HashLink>
              </li>
              <li>
                <HashLink to="/#cont">Contacts</HashLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="banner services-banner" id="top" ref={banner}>
        <div className="content">
          <h1 className="uppercase ">services</h1>
          <ServicesImage />
        </div>
      </section>
      <section className="service-section py-80" id="project">
        <div className="container">
          <div className="text-with-img img-right">
            <div className="section-top">
              <div className="section-top-text">
                <h3>Project design works</h3>
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
                  The company "ZenonStroyInvest" provides design work and
                  services for the technical re-equipment of production. We
                  carry out the design of enterprises based on individual
                  solutions determined by the purpose of the future structure.
                  We offer modern solutions for your company. We also offer
                  services for the design and installation of automated process
                  and production control systems. We carry out complex
                  automation or modernization of your equipment. A design office
                  operates on the basis of our engineering center. Experienced
                  specialists will help to prepare the project of technological
                  equipment in accordance with your requirements. When
                  developing a project, our specialists take into account the
                  individual features of production and customer requirements.
                  We will prepare documentation for the assembly of any
                  installations, including imported production lines.
                </p>
                {/* <button className="btn outline btn-sm mt-20">далее</button> */}
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
                <h3>Production of equipment according to drawings</h3>
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
                  The ZenonStroyInvest company is engaged in the manufacture of
                  technological equipment to order according to the drawings of
                  the Customer, as well as the provision of services related to
                  the processing of metals at leading enterprises with the
                  possibility of delivering finished products. We have the
                  opportunity to manufacture a product according to the
                  documentation or samples of our customers. Our company has its
                  own modern equipment and a powerful production base, so we can
                  quickly and timely produce orders according to the provided
                  drawings, regardless of their complexity and volume.
                </p>
                {/* <button className="btn outline btn-sm mt-20">далее</button> */}
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
                <h3>SUPPLY OF FINISHED TECHNOLOGICAL EQUIPMENT</h3>
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
                  ZenonStroyInvest has many years of experience in supplying
                  complex process equipment for the petrochemical industry and
                  the electric power industry. We have also accumulated
                  extensive experience in the supply of non-standard large-sized
                  industrial equipment in complex transport dimensions. Our
                  specialists have extensive experience in logistics and customs
                  office work. At the request of the Customer, our company is
                  ready to provide the transfer of intellectual property for
                  technology and related SOFTWARE to the imported equipment
                  supplied.
                </p>
                {/*
                <Collapse isOpened={isOpened}>
                  <div>
                    {" "}
                    Компания «ЗенонСтройИнвест» предлагает к поставке следующие
                    оборудование: Оборудование (сосуды) работающие под давлением
                    - пар, газ, газообразном, сжиженном состоянии, вода при
                    температуре нагрева более 115 градусов Цельсия; под
                    давлением более 0,07 мегапаскаля. - Автоклавы до 40 м3; -
                    Лаверы; - Хранилища. - Котлы. - Смесители и разделители.
                    Насосное оборудование. Дисковые рафинеры и конические
                    мельницы Емкостное оборудование из нержавеющей и остекленной
                    стали по конфигурации Заказчика. (Баки дезактивирующих
                    растворов, баки трапных вод, баки напорные, ёмкости для
                    хранения кислот и щелочей, баки приёма жидких отходов,
                    сборники конденсата, баки для фильтрата и шлама, мерники
                    растворов щелочей и кислот, ванны дезактивации, ресиверы
                    азота и водорода, воздухосборники, а также любое
                    нестандартное емкостное оборудование). Теплообменное
                    оборудование: охладители, теплообменники промконтура,
                    регенеративные теплообменники, охладители отбора проб,
                    выпарные аппараты Крупногабаритное энергетическое
                    оборудование (трансформаторы, выключатели, генераторное
                    оборудование) Компрессоры, газораздаточное оборудование,
                    осушители газа, оборудование для газозаправочных станций.
                    Станки и комплектующие.
                  </div>
                </Collapse>
                <button
                  className="btn outline btn-sm mt-20"
                  onClick={() => setIsopened(!isOpened)}
                >
                  далее
                </button>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other-services" id={"other"}>
        <h3 className="text-center">Other services</h3>
        <div className="content">
          <ul>
            <li>Metalworking on CNC machines</li>
            <li>Metal cutting</li>
            <li>Refinement and adjustment of products</li>
            <li>Heat treatment</li>
          </ul>
          <ul>
            <li>Stamping</li>
            <li>Grinding finished products</li>
            <li>Protective film application and painting</li>
            <li>Welding works of any complexity</li>
          </ul>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Services;
