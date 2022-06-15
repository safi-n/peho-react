import {Fragment} from 'react'
import MainBanner from '../assets/XDFiles/MainBanner.jpg'

const HomePage = () => {

  return (
      <Fragment>
        <div className='heroBg min-h-screen w-screen flex justify-center items-center '>
          <div className='py-auto flex flex-row space-x-96'>
            <div className="textBox box-border h-60 w-96 p-4 border-4 my-auto">
              <h2 className='text-white text-4xl mb-12'>WHAT IS PEHO?</h2>
              <p className='text-white font-light'>PEHO is a Non governmental Non- profitable and Non- for profit organization with an Non independent legal identity. PEHO Aims to serve people and contribute  into Afghanistan’s rehabilitation.</p>
            </div>
            <div className="designBox box-border h-60 w-96 p-4 border-4 my-auto ">
              <div className="mockupBanner">
                <div className="videoBox">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
  )
}

export default HomePage

