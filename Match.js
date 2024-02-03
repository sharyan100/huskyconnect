import React from 'react';
import { Link } from 'react-router-dom';

const Match = () => {
    return (
        <div className="matched-container">
            <h1 className="text-center pt-5">You got a new match!</h1>
            <Link to="/">
                <button type="button" className="btn btn-primary">Continue Swiping</button>
            </Link>
            <Link to="/matches">
                <button type="button" className="btn btn-primary">Go to Chat</button>
            </Link>
        </div>
    );
};

export default Match;
