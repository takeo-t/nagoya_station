import React, { useState } from 'react';
import { SearchedStations } from './components/SearchedStations';
import StationsData from './StationsData.json';
import App2 from './App2.module.scss';

const stations = StationsData.StationsData;


export const App = () => {

  const [ showStations, setShowStations ] = useState(stations);//初期値は配列stations
  const [ inputValue, setInputValue ] = useState('');
  //検索欄への入力値をハンドリング
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    }
  const clear = () => {
      (setInputValue(''));
     }
    //検索欄への入力値での絞り込み
    const search = (value) => {//検索ボタンが押された際のみsearch関数が呼ばれる。
      //検索欄への入力がからの場合は早期return
      if(value === ""){
        setShowStations(stations);
          return
      } else {
        const searchedStations = stations.filter(
          (station) =>
            station.stationName !== undefined &&
            station.stationName !== null &&
            station.stationName.toUpperCase().indexOf(value.toUpperCase()) !== -1
        );
      setShowStations(searchedStations);//与える引数はserchedStations　serchedStationsには検索結果の配列が入っている。
        };
        console.log(showStations);
    };
  return (
    <>
    <h1 className={App2.header}>名鉄名古屋駅乗車位置検索</h1>
    <SearchedStations
    inputValue={inputValue}
    onChange={handleInputChange}
    showStations={showStations}
    search={() => search(inputValue)}
    clear={clear}
    />
    {showStations.length === 0 && (<p style ={{color: 'red'}}>名鉄線以外の駅は非対応です。</p>)}
    </>
  );
  }
