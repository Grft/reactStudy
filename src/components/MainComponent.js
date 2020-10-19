import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {DISHES} from "../shared/dishes";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";

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

function HomePage() {
    return (
        <Home
            dish={DISHES.filter((dish) => dish.featured)[0]}
            promotion={PROMOTIONS.filter((promo) => promo.featured)[0]}
            leader={LEADERS.filter((leader) => leader.featured)[0]}
        />
    );
}

function Main() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={() => HomePage()} />
                <Route exact path='/menu' component={() => <Menu dishes={DISHES} />} />
                <Route exact path='/contactus' component={() => <Contact />} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;