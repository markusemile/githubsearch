import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext();

export const GithubProvider = ({children})=>{


    const initialState = {
        users:[],
        user:{},
        repos:[],
        loadingMsg:'',
        loading:false 
    }

    const [state,dispatch] = useReducer(githubReducer, initialState);

   
  
    const clearUsers = () => dispatch({type:"CLEAR_USERS"});

    const setUser = (user) => dispatch({type:'CURRENT_USER',payload:user});

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
        clearUsers,
        setUser,
        }}>
            {children}
        </GithubContext.Provider>
} 

export default GithubContext