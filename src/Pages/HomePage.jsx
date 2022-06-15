import {Fragment} from 'react'
import MainBanner from '../assets/XDFiles/MainBanner.jpg'
import VideoHero from '../assets/PNG/videoHero.png'

const HomePage = () => {

  return (
      <Fragment>
        {/* HERO BANNER */}
        <div className='heroBg min-h-screen w-screen flex justify-center items-center'>
          <div className='py-auto flex flex-row space-x-4  min-h-fit w-screen'>
            <div className="textBox my-auto">
              <h2 className='text-white text-4xl mb-12'>WHAT IS PEHO?</h2>
              <p className='text-white font-light'>PEHO is a Non governmental Non- profitable and Non- for profit organization with an Non independent legal identity. PEHO Aims to serve people and contribute  into Afghanistan’s rehabilitation.</p>
            </div>
            <div className="designBox my-auto ">
              <div className="mockupBanner p-28">
                <div className="videoBox bg-cover ">
                  <img src={VideoHero} className='mainVideo' alt="Video hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </Fragment>
  )
}

export default HomePage

