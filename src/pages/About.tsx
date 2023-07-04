import Background from '../assets/images/carvette.jpg'
function About() {
  return (
    <div 
    style={{ backgroundImage: `url(${ Background })`}} 
    className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
    >
      <div className='flex place-items-center h-screen'>
        <h3 className='p-5 text-3xl font-serif bg-opacity-50 text-yellow-400 rounded'>I would like to have the collection of my dream car, but unfortunately, I do not have a money!</h3>
      </div>
  </div>
   
  )
}

export default About