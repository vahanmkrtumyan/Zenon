import React, { useState, useRef, useEffect } from "react";
import useOnScreen from "./useOnScreen";
import Logo from "./img/logo.png";
import FooterLogo from "./img/footer-logo.png";
import Image1 from "./img/image1.png";
import Image2 from "./img/image2.png";
import Image3 from "./img/image3.png";
import Image4 from "./img/image4.png";
import Quality from "./img/quality.jpg";
import About from "./img/about.jpg";

const Hompage = () => {
  const [className, setClassName] = useState("");
  const [service, setService] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [node, setNode] = useState({});

  const banner = useRef();
  const services = useRef();
  const aboutus = useRef();
  const contacts = useRef();

  const scrollToRef = pos =>
    document.getElementById(pos).scrollIntoView({ behavior: "smooth" });

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

  window.addEventListener("scroll", function() {
    // if (bannerView) {
    //   setClass("service");
    // }
    // if (serviceView) {
    //   setClass("service");
    // }
    // if (contacts) {
    //   setClass("contact");
    // }

    let scrollpos = window.scrollY;

    if (scrollpos > 100) {
      setClassName("sticky");
    }

    if (scrollpos < 100) {
      setClassName("");
    }
  });

  const bannerView = useOnScreen(banner, "-90px");
  const serviceView = useOnScreen(services, "-0px 0px");
  const aboutView = useOnScreen(aboutus, "-0px 0px");
  const contac = useOnScreen(contacts, "0px");

  console.log(serviceView);

  if (aboutView) {
    if (!about) {
      setClass("about");
    }
  }

  if (serviceView) {
    console.log(serviceView);
    if (!service) {
      setClass("service");
    }
  }

  if (contac) {
    if (!contact) {
      setClass("contact");
    }
  }

  if (bannerView) {
    console.log(bannerView);
    if (service) {
      setClass("1");
    }
  }

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
                <a onClick={() => scrollToRef("serv")}>услуги</a>
              </li>
              <li className={about} onClick={() => setClass("about")}>
                <a onClick={() => scrollToRef("about")}>О компании</a>
              </li>
              <li className={contact} onClick={() => setClass("contact")}>
                <a onClick={() => scrollToRef("contact")}>Контакты</a>
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
          <p id="serv" />
        </div>
      </section>
      <section />
      <section className="services" ref={services}>
        <button className="btn with-img btn-lg primary">
          услуги <img src="assets/img/arrow-right.svg" alt="" />
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
              <button className="btn outline btn-sm">далее</button>
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

      <section className="partners py-80">
        <div className="container">
          <h2 className="text-center uppercase color-text pb-30">Партнеры</h2>
          <p className="text-center">
            Компания «ЗенонСтройИнвест» уделяет особое внимание контролю
            качества выпускаемой продукции, имеем современную систему
            менеджмента качества, постоянно внедряем
          </p>
          <div className="partners-logos pt-50">
            <img src="assets/img/partner-logo1.png" alt="" />
            <img src="assets/img/logo2.png" alt="" />
            <img src="assets/img/logo3.png" alt="" />
            <img src="assets/img/logo4.png" alt="" />
            <img src="assets/img/logo5.png" alt="" />
            <img src="assets/img/logo6.png" alt="" id="contact" />
          </div>
        </div>
      </section>

      <section className="contacts" ref={contacts}>
        <div className="contact-title">
          <h2 className="text-center uppercase color-text pb-30">Контакты</h2>
          <p className="text-center">
            Компания «ЗенонСтройИнвест» уделяет особое внимание контролю
            качества выпускаемой продукции, имеем современную систему
            менеджмента качества, постоянно внедряем
          </p>
        </div>

        <div className="contact-social">
          <ul>
            <li>
              <img src="assets/img/phone-call.png" alt="" />
              <p>+374 11441014</p>
            </li>
            <li>
              <img src="assets/img/location.png" alt="" />
              <p>г. Ереван В. Вагаршян 12а</p>
            </li>
            <li>
              <img src="assets/img/mail.png" alt="" />
              <p>info@zenonstroyinvest.am</p>
            </li>
          </ul>
        </div>
        <div className="map" />
        <div className="contact-form">
          <p className="color-white text-center pb-30">
            Компания «ЗенонСтройИнвест» уделяет особое внимание контролю
          </p>
          <form action="">
            <div className="form-inputs pb-25">
              <div>
                <input type="text" placeholder="имя" />
              </div>
              <div>
                <input type="text" placeholder="Email" />
              </div>
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder="письмо" />

            <div className="text-right pt-30">
              <button className="btn  btn-sm primary">послать</button>
            </div>
          </form>
        </div>
      </section>

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
                    <a href="#">проекты</a>
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
                    <a href="#">In English</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Услуги</h5>
                <ul>
                  <li>
                    <a href="#">
                      Поставка готового технологического оборудования
                    </a>
                  </li>
                  <li>
                    <a href="#">Другие услуг</a>
                  </li>
                  <li>
                    <a href="#">Изготовление оборудования по чертежам</a>
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

export default Hompage;
