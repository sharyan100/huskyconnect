import React from 'react';
import { Link } from 'react-router-dom';

const Match = () => {
    return (
        <div className="matched-container">
            <h1 className="text-center pt-5">Yay, you cared!</h1>
            <Link to="/">
                <button type="button" className="btn btn-primary">Continue Browsing</button>
            </Link>
            <Link to="/matches">
                <button type="button" className="btn btn-primary">Go to Chat</button>
            </Link>
        </div>
    );
};

export default Match;