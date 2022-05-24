
import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GitHubContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUser } from '../../context/github/GitHubActions';

 function UserSearch() {
     const [text, setText] = useState("")
     const {dispatch} = useContext(GithubContext); 
     const {setAlert} = useContext(AlertContext);

     const handleChange = (e) => setText(e.target.value);

     const handleSubmit = async(e) =>{
        e.preventDefault();
        if(text===''){
            setAlert("Please enter a login to search",'error')
        }else {
            dispatch({type:"SET_LOADING"})
            const users = await searchUser(text);
            dispatch({type:'GET_USERS',payload:users})
            setText('');
        }
     }  



   return (
     <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        <div>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input rounded input-lg text-black" placeholder='search' value={text} onChange={handleChange} />
                        <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Search</button>
                    </div>
                </div>
            </form>
        </div>
        <div>
            <button className="rounded-l-none btn btn-lg bt-" onClick={()=>dispatch({type:'CLEAR_USERS'})}  >
                Clear Search
            </button>  
        </div>     
    </div>
   )
 }
 
 export default UserSearch 