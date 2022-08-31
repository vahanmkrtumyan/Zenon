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
                <h5>PLATFORM</h5>
                <ul>
                  <li>
                    <HashLink to="/Services/#top">Services</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#about">About us</HashLink>
                  </li>
                {/*  <li>
                    <HashLink to="/#partner">Партнеры</HashLink>
                  </li>*/}
                  <li>
                    <HashLink to="/#quality">Quality and Certificates</HashLink>
                  </li>
                  <li>
                    <HashLink to="/#cont">Contacts</HashLink>
                  </li>
                  {/* <li>
                    <a href="#">English</a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h5>Services</h5>
                <ul>
                  <li>
                    <HashLink to="/Services/#project">
                    Project design works
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/Services/#izg">
                    Production of equipment according to drawings
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/Services/#post">
                      Supply of ready-made technological equipment
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/Services#other">Other services</HashLink>
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
              © Zenon-stroyinvest, 2022. All rights reserved.
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
