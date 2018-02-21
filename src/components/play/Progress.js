import React from 'react';

class Progress extends React.Component {

    componentDidUpdate() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="progress-bar">
                <div className="progress" style={{width: "20%"}}></div>
                <div className="progress-buttom" style={{left: "70px"}}></div>
            </div>
        );
    }
}

export default Progress