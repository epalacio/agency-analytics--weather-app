import loading from '../img/loading.svg'

const Loading = () => {
    return (
        <div className='flex items-center justify-center w-screen h-screen'>
            <img className='max-w-loader' src={loading} alt='Loading dots animation' />
        </div>
    );
}
 
export default Loading;