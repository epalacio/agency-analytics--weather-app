import thunderstorm from '../img/Thunderstorm.svg'
import drizzle from '../img/Drizzle.svg'
import rain from '../img/Rain.svg'
import hail from '../img/Hail.svg'
import snow from '../img/Snow.svg'
import clear from '../img/Clear.svg'
import clouds from '../img/Clouds.svg'


const SmallCard = ({cityData}) => {

    const images = {
        'Thunderstorm': thunderstorm,
        'Rain': rain,
        'Drizzle': drizzle,
        'Hail': hail,
        'Snow': snow,
        'Clear': clear,
        'Clouds': clouds
    }

    const dayConverter = (day) => {
        const utcSeconds = day
        const date = new Date(0)
        date.setUTCSeconds(utcSeconds)
        const dateString = date.toString()
        return dateString.substring(0, 3)
    }

    const weather = cityData.daily.slice(1, 5)
    const daysOfTheWeek = cityData.daily.slice(1, 5).map((day) => (dayConverter(day.dt)))

    const updatedWeather = weather.map((day, index) => {
       const newerKey = Object.assign({}, day)
       newerKey.dayOfTheWeek = daysOfTheWeek[index]
       return newerKey
    })

    return (
        <div className='flex flex-col lg:flex-row justify-between'>
            {updatedWeather.map(day => (
                <div className='flex flex-row lg:flex-col items-center justify-around px-4 mx-auto py-6 w-full border-b-6 lg:border-b-0 last:border-b-0 lg:border-r-6 lg:last:border-r-0 border-white' key={updatedWeather.indexOf(day)}>
                    <p className='font-montserrat font-thin text-2xl'>{day.dayOfTheWeek}</p>
                    <img className='max-w-smallWeatherImg py-3' src={images[day.weather[0].main]} alt={day.weather[0].main} />
                    <p className='font-teko text-4xl'>{Math.round(day.temp.day)}&deg;</p>
                    {/* <p>{day.weather[0].main}</p> */}
                </div>
            ))}
        </div>
    );
}
 
export default SmallCard;