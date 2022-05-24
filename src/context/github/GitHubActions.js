import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
// const myHeaders = new Headers()
// myHeaders.get('Access-Control-Allow-Origin', '*');

const github = axios.create({
    baseURL: GITHUB_URL,
    method: 'get',
    auth:`${GITHUB_TOKEN}`    
});
 // search users
 export const searchUser = async(text='0') =>{
    const params = new URLSearchParams({
        q: text
    })  
    const response = await github.get('/search/users?'+params); 
    return response.data.items;
} 


export const getUserAndRepos = async(login)=>{

    const [user,repos] = await Promise.all([
        await github.get(`/users/${login}`),
        await github.get(`/users/${login}/repos`)
    ])
    return {user:user.data,repos:repos.data}
}


    
        
    