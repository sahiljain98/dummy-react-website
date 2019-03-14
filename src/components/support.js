import React, { Component } from 'react';

export default (props) => {
    return (
        <div className="main-content">
            <div className="container">
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}
