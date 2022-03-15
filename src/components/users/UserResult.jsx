
import { useEffect, useContext } from 'react';
import Spinne from '../shared/Spinner';
import UserItem from './UserItem';
import GithubProvider  from '../../context/github/GitHubContext';
import { searchUser } from '../../context/github/GitHubActions';

function UserResult() {

    const {loading,users,dispatch} = useContext(GithubProvider);

    useEffect(()=>{
      dispatch({type:'SET_LOADING'})
      const homeData = async()=>{
        const response = await searchUser();
        dispatch({type:'GET_USERS',payload:response})
      }
      homeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


 if(!loading){
      return (
        <div className="userRequest">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-2 ">      
            {users.map((user,index)=>
              (
               <UserItem user={user} key={index} />
              )
            )}
          </div>
        </div>
      )
}else
  {
  return <Spinne />
  }
}

export default UserResult