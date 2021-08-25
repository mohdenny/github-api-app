import React, { Fragment } from 'react';
import SearchBar from '../layout/SearchBar';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                                <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    <SearchBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
};

export default Navbar;