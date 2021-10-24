import MainCard from '../components/MainCard.component'
import SmallCard from '../components/SmallCard.component'

const Container = ({cityData}) => {
    return (
        <section className='bg-zumthor border-8 border-white rounded-lg shadow-lg my-2 lg:my-8' style={{'border': '6px solid #fff'}}>
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


