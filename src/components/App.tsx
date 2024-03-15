import Logo from './Logo'
import MobileBody from './MobileBody';
import host from '../assets/mobile/image-host.jpg';
import '../styles/App.css'

function App() {
  return (
    <>
      <section className='relative w-full h-[100vh] bg-cover'>
        <img className="absolute w-full h-[100vh] z-[-1]" src={host} alt="image-host" />
        <div className='absolute w-full h-[100vh] px-12 bg-background opacity-90'>
          <header className='flex items-center justify-center w-full h-60'>
            <Logo />
          </header>
          <MobileBody />
        </div>
      </section>
    </>
  )
}

export default App
