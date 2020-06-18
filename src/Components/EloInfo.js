import React from "react";
import "../css/EloInfo.css";
import elo from "../img/emblems/Emblem_Challenger.png";
import profileIcon from "../img/logo.jpg";
import adc from "../img/positions/adc-icon.png";
import jg from "../img/positions/jungla-icon.jpeg";
import Matches from "../Components/Matches";
import Anivia from "../img/champions/Anivia.png";
import Mastery from "../img/masteries/7.png";
import Jhin from "../img/champions/Jhin.png";
import Aatrox from "../img/champions/Aatrox.png";

function EloInfo() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-around border">

          <div className="soloq border">
            <div className="col1">
              <div className="row0">Aventador9</div>
              <div className="row1 elo-container">
                <img src={elo} alt="" className="elo-img" />
              </div>
              <div className="row2 text-center">BRONZE 4</div>
            </div>
            <div className="col2">
              <div className="row3-1">
                <select name="" id="" className="form-control queue">
                  <option value="">SoloQ</option>
                  <option value="">Flex</option>
                </select>
              </div>
              <div className="row3 data-wr">
                <div className="wins">
                  124<span style={{ color: "#37B03F" }}>W</span>
                </div>
                <div className="loses">
                  143<span style={{ color: "#F94848" }}>L</span>
                </div>
                <div className="wr" style={{ color: "black" }}>
                  46.4% WR
                </div>
              </div>
              <div className="row3">28 Lp</div>
            </div>
          </div>


          <div className="summoner-info border">
            <div className="col4">
              <div className="profile-icon">
                <img src={profileIcon} alt="" className="profile-img" />
              </div>
              <div className="lvl-container">144</div>
            </div>
            <div className="col5">
              <div className="row4">Aventador9</div>
              <div className="row5">Última partida: hace 5 horas</div>
            </div>
            <div className="col6">
              <div className="favorites-position">
                <div className="row6 text-center">Posiciones favoritas:</div>
                <div className="row7">
                  <div className="position-container">
                    <img src={adc} alt="" className="position" />
                    <div className="position-data">
                      Bot
                      <br />
                      83%
                    </div>
                  </div>
                  <div className="position-container">
                    <img src={jg} alt="" className="position" />
                    <div className="position-data">
                      Jungla
                      <br />
                      17%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="most-used-champs">
            <div className="item">
              <div className="most-used-champ">
                <div className="champion-container-img">
                  <div className="used-champion-img">
                    <img src={Anivia} alt="" className="used-champ-img" />
                  </div>
                </div>
              </div>
              <div className="played-champion-container">
                <div className="games-played">124 Juegos.</div>
                <div className="percent-played">54%</div>
              </div>
              <div className="champion-mastery">
                <div className="mastery">
                  <img src={Mastery} alt="" className="mastery-img" />
                </div>
              </div>
            </div>
            <div className="divisor"></div>
            <div className="item">
              <div className="most-used-champ">
                <div className="champion-container-img">
                  <div className="used-champion-img">
                    <img src={Anivia} alt="" className="used-champ-img" />
                  </div>
                </div>
              </div>
              <div className="played-champion-container">
                <div className="games-played">124 Juegos.</div>
                <div className="percent-played">54%</div>
              </div>
              <div className="champion-mastery">
                <div className="mastery">
                  <img src={Mastery} alt="" className="mastery-img" />
                </div>
              </div>
            </div>
            <div className="divisor"></div>
            <div className="item">
              <div className="most-used-champ">
                <div className="champion-container-img">
                  <div className="used-champion-img">
                    <img src={Anivia} alt="" className="used-champ-img" />
                  </div>
                </div>
              </div>
              <div className="played-champion-container">
                <div className="games-played">124 Juegos.</div>
                <div className="percent-played">54%</div>
              </div>
              <div className="champion-mastery">
                <div className="mastery">
                  <img src={Mastery} alt="" className="mastery-img" />
                </div>
              </div>
            </div>
            <div className="divisor"></div>
            <div className="item">
              <div className="most-used-champ">
                <div className="champion-container-img">
                  <div className="used-champion-img">
                    <img src={Anivia} alt="" className="used-champ-img" />
                  </div>
                </div>
              </div>
              <div className="played-champion-container">
                <div className="games-played">124 Juegos.</div>
                <div className="percent-played">54%</div>
              </div>
              <div className="champion-mastery">
                <div className="mastery">
                  <img src={Mastery} alt="" className="mastery-img" />
                </div>
              </div>
            </div>
            <div className="divisor"></div>
            <div className="item">
              <div className="most-used-champ">
                <div className="champion-container-img">
                  <div className="used-champion-img">
                    <img src={Anivia} alt="" className="used-champ-img" />
                  </div>
                </div>
              </div>
              <div className="played-champion-container">
                <div className="games-played">124 Juegos.</div>
                <div className="percent-played">54%</div>
              </div>
              <div className="champion-mastery">
                <div className="mastery">
                  <img src={Mastery} alt="" className="mastery-img" />
                </div>
              </div>
            </div>
          </div>

          <Matches/>

        </div>
      </div>
      <br />
    </React.Fragment>
  );
}

export default EloInfo;
