import logo from '../assets/desktop/logo.svg';

const Logo = () => {
  return (
    <>
      <div className="flex gap-3">
      <img className='w-52' src={logo} alt="logo" />
      </div>
    </>
  )
}

export default Logo