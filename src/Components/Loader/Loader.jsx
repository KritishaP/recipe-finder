import loader from "../../assets/loader.json"
import Lottie from 'lottie-react'

const Loader = () => {
  return (
    <div className='container w-80 mx-auto'>
      <Lottie animationData={loader} />
    </div>
  )
}

export default Loader