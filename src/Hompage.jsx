import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
//import useOnScreen from "./useOnScreen";
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
        left: 0
      });
    } catch (error) {
      // just a fallback for older browsers
      window.scrollTo(0, 0);
    }
    setTimeout(function() {
      setClass("1");
    }, 0);
  }, []);

  useLayoutEffect(() => {
    setBannerDimensions(banner.current.getBoundingClientRect());
  }, [banner.current]);

  useLayoutEffect(() => {
    setServiceDimensions(services.current.getBoundingClientRect());
  }, [services.current]);

  useLayoutEffect(() => {
    setAboutDimensions(aboutus.current.getBoundingClientRect());
  }, [aboutus.current]);

  useLayoutEffect(() => {
    setContactDimensions(contacts.current.getBoundingClientRect());
  }, [contacts.current]);

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

  const scrollToRef = pos => {
    window.removeEventListener("scroll", listener, true);
    setTimeout(function() {
      window.addEventListener("scroll", listener, true);
    }, 2000);
    document.getElementById(pos).scrollIntoView({ behavior: "smooth" });
  };

  // const bannerView = useOnScreen(banner, "-90px");
  // const serviceView = useOnScreen(services, "0px");
  // const aboutView = useOnScreen(aboutus, "0px");
  // const contac = useOnScreen(contacts, "0px", 0.8);

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
            <ul>
              <li className={service} onClick={() => setClass("service")}>
                <a href="#serv" onClick={navigateTo}>
                  услуги
                </a>
              </li>
              <li className={about} onClick={() => setClass("about")}>
                <a href="#about" onClick={navigateTo}>
                  О компании
                </a>
              </li>
              <li className={contact} onClick={() => setClass("contact")}>
                <a onClick={navigateTo} href="#contact">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="banner" id="top" ref={banner}>
        <div className="content">
          <h3 className="color-secondary">ПОЛНЫЙ СПЕКТР УСЛУГ ПО</h3>
          <h1>ИМПОРТУ И ЭКСПОРТУ</h1>
          <p>
            Один из лидеров рынка ЕАЭС по сорсингу и поставке огромного спектра
            товаров
          </p>
        </div>
      </section>
      <div style={{ paddingTop: "35px" }} id="serv" />
      <section className="services" ref={services}>
        <button className="btn with-img btn-lg primary">
          услуги <img src={Arrow} alt="" />
        </button>
        <div className="container">
          <a
            href="#"
            className="service-card"
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <p>Проектно-конструкторские работы</p>
          </a>
          <a
            href="#"
            className="service-card"
            style={{ backgroundImage: `url(${Image2})` }}
          >
            <p>Изготовление оборудования по чертежам</p>
          </a>
          <a
            href="#"
            className="service-card"
            style={{ backgroundImage: `url(${Image3})` }}
          >
            <p>Поставка готового технологического оборудования</p>
          </a>
          <a
            href="#"
            className="service-card"
            style={{ backgroundImage: `url(${Image4})` }}
          >
            <p>другие услуги</p>
          </a>
        </div>
      </section>

      <section className="about-company" id="about" ref={aboutus}>
        <div className="container">
          <h2 className="uppercase color-text">О компании</h2>
          <div className="text-with-img img-right">
            <div className="section-text">
              <p>
                Производственно-инжиниринговая компания «ЗенонСтройИнвест»
                занимается оказанием инжиниринговых услуг по подборке и поставке
                промышленного оборудования и промышленных изделий любой
                сложности для средних и крупных предприятий «под ключ» или на
                отдельные части полного технологического цикла производства,
                используемого в машиностроительной, нефтегазохимической отрасли
                и электроэнергетики.Мы специализируемся на решении сложных
                технических задач... внедрении передовых технологий и имеем
                давние партнерские соглашения с российскими и западными
                производителями оборудования, научно-исследовательскими
                организациями и испытательными центрами. В сложившихся на
                сегодняшний день ... политических условиях, мы осуществляем
                поиск, подбор и поставку аналогов зарубежного оборудования,
                находящегося под санкциями на ввоз в РФ.
              </p>
              <Collapse isOpened={isOpened}>
                <div>
                  {" "}
                  Единый центр компетенций на базе ЗАО «ЗенонСтройИнвест» г.
                  Ереван, Республика Армения, решает следующие задачи —
                  объединение в одну цепочку всего этапа разработки проектных
                  решений, поставки оборудования, испытаний, сертификации в
                  рамках Евразийского Союза; — унификация технических решений,
                  снижение их стоимости; — снижение времени на разработку и
                  внедрение; — транслирование технологий из гражданского сектора
                  в военный, и наоборот; — замена зарубежных технических решений
                  и иностранных производителей; — возможность работы со
                  специальными счетами (казначейский, военный)
                </div>
              </Collapse>
              <button
                className="btn outline btn-sm"
                onClick={() => setIsopened(!isOpened)}
              >
                далее
              </button>
            </div>
            <div
              className="section-img"
              style={{ backgroundImage: `url(${About})` }}
            />
          </div>
        </div>
      </section>

      <section className="quality">
        <div className="container">
          <h2 className="uppercase color-text">Качество и Сертификаты</h2>
          <div className="text-with-img img-left">
            <div className="section-text">
              <p>
                Компания «ЗенонСтройИнвест» уделяет особое внимание контролю
                качества выпускаемой продукции, имеем современную систему
                менеджмента качества, постоянно внедряем новые стандарты и
                программы контроля качества, повышаем уровень квалификации
                сотрудников. На всю продукцию предоставляется гарантийный срок,
                по истечении которого наш сервисный центр выполняет пост
                гарантийное обслуживание. Производство имеет все необходимые
                лицензии, разрешения, сертификаты...
              </p>
              <button className="btn outline btn-sm">далее</button>
            </div>
            <div
              className="section-img"
              style={{ backgroundImage: `url(${Quality})` }}
            />
          </div>
        </div>
      </section>

      <section className="partners py-80" ref={contacts}>
        <div className="container">
          <h2 className="text-center uppercase color-text pb-30">Партнеры</h2>
          {/* <p className="text-center">
            Компания «ЗенонСтройИнвест» уделяет особое внимание контролю
            качества выпускаемой продукции, имеем современную систему
            менеджмента качества, постоянно внедряем
          </p> */}
          <div className="partners-logos pt-50">
            {partnerImages.map(item => (
              <img key={item} src={require(`../src/img/${item}.png`)} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contacts">
        <div className="contact-title">
          <h2 className="text-center uppercase color-text pb-30">Контакты</h2>
          <h3 className="text-center">
            Свяжитесь с нами, чтобы обсудить сотрудничество
          </h3>
        </div>

        <div className="contact-social">
          <ul>
            <li>
              <img src={Phone} alt="" />
              <p>+374 11441014</p>
            </li>
            <li>
              <img src={Location} alt="" />
              <p>г. Ереван В. Вагаршян 12а</p>
            </li>
            <li>
              <img src={Mail} alt="" />
              <p>info@zenonstroyinvest.am</p>
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
