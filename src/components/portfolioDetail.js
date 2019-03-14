import React, { Component } from 'react';

import { Link } from 'react-router-dom';


export default (props) => {

    return (
        <div className="main-content">
            <Link className={'back'} to='/portfolio'>back</Link>
            <div className="container">
                <div className="image-profile"  style={{backgroundImage:`url(${props.img_src})`}}></div>
                <h2>{props.name}</h2>
                {/* <div>{`url(${props.img_src})`}</div> */}
                <p>{props.description}</p>
            </div>
        </div>
    );
}
