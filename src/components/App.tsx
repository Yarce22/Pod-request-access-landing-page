import Logo from './Logo'
import MobileBody from './MobileBody';
import host from '../assets/mobile/image-host.jpg';
import '../styles/App.css'

function App() {
  return (
    <>
      <section className='relative w-full h-[100vh]'>
        <img className="absolute w-full h-full z-[-1]" src={host} alt="image-host" />
        <div className='absolute flex flex-col justify-center items-center w-full h-full py-14 px-10 bg-background opacity-90'>
          <Logo />
          <MobileBody />
        </div>
      </section>
    </>
  )
}

export default App
