import { React,useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GithubContext from "../../context/github/GitHubContext"
import {useParams} from 'react-router-dom'
import Spinner from "../shared/Spinner";
import  {FaTwitter,FaUsers,FaUserFriends,FaCodepen,FaStore} from 'react-icons/fa'
import RepoList from '../repo/RepoList';
import { getUserAndRepos} from '../../context/github/GitHubActions';


// SCRIPT


function User() {
    
    const pseudo = useParams().login;
    const {user,loading,dispatch} = useContext(GithubContext);


    const {
        login,
        name,
        bio,
        type,  
        hireable, 
        html_url,
        avatar_url,
        location,
        blog,
        twitter_username,
        followers,
        following,
        public_repos,
        public_gists


    } = user;

    

    useEffect(()=>{    
        //alert();
      // dispatch({type:'SET_LOADING'})  
        const getDatas = async() => {
            const datas = await getUserAndRepos(pseudo)
            dispatch({type:'GET_USER_AND_REPOS',payload:datas}); 
        }
        getDatas()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    

    if(loading){
        return <Spinner />
    }

    return (
        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="m-3">
                    <Link to="/" className='btn btn-secondary'>Back to search</Link>
                </div>    
                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded shadow-xl card-image-full relative">
                            <figure>
                                <img src={avatar_url}  alt="user_photo" className='rounded-lg m-3'/>
                            </figure>
                            <div className="card-body justify-end">
                                <div className="card-title mb-0 absolute bottom-20">
                                    <h2 className="card-title mb-0 text-gray-900">{name!=='undefined' ? name : login}</h2>
                                </div>
                                {hireable}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="mb-6 mx-3">
                            <h1 className="text-3xl card-title">{name!=='undefined' ? name : login}
                                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                                {hireable && (<div className="ml-2 mr-1 badge badge-info">Hireable</div>)}
                            </h1>
                            <p>{bio}</p>
                            <div className='mt-4 card-actions'>
                                <a href={html_url} target='_blank' rel="noreferrer" className='rounded btn btn-outline'>
                                Visit Github profile
                                </a>
                            </div>
                        </div>
                        <div className="w-full rounded-ld shadow-md bg-base-100 stats stats-vertical md:stats-horizontal ">
                            {location && (
                            <div className="stat  place-items-center place-content-center">
                                <div className="stat-title text-md">Location</div>
                                <div className="text-lg stat-value">{location}</div>
                            </div>
                            )}
  
                            {blog && (
                            <div className="stat  place-items-center place-content-center">
                                <div className="stat-title text-md">Website</div>
                                <div className="text-lg stat-value">
                                    <a href={blog} target='_blank' rel="noreferrer" >{blog}</a>
                                </div>
                            </div>
                            )}

                            {twitter_username && (
                            <div className="stat place-items-center place-content-center">
                                <div className="stat-title text-md"><FaTwitter /></div>
                                <div className="text-lg stat-value">
                                    <a href={`https://twittercom/${twitter_username}`} target='_blank' rel="noreferrer" >{twitter_username}</a>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full rounded-ld shadow-md bg-base-100 stats mb-3 py-2 stats stats-vertical md:stats-horizontal">
                    <div className="stat place-items-center place-content-center">
                        <div className="stat-figure text-secondary"><FaUsers className='text-4xl mr-5'/></div>
                        <div className="stat-title pr-5">Follower</div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{followers}</div>
                    </div>
                    <div className="stat place-items-center place-content-center">
                        <div className="stat-figure text-secondary"><FaUserFriends className='text-4xl mr-5'/></div>
                        <div className="stat-title pr-5">Following</div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{following}</div>
                    </div>
                    <div className="stat place-items-center place-content-center">
                        <div className="stat-figure text-secondary"><FaCodepen className='text-4xl mr-5'/></div>
                        <div className="stat-title pr-5">Public Repos</div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{public_repos}</div>
                    </div>
                    <div className="stat place-items-center place-content-center">
                        <div className="stat-figure text-secondary"><FaStore className='text-4xl mr-5'/></div>
                        <div className="stat-title pr-5">Public Gists</div>
                        <div className="stat-value pr-5 text-3xl md:text-4xl">{public_gists}</div>
                    </div>
                </div>
                <div className="repo-list-container">
                <RepoList />
                </div>
            </div>
        </>    
    )
}

export default User