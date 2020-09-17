import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import SignIn from './SignIn.js';
import './styles.scss';

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ""
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(event) {
        this.setState({searchText: event.target.value});
    }

    handleSubmit(event) {
        console.log("Searching...." + this.state.searchText);

    }

    render() {
        return (
            <div>
                <nav>
                    <div className="LogoDiv">
                        <a href="/"><img className="Logo" src="logo.png" alt="Logo"></img></a>
                    </div>
                    <form onSubmit={this.handleSubmit} method="get" action="/search"> 
                        <input type="text" value={this.state.searchText} placeholder="Search here..." onChange={this.onChange}></input>
                        <button type="submit">Search</button>
                    </form> 
                    <a className="SignIn" href="/signin">Sign in</a>
                    <a className="Wishlist" href="/wishlist">Wishlist</a>
                    <a className="Cart" href="/cart">Cart</a>
                </nav>

                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/signin">  
                            <SignIn />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default NavigationBar;