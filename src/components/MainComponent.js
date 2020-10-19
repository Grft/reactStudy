import React, {useState} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

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

function Main(props) {
    const [dishes] = useState(DISHES);
    const [selectedDish, setSelectedDish] = useState(null);

    function onDishSelect(dishId) {
        setSelectedDish(dishId);
    }

    return (
        <div>
            <Header />
            <Menu dishes={dishes} onClick={(dishId) => onDishSelect(dishId)} />
            <DishDetail selectedDish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
            <Footer />
        </div>
    );
}

export default Main;