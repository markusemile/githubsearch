import {GoGistSecret,GoHome} from 'react-icons/go'
import { Link } from 'react-router-dom';

function UserNotFound() {
  return (
    <div className='not-found-user'>
        <div className="logo">
            <GoGistSecret />
        </div>
        <p>
        User Not Found...
        </p>
        <Link className='btn btn-secondary  mt-5 w-48 text-xl' to="/"><GoHome className='font'/></Link>
    </div>
  )
}

export default UserNotFound