import thunderstorm from '../img/Thunderstorm.svg'
import drizzle from '../img/Drizzle.svg'
import rain from '../img/Rain.svg'
import hail from '../img/Hail.svg'
import snow from '../img/Snow.svg'
import clear from '../img/Clear.svg'
import clouds from '../img/Clouds.svg'

const MainCard = ({cityData}) => {

    const images = {
        'Thunderstorm': thunderstorm,
        'Rain': rain,
        'Drizzle': drizzle,
        'Hail': hail,
        'Snow': snow,
        'Clear': clear,
        'Clouds': clouds
    }
    
    return (
        <div className=''>
            <p className=''>Today</p>
            <div className=''>
                <img className='max-w-weatherImg' src={images[cityData.daily[0].weather[0].main]} alt={cityData.daily[0].weather[0].main} />
                <div className=''>
                    <p className=''>{Math.round(cityData.daily[0].temp.day)}&deg;</p>
                    <p className=''>{cityData.daily[0].weather[0].main}</p>
                </div>
            </div>
        </div>
    );
}
 
export default MainCard;