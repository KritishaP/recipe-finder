import Error from "../../assets/error.json"
import Lottie from "lottie-react"

const ErrorPage = () => {
  return (<>
    <div className="container mx-auto  ">
      <Lottie animationData={Error} />
    </div>
  </>)
}
export default ErrorPage