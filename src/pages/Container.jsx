import MainCard from '../components/MainCard.component'
import SmallCard from '../components/SmallCard.component'

const Container = ({cityData}) => {
    return (
        <section className=''>
            <MainCard 
                cityData={cityData}
            />
            <SmallCard
                cityData={cityData}
            />
        </section>
    );
}
 
export default Container;


