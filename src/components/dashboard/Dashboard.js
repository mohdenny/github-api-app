import React, { Fragment, useEffect, useState } from 'react';
import ReposList from '../dashboard/ReposList';
import SearchBar from '../layout/SearchBar';
import { getGithubRepos } from '../../actions/github';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ github: { repos }, getGithubRepos, match }) => {
    const [username, setUsername] = useState('mohdenny');

    useEffect(() => {
        if(match.params.id) {
            setUsername(match.params.id)
        }

        getGithubRepos(username);
    }, [getGithubRepos, match.params.id, username]);

    return (
        <Fragment>
            <SearchBar />
            <ReposList repos={repos} />
        </Fragment>
    )
};

Dashboard.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    github: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    github: state.github
});

export default connect(mapStateToProps, { getGithubRepos })(Dashboard);