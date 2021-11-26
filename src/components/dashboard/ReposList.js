import React, { Fragment, useState } from 'react';

const ReposList = ({ repos }) => {
    const initialState = {
        visible: 2,
    }

    const [state, setState] = useState(initialState);

    const loadMore = () => {
        setState({visible: state.visible + 4});
    }

    console.log(repos);

    const renderedList = repos.slice(0, state.visible).map((repo => {
        return (
            <div key={repo.id} className="p-2 flex items-center justify-between h-16 border-2 rounded-lg w-full max-w-2xl shadow-lg space-x-4 bg-white">
                <div className="flex justify-center items-center h-full w-full px-2">
                    <a href={repo.owner.avatar_url} target="_blank" rel='noopener noreferrer'>
                        <img className="h-10 w-10 rounded-full hover:opacity-50" src={repo.owner.avatar_url} alt={repo.owner.login} />
                    </a>
                </div>
                <div className="flex justify-center items-center h-full w-full px-2 font-medium text-gray-900 text-sm hover:text-gray-500">
                    <a href={repo.owner.html_url} target="_blank" rel='noopener noreferrer'>
                        <p>{repo.owner.login}</p>
                    </a>
                </div>
                <div className="flex justify-center items-center h-full w-full px-2 text-gray-900 text-sm hover:text-gray-500">
                    <a href={repo.html_url} target="_blank" rel='noopener noreferrer'>    
                        <p className="break-all">{repo.name}</p>
                    </a>
                </div>
                <div className="sm:flex items-center justify-center hidden h-full w-full px-2 text-gray-900 text-sm">
                    <p>Stars: {repo.stargazers_count}</p>
                </div>
                <div className="sm:flex items-center justify-center hidden h-full w-full px-2 text-gray-900 text-sm">
                    <p>Watchers: {repo.watchers_count}</p>
                </div>
                <div className="sm:flex items-center justify-center hidden h-full w-full px-2 text-gray-900 text-sm">
                    <p>Forks: {repo.forks_count}</p>
                </div>
            </div>
        )
    }));

    return (
        <Fragment>
            <div className="flex flex-col space-y-4 justify-center items-center">
                {   
                    repos && repos.length > 0 ?
                        renderedList 
                        
                    :
                        <div className="py-2 h-screen">
                            <div className="flex justify-center items-center h-full w-full">
                                <div className="italic text-sm">No results</div>
                            </div>
                        </div>
                }

                {   
                    state.visible < repos.length && <button onClick={loadMore} type="button" className="load-more px-2 rounded-xl border-2 border-gray-300 hover:bg-gray-300">Load more</button>
                }
            </div>
        </Fragment>
    )
};

export default ReposList;