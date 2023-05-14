import React, { useState } from 'react';
import { SerchedStations } from './components/SerchedStations';
import StationsData from './StationsData.json';
import App2 from './App2.module.scss';
// import { ShowStation } from './components/ShowStation';

const stations = StationsData.StationsData;

export const App = () => {

  const [ showStations, setShowStations ] = useState(stations);//初期値は配列stations
  const [ inputValue, setInputValue ] = useState('');
  //検索欄への入力値をハンドリング
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    }
  const clear = () => {
      return (setInputValue(''));
     }
    //検索欄への入力値での絞り込み
    const search = (value) => {//検索ボタンが押された際のみsearch関数が呼ばれる。
      //検索欄への入力がからの場合は早期return
      if (value !== stations){
        setShowStations(stations);
          return(
            <p>存在しない駅</p>
          );
      } else {
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
        };
    };

  return (
    <>
    <h1 className={App2.header}>名鉄名古屋駅乗車位置検索</h1>
    <SerchedStations
    inputValue={inputValue}
    onChange={handleInputChange}
    showStations={showStations}
    search={() => search(inputValue)}
    clear={clear}
    />
    </>
  );
  }
