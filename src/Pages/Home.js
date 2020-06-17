import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

import "../css/Home.css";
import "../css/iHover.css";
import LPDLA1 from "../img/team/LPDLA.jpg";
import LPDLA2 from "../img/team/peruanos_completo.jpg";
import LPDLA3 from "../img/team/car1.jpg";
import LPDLA4 from "../img/team/uba.jpg";
import LPDLA5 from "../img/team/clash.jpg";
import aventador from "../img/players/Jhin_1.jpg";
import pato from "../img/players/Xerath_0.jpg";
import bando from "../img/players/Shen.jpg";
import feo from "../img/players/Anivia_0.jpg";
import ladio from "../img/players/Sejuani_0.jpg";
import top from "../img/positions/Position_Challenger-Top.png";
import jg from "../img/positions/Position_Challenger-Jungle.png";
import mid from "../img/positions/Position_Challenger-Mid.png";
import adc from "../img/positions/Position_Challenger-Bot.png";
import supp from "../img/positions/Position_Challenger-Support.png";
import BandoCard from "../img/players/BandoCard.jpg";
import PatoCard from "../img/players/PatoCard.jpg";
import LalioCard from "../img/players/LalioCard.jpg";
import AlanCard from "../img/players/AlanCard.jpg";
import JesusCard from "../img/players/JesusCard.jpg";
import FacebookIcon from "../img/facebookIcon.png";
import TwitterIcon from "../img/twitter-icon.png";
import GGIcon from "../img/OPGGLogo.png";
import { Link } from "react-router-dom";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <React.Fragment>
      <div className="carousel-container">
        <MDBCarousel
          activeItem={1}
          length={5}
          showControls={true}
          showIndicators={true}
          className=""
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={LPDLA1}
                  alt="First slide"
                />
                
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive"></h3>
                <p></p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={LPDLA2}
                  alt="First slide"
                />
                
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive"></h3>
                <p></p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={LPDLA3}
                  alt="First slide"
                />
                
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive"></h3>
                <p></p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={LPDLA4}
                  alt="Second slide"
                />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive"></h3>
                <p></p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={LPDLA5}
                  alt="Third slide"
                />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className="h3-responsive"></h3>
                <p></p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
      <br />
      <div className="container">
        <div className="players_banner rounded shadow">
          <div className="title-container">POSICIONES</div>
        </div>
      </div>

      <br />
      <br />

      <div className="container">
        <div className="row justify-content-around">
          <div className="ih-item circle effect1 m-1">
            <a>
              <div className="spinner"></div>
              <div className="img">
                <img src={bando} alt="img" />
              </div>
              <div className="info">
                <div className="info-back">
                  <h3>
                    <img src={top} alt="" className="position-icon" />
                  </h3>
                  <p>xXDiegonchoXx</p>
                </div>
              </div>
            </a>
          </div>
          <div className="ih-item circle effect1 m-1">
            <a>
              <div className="spinner"></div>
              <div className="img">
                <img src={ladio} alt="img" />
              </div>
              <div className="info">
                <div className="info-back">
                  <h3>
                    <img src={jg} alt="" className="position-icon" />
                  </h3>
                  <p>Lalo8115scout</p>
                </div>
              </div>
            </a>
          </div>
          <div className="ih-item circle effect1 m-1">
            <a>
              <div className="spinner"></div>
              <div className="img">
                <img src={feo} alt="img" />
              </div>
              <div className="info">
                <div className="info-back">
                  <h3>
                    <img src={mid} alt="" className="position-icon" />
                  </h3>
                  <p>PedroPapas909</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <br />
        <br />

        <div className="row justify-content-around">
          <div className="ih-item circle effect1 m-1">
            <a>
              <div className="spinner"></div>
              <div className="img">
                <img src={aventador} alt="img" />
              </div>
              <div className="info">
                <div className="info-back">
                  <h3>
                    <img src={adc} alt="" className="position-icon" />
                  </h3>
                  <p>aventador9</p>
                </div>
              </div>
            </a>
          </div>
          <div className="ih-item circle effect1 m-1">
            <a>
              <div className="spinner"></div>
              <div className="img">
                <img src={pato} alt="img" />
              </div>
              <div className="info">
                <div className="info-back">
                  <h3>
                    <img src={supp} alt="" className="position-icon" />
                  </h3>
                  <p>HumbLong</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="container-fluid">
        <div className="players_banner rounded shadow">
          <div className="title-container">JUGADORES</div>
        </div>
      </div>
      <br />
      <div className="container-fluid">
        <div className="row justify-content-around">
          <MDBCol style={{ maxWidth: "20rem" }}>
            <MDBCard className="i1">
              <MDBCardImage
                className="img-fluid player-pic"
                src={BandoCard}
                waves
              />

              <MDBCardBody>
                <div className="row justify-content-around">
                  <a
                    href="https://www.facebook.com/profile.php?id=100010360786143"
                    target="_blank"
                  >
                    <button className="btn btn-primary btn-icon btn-fb">
                      <img src={FacebookIcon} alt="" className="fb-icon" />
                    </button>
                  </a>
                  <a href="https://twitter.com/DanderoBandero" target="_blank">
                    <button className="btn btn-primary btn-icon">
                      <img src={TwitterIcon} alt="" className="tw-icon" />
                    </button>
                  </a>
                  <a href="https://lan.op.gg/summoner/userName=xXDiegonchoXx" target="_blank">
                    <button className="btn btn-primary btn-icon btn-gg">
                      <img src={GGIcon} alt="" className="gg-icon" />
                    </button>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol style={{ maxWidth: "20rem" }}>
            <MDBCard className="i2">
              <MDBCardImage
                className="img-fluid player-pic"
                src={LalioCard}
                waves
              />
              <MDBCardBody>
                <div className="row justify-content-around">
                  <a
                    href="https://www.facebook.com/profile.php?id=100009461385568"
                    target="_blank"
                  >
                    <button className="btn btn-primary btn-icon btn-fb">
                      <img src={FacebookIcon} alt="" className="fb-icon" />
                    </button>
                  </a>
                  <a href="https://twitter.com/PerroFeo17" target="_blank">
                    <button className="btn btn-primary btn-icon">
                      <img src={TwitterIcon} alt="" className="tw-icon" />
                    </button>
                  </a>
                  <a href="https://lan.op.gg/summoner/userName=Lalo8115scout" target="_blank">
                    <button className="btn btn-primary btn-icon btn-gg">
                      <img src={GGIcon} alt="" className="gg-icon" />
                    </button>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol style={{ maxWidth: "20rem" }}>
            <MDBCard className="i3">
              <MDBCardImage
                className="img-fluid player-pic"
                src={AlanCard}
                waves
              />
              <MDBCardBody>
                <div className="row justify-content-around">
                  <a
                    href="https://www.facebook.com/alan.cristobal.9256"
                    target="_blank"
                  >
                    <button className="btn btn-primary btn-icon btn-fb">
                      <img src={FacebookIcon} alt="" className="fb-icon" />
                    </button>
                  </a>
                  <a href="https://twitter.com/pedropapas90" target="_blank">
                    <button className="btn btn-primary btn-icon">
                      <img src={TwitterIcon} alt="" className="tw-icon" />
                    </button>
                  </a>
                  <a href="https://lan.op.gg/summoner/userName=PedroPapas909" target="_blank">
                    <button className="btn btn-primary btn-icon btn-gg">
                      <img src={GGIcon} alt="" className="gg-icon" />
                    </button>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
        <br />
        <br />
        <div className="row justify-content-around">
          <MDBCol style={{ maxWidth: "20rem" }}>
            <MDBCard className="i4">
              <MDBCardImage
                className="img-fluid player-pic"
                src={JesusCard}
                waves
              />
              <MDBCardBody>
                <div className="row justify-content-around">
                  <a
                    href="https://www.facebook.com/jesuseduardo.cervantescastro"
                    target="_blank"
                  >
                    <button className="btn btn-primary btn-icon btn-fb">
                      <img src={FacebookIcon} alt="" className="fb-icon" />
                    </button>
                  </a>
                  <a href="https://twitter.com/JessCC905" target="_blank">
                    <button className="btn btn-primary btn-icon">
                      <img src={TwitterIcon} alt="" className="tw-icon" />
                    </button>
                  </a>
                  <a href="https://lan.op.gg/summoner/userName=aventador9" target="_blank">
                    <button className="btn btn-primary btn-icon btn-gg">
                      <img src={GGIcon} alt="" className="gg-icon" />
                    </button>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol style={{ maxWidth: "20rem" }}>
            <MDBCard>
              <MDBCardImage
                className="img-fluid player-pic"
                src={PatoCard}
                waves
              />
              <MDBCardBody>
                <div className="row justify-content-around">
                  <a
                    href="https://www.facebook.com/humberto.longoria"
                    target="_blank"
                  >
                    <button className="btn btn-primary btn-icon btn-fb">
                      <img src={FacebookIcon} alt="" className="fb-icon" />
                    </button>
                  </a>
                  <a href="https://twitter.com/Mago_Electrico9" target="_blank">
                    <button className="btn btn-primary btn-icon">
                      <img src={TwitterIcon} alt="" className="tw-icon" />
                    </button>
                  </a>
                  <a href="https://lan.op.gg/summoner/userName=HumbLong" target="_blank">
                    <button className="btn btn-primary btn-icon btn-gg">
                      <img src={GGIcon} alt="" className="gg-icon" />
                    </button>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </div>
      <br />
      <br />
    </React.Fragment>
  );
}

export default Home;
