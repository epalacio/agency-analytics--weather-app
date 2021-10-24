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
        <div className='border-b-6 border-white flex flex-col justify-center items-center py-12 rounded-t-lg'>
            <p className='font-montserrat font-thin text-2xl'>Today</p>
            <div className='flex flex-row items-center gap-x-4'>
                <img className='max-w-weatherImg' src={images[cityData.daily[0].weather[0].main]} alt={cityData.daily[0].weather[0].main} />
                <div className='py-4'>
                    <p className='font-teko text-6xl'>{Math.round(cityData.daily[0].temp.day)}&deg;</p>
                    <p className='font-montserrat font-thin text-2xl'>{cityData.daily[0].weather[0].main}</p>
                </div>
            </div>
        </div>
    );
}
 
export default MainCard;