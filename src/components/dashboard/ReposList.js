import React, { Fragment } from 'react';

const ReposList = ({ repos }) => {
    const renderedList = repos.map(repo => {
        return (
            <tr key={repo.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <a href={repo.owner.avatar_url} target="_blank" rel='noopener noreferrer'>
                            <img className="h-10 w-10 rounded-full hover:opacity-50" src={repo.owner.avatar_url} alt={repo.owner.login} />
                        </a>
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 hover:text-gray-500">
                            <a href={repo.owner.html_url} target="_blank" rel='noopener noreferrer'>
                                {repo.owner.login}
                            </a>
                        </div>
                        <div className="text-sm text-gray-500">
                            {repo.owner.html_url}
                        </div>
                    </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 hover:text-gray-500">
                        <a href={repo.html_url} target="_blank" rel='noopener noreferrer'>    
                            {repo.name}
                        </a>
                    </div>
                    <div className="text-sm text-gray-500 ">  
                        {repo.html_url}
                    </div>
                </td>
            </tr>
        )
    });

    return (
        <Fragment>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Repository
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {renderedList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default ReposList;