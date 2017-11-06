import React from 'react';


export default function Board(props) {
    return (
        <div className="board">
            {props.title}
        </div>
    );
};

Board.defaultProps = {
    title: 'HOT or COLD'
};

