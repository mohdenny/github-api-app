import React, { Fragment, useEffect, useState } from 'react';
import ReposList from '../dashboard/ReposList';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getGithubRepos } from '../../actions/github';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ github: { repos }, getGithubRepos, match }) => {
    const [username, setUsername] = useState('mohdenny');
    const [newRepo, setNewRepo] = useState();

    useEffect(() => {
        if(match.params.id) {
            setUsername(match.params.id)
        }

        getGithubRepos(username);
    }, [getGithubRepos, match.params.id, username]);

    const fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            setNewRepo(repos.concat(Array.from({ length: 5 })));
            return newRepo;
        }, 1500);
    };

    console.log(repos);
    console.log(newRepo);

    return (
        <Fragment>
            <InfiniteScroll
                dataLength={repos.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                    <ReposList repos={repos}/>
            </InfiniteScroll>
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