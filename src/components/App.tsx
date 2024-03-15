import Logo from './Logo'
import MobileBody from './MobileBody';
import '../styles/App.css'

function App() {
  return (
    <>
      <section className='w-full h-[100vh] bg-background-mb bg-cover'>
        <div className='w-full h-[100vh] px-12 bg-background opacity-90'>
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
