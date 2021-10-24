import axios from "axios"
import { useState, useEffect } from "react"
import Loading from "./components/Loading.component"
import Container from "./pages/Container"

const weatherApi = {
  key: '31fa89c04d6041b95b25669e5a8e3393',
  url: 'https://api.openweathermap.org/data/2.5/onecall?'
}

const cityInfo = [
  {
    lat: -33.8679,
    lon: 151.2073,
    name: 'SYDNEY'
  },
  {
    lat: 35.6895,
    lon: 139.6917,
    name: 'TOKYO'
  },
  {
    lat: 43.7001,
    lon: -79.4163,
    name: 'TORONTO'
  }
]

const App = () => {
  const [isLoading, setLoading] = useState(true)
  const [cityData, setCityData] = useState({})
  const [cityIndex, setCityIndex] = useState(2)

  useEffect(() => {
    axios.get(`${weatherApi.url}lat=${cityInfo[cityIndex].lat}&lon=${cityInfo[cityIndex].lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${weatherApi.key}`)
      .then(res => {
        setCityData(res.data)
        setLoading(false)
      })
  }, [cityIndex])

  if (isLoading) {
    return <div className="App flex justify-center items-center bg-zumthor"><Loading /></div>;
  }
  return (
    <div className="App flex justify-center items-center bg-zumthor py-3 lg:py-12">
      <main className='lg:w-5/12'>
        <nav className="flex flex-row items-center">
          <ul className='flex flex-row items-center font-montserrat text-center gap-x-4 md:gap-x-8 pt-4 md:pt-16 px-4 mx-auto text-2xl lg:text-3xl'>
              {cityInfo.map((city, index) => (
                <li key={index} onClick={() => {setCityIndex(index)}} className={'cursor-pointer select-none ' + (cityIndex === index ? 'font-semibold text-malibu' : 'font-thin')}>{city.name}</li>  
              ))}
          </ul>
        </nav>
        {cityData ? <Container cityData={cityData} /> : <Loading />}
      </main>
    </div>
  );
}

export default App;
