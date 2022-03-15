
import { Link } from "react-router-dom";

function UserItem({user}) {

  //const {getUser}  = useContext(GithubContext); 

  return (
    <div className="card card-compact bg-base shadow">
        <div className="flex-row items-center space-x-4 card-body sm:flex-column justify-between">
            <div>
                <img src={user.avatar_url} alt='Profile' className="rounded-full shadow w-14 h-14"/>
            </div>
            <h2 className="card-title">
               {user.login}
            </h2>
            <Link className="item-link text-base-content btn-outline btn-accent text-white-900 px-3 py-1 btn btn-sm rounded flex-end" to={`user/${user.login}`} >Visit Profile</Link>
        </div>
    </div>
  )
}

export default UserItem