import React from "react";
import scssSerchedStations from './scssSerchedStations.module.scss';
import scssShowStation from './scssShowStation.module.scss';
// import { ShowStation } from "./ShowStation";

export const SerchedStations = (props) => {
    const { inputValue, onChange, showStations, search, clear} = props;
    return (
        <>
        <div>
            <h4 className={scssSerchedStations.title}>降りる駅を入力してください</h4>
            <input id={scssSerchedStations.search} type="text" value={inputValue} placeholder="駅名を入力" onChange={onChange}/>
            <button className={scssSerchedStations.searchButton}onClick={search}>検索</button>
            <button className={scssSerchedStations.searchButton}onClick={clear}>クリア</button>
          </div>
        {showStations.map((station, index) => {
          if(showStations.length >= 2){
          return null;
          } else {
          const { id,stationName,stationNum,trackNum,position,positionColor} = station;
          
          const forStations = ['岡崎・豊橋','鳴海・豊明','河和.内海.中部国際空港','大江・太田川','一宮・岐阜','須ヶ口・国府宮','津島・弥富','犬山・可児','西春・岩倉'];
          const forStationsEn = ['Okazaki Toyohashi','Narumi Toyoake','Kowa Utsumi Cen Japan Airport','Oe Otagawa','Ichinomiya Gifu','Sukaguchi Konomiya','Tsushima Yatomi','Inuyama Kani','Nishiharu Iwakura'];
          const trainClass = ['快特・特急・快急・急行・準急','普通'];

          const stationsId = id
           

          return (
            <>
             <div id={scssSerchedStations.stationArea}key={index}>
              <p id={scssSerchedStations.stationAreaName}>{stationName}駅（{stationNum}）へ向かう時の並び位置</p>

            {stationsId.search(41) !== -1 &&
            (<div>
             <div className={scssShowStation.stationInfoBlue}>
              <ul className={scssShowStation.showStation}>
                <li className={scssShowStation.for}>{forStations[0]}<span className={scssShowStation.for2}>方面</span></li>
                <li className={scssShowStation.class}>{forStationsEn[0]}</li>
                <li className={scssShowStation.class}>{trainClass[0]}</li>
              </ul>
              </div>
           </div>)}

            {stationsId.search(42) !== -1 &&
            (<div>
             <div className={scssShowStation.stationInfoYellow}>
              <ul className={scssShowStation.showStation}>
                <li className={scssShowStation.for}>{forStations[1]}<span className={scssShowStation.for2}>方面</span></li>
                <li className={scssShowStation.class}>{forStationsEn[1]}</li>
                <li className={scssShowStation.class}>{trainClass[1]}</li>
              </ul>
              </div>
              </div>)
            }

            {stationsId.search(43) !== -1 &&
              (<div>
               <div className={scssShowStation.stationInfoGreen}>
                  <ul className={scssShowStation.showStation}>
                    <li className={scssShowStation.forCen}>{forStations[2]}<span className={scssShowStation.forCen2}>方面</span></li>
                    <li className={scssShowStation.classCen}>{forStationsEn[2]}</li>
                    <li className={scssShowStation.classCen}>{trainClass[0]}</li>
                  </ul>
                  </div>
               </div>)
            }

            {stationsId.search(44) !== -1 &&
              (<div>
                <div className={scssShowStation.stationInfoLightBlue}></div>
                  <ul className={scssShowStation.showStation}>
                   <li className={scssShowStation.for}>{forStations[3]}<span className={scssShowStation.for2}>方面</span></li>
                   <li className={scssShowStation.class}>{forStationsEn[3]}</li>
                   <li className={scssShowStation.class}>{trainClass[1]}</li>
                  </ul>
               </div>)
            }

            {stationsId.search(15) !== -1 &&
              (<div>
               <div className={scssShowStation.stationInfoBlue}>
                <ul className={scssShowStation.showStation}>
                  <li className={scssShowStation.for}>{forStations[4]}</li>
                  <li className={scssShowStation.class}>{forStationsEn[4]}</li>
                  <li className={scssShowStation.class}>{trainClass[0]}</li>
                </ul>
                </div>
                </div>)
              }
              
              {stationsId.search(16) !== -1 &&
              (<div>
               <div className={scssShowStation.stationInfoYellow}>
                <ul className={scssShowStation.showStation}>
                  <li className={scssShowStation.for}>{forStations[5]}<span className={scssShowStation.for2}>方面</span></li>
                  <li className={scssShowStation.class}>{forStationsEn[5]}</li>
                  <li className={scssShowStation.class}>{trainClass[1]}</li>
                </ul>
                </div>
                </div>)
              }
              
              {stationsId.search(17) !== -1 &&
              (<div>
               <div className={scssShowStation.stationInfoPurple}>
                <ul className={scssShowStation.showStation}>
                  <li className={scssShowStation.for}>{forStations[6]}<span className={scssShowStation.for2}>方面</span></li>
                  <li className={scssShowStation.class}>{forStationsEn[6]}</li>
                  <li className={scssShowStation.class}>{trainClass[0]}</li>
                </ul>
                </div>
                </div>)
              }
              
              {stationsId.search(18) !== -1 &&
              (<div>
               <div className={scssShowStation.stationInfoGreen}>
                <ul className={scssShowStation.showStation}>
                  <li className={scssShowStation.for}>{forStations[7]}<span className={scssShowStation.for2}>方面</span></li>
                  <li className={scssShowStation.class}>{forStationsEn[7]}</li>
                  <li className={scssShowStation.class}>{trainClass[0]}</li>
                </ul>
               </div>
              </div>)
              }
              
              {stationsId.search(19) !== -1 &&
                (<div>
                 <div className={scssShowStation.stationInfoLightBlue}>
                  <ul className={scssShowStation.showStation}>
                    <li className={scssShowStation.for}>{forStations[8]}<span className={scssShowStation.for2}>方面</span></li>
                    <li className={scssShowStation.class}>{forStationsEn[8]}</li>
                    <li className={scssShowStation.class}>{trainClass[1]}</li>
                  </ul>
                  </div>
                  </div>)
                }

              <ul>
                <li>{trackNum}番ホーム</li>
                <li>{position}</li>
                <li>{positionColor}色乗車位置</li>
              </ul>
            </div>


            </>
          )
          }
        })}
      </>
    );
};