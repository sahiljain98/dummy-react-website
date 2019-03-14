import React, { Component } from 'react';

import {PortFolioList} from '../data/portfolioList';

import { Link,Route } from 'react-router-dom';

import PortFolioDetail from './portfolioDetail';
import Portfolio from './portfolio'; 


export default (props) => {
    let portfolioUrl= PortFolioList.map((portfolio)=>{
        return <Route path={`/portfolio/${portfolio.url}`}  render={()=><PortFolioDetail {...portfolio}/>}/>
    })

    return (
        <React.Fragment>
            <Route path={"/portfolio"} exact render={()=><Portfolio {...props}/>}/>
           {portfolioUrl}
        </React.Fragment>
    );
}
