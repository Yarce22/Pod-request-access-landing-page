import spotify from '../assets/desktop/spotify.svg'
import apple from '../assets/desktop/apple-podcast.svg'
import google from '../assets/desktop/google-podcasts.svg'
import pocket from '../assets/desktop/pocket-casts.svg'

const MobileBody = () => {
  return (
    <article>
      <h1 className="text-3xl text-title text-center font-extralight leading-10">PUBLISH YOUR PODCASTS <span className=" text-clear text-center font-extralight">EVERYWHERE.</span></h1>

      <p className="py-10 text-[21px] text-center text-body font-light">
        Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
      </p>

      <picture className='flex '>
        <img src={spotify} alt="spotify-logo" />
        <img src={apple} alt="apple-logo" />
        <img src={google} alt="google-logo" />
        <img src={pocket} alt="pocket-logo" />
      </picture>
    </article>
  );
}

export default MobileBody;