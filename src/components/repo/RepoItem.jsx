import React from 'react'
import {FaLink,FaEye,FaInfo,FaUtensils,FaStar} from 'react-icons/fa'

function RepoItem({repo}) {
  
  return (
    <div className="repo-item  stat ">
      <div className="card shadow-xl">
        <div className="card-body">
        <a href={repo.svn_url} target='_blank' rel='noreferrer'>
          <h1 className='card-title'>
            <FaLink/>{repo.name}
          </h1>
          </a>
        </div>
        <div className="card-actions pl-5 mb-5">
            <div className="badge badge-lg badge-info rounded-xl" title="watches"><FaEye className='mr-3'/>{repo.watchers_count}</div>
            <div className="badge badge-lg badge-success rounded-xl"><FaStar className='mr-3'/>{repo.stargazers_count}</div>
            <div className="badge badge-lg badge-error rounded-xl"><FaInfo className='mr-3'/>{repo.open_issues}</div>
            <div className="badge badge-lg badge-warning rounded-xl"><FaUtensils className='mr-3'/>{repo.forks}</div>
        </div>
      </div>
    </div>
  )
}

export default RepoItem