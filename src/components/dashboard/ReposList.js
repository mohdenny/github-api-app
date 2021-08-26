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
            <div key={repo.id} className="p-2 grid grid-flow-col auto-cols-max gap-4 h-16 border rounded-lg shadow mb-4">
                <div className="flex flex-col justify-center items-center">
                    <a href={repo.owner.avatar_url} target="_blank" rel='noopener noreferrer'>
                        <img className="h-10 w-10 rounded-full hover:opacity-50" src={repo.owner.avatar_url} alt={repo.owner.login} />
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center font-medium text-gray-900 text-sm hover:text-gray-500">
                    <a href={repo.owner.html_url} target="_blank" rel='noopener noreferrer'>
                        {repo.owner.login}
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center text-gray-900 text-sm hover:text-gray-500">
                    <a href={repo.html_url} target="_blank" rel='noopener noreferrer'>    
                        {repo.name}
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center text-gray-900 text-sm">
                    Stars: {repo.stargazers_count}
                </div>
                <div className="flex flex-col justify-center items-center text-gray-900 text-sm">
                    Watchers: {repo.watchers_count}
                </div>
                <div className="flex flex-col justify-center items-center text-gray-900 text-sm">
                    Forks: {repo.forks_count}
                </div>
            </div>
        )
    }));

    return (
        <Fragment>
            <div className="flex flex-col justify-center items-center">
                {   
                    repos && repos.length > 0 ?
                        renderedList 
                        
                    :
                        <div className="py-2 h-screen">
                            <div className="flex flex-col justify-center items-center h-full w-full">
                                <div className="italic text-sm">No results</div>
                            </div>
                        </div>
                }

                {   
                    state.visible < repos.length && <button onClick={loadMore} type="button" className="load-more">Load more</button>
                }
            </div>
        </Fragment>
    )
};

export default ReposList;