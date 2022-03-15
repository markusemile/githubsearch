import Spine from "../../assets/images/spinner01.gif";

function Spinner() {
  return (
        <div className='grid grid-1 mx-auto text-center'>
        <img className="text-center mx-auto" width={64} alt="loading..." src={Spine} />
        <h6>Loading...</h6>
        </div>
        ) 
}

export default Spinner