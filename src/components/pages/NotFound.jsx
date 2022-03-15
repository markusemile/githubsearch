import {FaHome} from 'react-icons/fa'
import  {Link} from "react-router-dom"
function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
              Oops ! 
           </h1>
           <p>
             <p className="text-3xl mb-5">404 - Page not found...</p>
           </p> 
           <Link to="/" className='btn btn-primary btn-lg mt-5'>
             <FaHome className='mr-2 ' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound