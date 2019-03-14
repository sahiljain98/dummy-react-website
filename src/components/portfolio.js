import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import { PortFolioList } from '../data/portfolioList';

export default (props) => {

   let portfolio =  PortFolioList.map((portfolio) => {
        return (
            <div className="portfolio-container">
                <Link to={`/portfolio/${portfolio.url}`}>
                    <div className="portfolio-image" style={{backgroundImage:`url(${portfolio.img_src})`}}></div>
                </Link>
                <h3>{portfolio.name}</h3>
            </div>
        )
    });
    return (
        <div className="main-content">
        <Link  className={'back'} to='/'>back</Link>
        <h2>{props.title}</h2>
            <div className="container">
                {portfolio}
            </div>
        </div>
    );
}
