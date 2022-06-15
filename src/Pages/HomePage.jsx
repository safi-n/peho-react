import {Fragment} from 'react'
import MainBanner from '../assets/XDFiles/MainBanner.jpg'

const HomePage = () => {
  return (
      <Fragment>
        <div className='align'>
          <img src={MainBanner} alt="Hero Banner"/>
        </div>
      </Fragment>
  )
}

export default HomePage

