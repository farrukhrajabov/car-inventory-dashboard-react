import Background from '../assets/images/car.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 text-3xl font-sans bg-opacity-50 text-white rounded'>Welcome to My Car Inventory</h3>
        </div>
    </div>
  )
}

export default Home