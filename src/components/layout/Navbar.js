import React, { Fragment } from 'react';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="bg-gray-100 shadow-lg">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center items-center h-16">
                        <div className="font-bold text-2xl">GITREPOS</div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
};

export default Navbar;