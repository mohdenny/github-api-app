import React, { Fragment, useState } from 'react';
import { getGithubRepos } from '../../actions/github';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SearchBar = ({ getGithubRepos }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        getGithubRepos(term);
    };

    return (
        <Fragment>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-xs">
                    <form className="px-4 py-2" onSubmit={onSubmit}>
                        <div className="flex items-center">
                            <input 
                                className='rounded-lg border-gray-400 hover:border-gray-500 appearance-none border w-full py-2 px-3 text-gray-700 leading-tight mb-3 focus:outline-none focus:shadow-outline'
                                type='text' 
                                value={term}
                                placeholder="Search github username ..."
                                onChange={(e) => setTerm(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
};

SearchBar.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    github: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    github: state.github
});

export default connect(mapStateToProps, { getGithubRepos })(SearchBar);