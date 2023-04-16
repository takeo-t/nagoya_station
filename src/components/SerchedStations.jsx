import React from "react";

export const SerchedStations = (props) => {
    const { inputValue, onChange} = props;
    return (
   <>    
   {/*フリーキーワード検索フォーム */}
   <div>
      <h3>あなたの向かう駅は？</h3>
      <input type="text" placeholder="駅名を入力" value={inputValue} onChange={onChange}/>
      {/* <button onClick={SerchedStations}>検索</button> */}
   </div>
   </>
    );
};