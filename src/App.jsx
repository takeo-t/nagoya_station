import React, { useState } from 'react';
// import { SerchedStations } from './components/SerchedStations';
// import { ShowStation } from './components/ShowStation';
import StationsData from './StationsData.json';


const stations = StationsData.StationsData;
console.log(stations);

export const App = () => {
  const [ showStations, setShowStations ] = useState(stations);//初期値は配列stations
  const [ inputValue, setInputValue ] = useState();


  //検索欄への入力値をハンドリング
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    search(event.target.value)//eventのe
  }

  //検索欄への入力値での絞り込み
  const search = (value) => {
    //検索欄への入力がからの場合は早期return
    if (value === ""){
      setShowStations(stations);
      return;
    }
    const serchedStations = stations.filter(//フィルター関数は条件に一致する値のみ配列の中から取り出すことができる
      (station) => Object.values(station).filter(
        (item) =>
        item !== undefined &&
        item !== null &&
        item === station.stationName &&
        item === value &&
        item.toUpperCase().indexOf(value.toUpperCase()) !== -1
      ).length > 0
    );
    setShowStations(serchedStations);//与える引数はserchedStations　serchedStationsには検索結果の配列が入っている。
  }

  return (
    <>
    <h1>名鉄名古屋駅乗車位置検索</h1>
    <div>
        <h4>降りる駅を入力</h4>
        <input type="text" value={inputValue} placeholder="駅名を入力" onChange={handleInputChange}/>
        <button onClick={search} >検索</button>
      </div>
    {showStations.map((station, index) => {
      if(showStations.length >= 2){
      return null;
      } else {
      return (
        <div key={index}>
          <p>{station.stationName}駅（{station.stationNum}）へ向かう時の並び位置</p>
          <ul>
            <li>{station.trackNum}番ホーム</li>
            <li>{station.position}</li>
            <li>{station.positionColor}色乗車位置</li>
          </ul>
        </div>
      )
      }
    })}
  </>
  );
};