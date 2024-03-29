import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { HashLink } from "react-router-hash-link";
import Logo from "./img/logo.png";
import Image1 from "./img/image1.png";
import Image2 from "./img/image2.png";
import Image3 from "./img/image3.png";
import Image4 from "./img/image4.png";
import Quality from "./img/quality.jpg";
import About from "./img/about.jpg";
import Arrow from "./img/arrow-right.svg";
import Phone from "./img/phone-call.png";
import Location from "./img/location.png";
import Mail from "./img/mail.png";
import Footer from "./Footer";
import Feedback from "./Feedback";
import navigateTo from "./lib/NavigateTo";
import { Collapse } from "react-collapse";

const Hompage = () => {
  const [className, setClassName] = useState("");
  const [service, setService] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [serviceDimensions, setServiceDimensions] = useState({});
  const [bannerDimensions, setBannerDimensions] = useState({});
  const [aboutDimensions, setAboutDimensions] = useState({});
  const [contactDimensions, setContactDimensions] = useState({});
  const [isOpened, setIsopened] = useState(false);
  const [isOpened2, setIsopened2] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const partnerImages = ["logo1", "logo2", "logo3", "logo4", "logo5", "logo6"];

  const banner = useRef();
  const services = useRef();
  const aboutus = useRef();
  const contacts = useRef();

  function setClass(clas) {
    if (clas === "service") {
      setService("active");
      setAbout("");
      setContact("");
    } else if (clas === "about") {
      setService("");
      setAbout("active");
      setContact("");
    } else if (clas === "contact") {
      setService("");
      setAbout("");
      setContact("active");
    } else {
      setService("");
      setAbout("");
      setContact("");
    }
  }

  window.addEventListener("scroll", listener);

  useEffect(() => {
    try {
      // trying to use new API - https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
      window.scroll({
        top: 0,
        left: 0,
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
    setTimeout(function () {
      setClass("1");
    }, 0);
  }, []);

  useLayoutEffect(() => {
    setBannerDimensions(banner.current.getBoundingClientRect());
    setAboutDimensions(aboutus.current.getBoundingClientRect());
    // setContactDimensions(contacts.current.getBoundingClientRect());
    setServiceDimensions(services.current.getBoundingClientRect());
  }, [banner.current, services.current, aboutus.current]);

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

    if (scrollpos < bannerDimensions.top + 100) {
      if (service) {
        setClass("");
      }
    }

    if (
      scrollpos > serviceDimensions.top - 150 &&
      scrollpos < serviceDimensions.bottom - 150
    ) {
      if (!service) {
        setClass("service");
      }
    }

    if (
      scrollpos > aboutDimensions.top - 30 &&
      scrollpos < aboutDimensions.bottom
    ) {
      if (!about) {
        setClass("about");
      }
    }

    if (
      scrollpos > contactDimensions.top - 200 &&
      scrollpos < contactDimensions.bottom
    ) {
      if (!contact) {
        setClass("contact");
      }
    }
  }

  let toggle = () => {
    setBurgerOpen(!burgerOpen);
  };

  const scrollToRef = (pos) => {
    window.removeEventListener("scroll", listener, true);
    setTimeout(function () {
      window.addEventListener("scroll", listener, true);
    }, 2000);
    document.getElementById(pos).scrollIntoView({ behavior: "smooth" });
  };

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <header className={className}>
        <div className="container">
          <div className="logo">
            <a onClick={() => scrollToRef("top")}>
              <img src={Logo} alt="" onClick={() => setClass("")} />
            </a>
          </div>
          <nav className="header-menu">
            <div
              onClick={() => toggle()}
              className={`burger ${burgerOpen ? "open" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul
              className={burgerOpen ? "open" : ""}
              onClick={() => setBurgerOpen(false)}
            >
              <li className={service} onClick={() => setClass("service")}>
                <HashLink to="/Services/#top">services</HashLink>
              </li>
              <li className={about} onClick={() => setClass("about")}>
                <a href="#about" onClick={navigateTo}>
                  about us
                </a>
              </li>
              <li className={contact} onClick={() => setClass("contact")}>
                <a onClick={navigateTo} href="#contact">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="banner home-banner" id="top" ref={banner}>
        <div className="content">
          <h3 className="color-secondary">FULL RANGE OF</h3>
          <h1>IMPORT AND EXPORT SERVICES</h1>
          <p>
            One of the market leaders in sourcing and supplying a huge range of
            goods
          </p>
        </div>
      </section>
      <div style={{ paddingTop: "35px" }} id="serv" />
      <section className="services" ref={services}>
        <HashLink to={`/Services/#top`}>
          {" "}
          <button className="btn with-img btn-lg primary service-btn">
            SERVICES
            <img src={Arrow} alt="" />
          </button>
        </HashLink>
        <div className="container">
          <Slider {...settings}>
            <div className="service-card">
              <img src={Image1} alt="" />
              <p>Project design works</p>
            </div>
            <div className="service-card">
              <img src={Image2} alt="" />
              <p>Production of equipment according to drawings</p>
            </div>
            <div
              className="service-card"
              style={{ backgroundImage: `url(${Image3})` }}
            >
              <img src={Image3} alt="" />
              <p>Supply of ready-made technological equipment</p>
            </div>
            <div className="service-card">
              <img src={Image4} alt="" />
              <p>Other services</p>
            </div>
          </Slider>
        </div>
      </section>
      <section id="abouts"></section>
      <section className="about-company" id="about" ref={aboutus}>
        <div className="container">
          <h2 className="uppercase color-text">About company</h2>
          <div className="text-with-img img-right">
            <div
              className="section-img"
              style={{ backgroundImage: `url(${About})` }}
            />
            <div className="section-text">
              <div className="section-text-content">
                <p>
                  The production and engineering company "ZenonStroyInvest" is
                  engaged in the provision of engineering services for the
                  selection and supply of industrial equipment and industrial
                  products of any complexity for medium and large enterprises on
                  a turnkey basis or for separate parts of the full
                  technological cycle of production used in the engineering,
                  petrochemical and power industries. We specialize in solving
                  complex technical problems... introducing advanced
                  technologies and have long-standing partnership agreements
                  with domestic and foreign equipment manufacturers, research
                  organizations and testing centers. We search, select and
                  supply foreign equipment, including spare parts and
                  components, vehicles and consumer goods.
                </p>
                {/* <Collapse isOpened={isOpened}>
                  <div>
                    {" "}
                    Единый центр компетенций на базе ЗАО «ЗенонСтройИнвест» г.
                    Ереван, Республика Армения, решает следующие задачи —
                    объединение в одну цепочку всего этапа разработки проектных
                    решений, поставки оборудования, испытаний, сертификации в
                    рамках Евразийского Союза; — унификация технических решений,
                    снижение их стоимости; — снижение времени на разработку и
                    внедрение; — транслирование технологий из гражданского
                    сектора в военный, и наоборот; — замена зарубежных
                    технических решений и иностранных производителей; —
                    возможность работы со специальными счетами (казначейский,
                    военный)
                  </div>
                </Collapse>
                <button
                  className="btn outline btn-sm mt-20"
                  onClick={() => setIsopened(!isOpened)}
                >
                  далее
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <p id="quality"></p>
      </section>

      <section className="quality">
        <div className="container">
          <h2 className="uppercase color-text">Quality and Certificates</h2>
          <div className="text-with-img img-left">
            <div
              className="section-img"
              style={{ backgroundImage: `url(${Quality})` }}
            />
            <div className="section-text">
              <div className="section-text-content">
                <p>
                  ZenonStroyInvest pays special attention to the quality control
                  of its products. We have a modern quality management system,
                  constantly introduce new standards and quality control
                  programs, and improve the skills of our employees. All
                  products are provided with a warranty period, after which our
                  service center performs post-warranty service. The production
                  has all the necessary licenses, permits, certificates.
                </p>
                {/*
                <Collapse isOpened={isOpened2}>
                  <div>
                    <ul>
                      <li>
                        Сертификат на соответствие требованиям ГОСТ ISO
                        9001-2011 (ISO 9001:2008), Сертификация промышленного
                        оборудования по стандартам TÜV SÜD Евросою́за, ЕС.
                      </li>
                      <li>
                        Свидетельство СТЭК об аттестации лаборатории
                        неразрушающего контроля Сертификат на право изготовления
                        сосудов, работающих под давлением, в соответствии с
                        требованиями международных стандартов кодекса ASME
                        секция U, расчетами прочности для отдельных типов
                        товаров,в соответствии с EN 14335.
                      </li>
                      <li>
                        Разрешение на применение сосудов, колонных, емкостных,
                        теплообменных аппаратов, аппаратов с перемешивающими
                        устройствами и т.д.
                      </li>
                      <li>
                        Разрешения на выполнение проектных и конструкторских
                        работ.
                      </li>
                      <li>
                        Свидетельства НАКС о готовности к использованию
                        аттестованной технологии сварки в соответствии с
                        требованиями РД 03-615-03, об аттестации сварочного
                        оборудования на марки оборудования: ВДУ-1250, АДФ-1000 и
                        КЕМПОМАТ4200.
                      </li>
                      <li>
                        Декларация соответствия ТС № RU Д- RU.МН 09В00058.
                      </li>
                    </ul>
                  </div>
                </Collapse>
                <button
                  className="btn outline btn-sm mt-20"
                  onClick={() => setIsopened2(!isOpened2)}
                >
                  expand
                </button>*/}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="partners py-80" id="partner" ref={contacts}>
        <div className="container">
          <h2 className="text-center uppercase color-text pb-30">Партнеры</h2>
          <div className="partners-logos pt-50">
            {partnerImages.map(item => (
              <img key={item} src={require(`../src/img/${item}.png`)} />
            ))}
          </div>
        </div>
        <p id="cont"></p>
      </section> */}

      <section id="contact" className="contacts">
        <div className="contact-title">
          <h2 className="text-center uppercase color-text pb-30">Contacts</h2>
          <h3 className="text-center">Contact us to discuss cooperation</h3>
        </div>

        <div className="contact-social">
          <ul>
            <li>
              <img src={Phone} alt="" />
              <p>+374 11 441 014</p>
            </li>
            <li>
              <img src={Location} alt="" />
              <p>Yerevan, V. Vagharshyan St., 12a</p>
            </li>
            <li>
              <img src={Mail} alt="" />
              <div>
                <p>info@zenonstroyinvest.am</p>
                <p>z.stroyinvest@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="map" />
        <Feedback />
      </section>
      <Footer />
    </div>
  );
};

export default Hompage;
