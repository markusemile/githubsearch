import {useContext} from 'react'
import GithubContext from '../../context/github/GitHubContext'
import RepoItem from './RepoItem';


function RepoList() {
    const {repos} = useContext(GithubContext);

    // console.log(repos);
  return (
    <div className='repo-list my-5 flex flex-row flex-wrap '> 
        <h1 className='text-4xl mb-5 w-full'>Latest Respositories</h1>
        {
            repos.map((repo)=>(                
                <RepoItem key={repo.id} repo={repo} />
            ))
        }
      
    </div>
  )
}

export default RepoList