import React, {useState} from 'react';
import Home from "./HomeComponent";
import {Redirect, Route, Switch} from 'react-router-dom';
import Menu from './MenuComponent';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {DISHES} from "../shared/dishes";

/*
class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}*/

function Main() {
    const [dishes] = useState(DISHES);

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={() => <Home />} />
                <Route exact path='/menu' component={() => <Menu dishes={dishes} />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;