import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const PageOne = () => {
    return <div><Link to="/pagetwo">gotopage 2</Link>PageOne</div>
}

const PageTwo = () =>{
    return <div><Link to="/">gotopage 1</Link>PageTwo</div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                <Route path="/" exact component={PageOne} />                
                <Route path="/pagetwo" exact component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;