
import scssShowStation from '../scssShowStation.module.scss';

export const StaionSign = memo((props) => {
    const {} = props;
    return (
        <div>
            <div className={scssShowStation.stationInfoBlue}>
             <ul className={scssShowStation.showStation}>
               <li className={scssShowStation.for}>{forStations[0]}<span className={scssShowStation.for2}>方面</span></li>
               <li className={scssShowStation.class}>{forStationsEn[0]}</li>
               <li className={scssShowStation.class}>{trainClass[0]}</li>
             </ul>
             </div>
          </div>
    )
});