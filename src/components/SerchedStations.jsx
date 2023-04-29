import React from "react";

export const SerchedStations = (props) => {
    const { inputValue, onChange, showStations, search, clear} = props;
    return (
        <>
        <div>
            <h4>降りる駅を入力</h4>
            <input type="text" value={inputValue} placeholder="駅名を入力" onChange={onChange}/>
            <button onClick={search}>検索</button>
            <button onClick={clear}>クリア</button>
          </div>
        {showStations.map((station, index) => {
          if(showStations.length >= 2){
          return null;
          } else {
          const { stationName,stationNum,trackNum,position,positionColor} = station;
          return (
            <div key={index}>
              <p>{stationName}駅（{stationNum}）へ向かう時の並び位置</p>
              <ul>
                <li>{trackNum}番ホーム</li>
                <li>{position}</li>
                <li>{positionColor}色乗車位置</li>
              </ul>
            </div>
          )
          }
        })}
      </>
    );
};