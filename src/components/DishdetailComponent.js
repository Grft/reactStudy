import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return (
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody className="text-left">
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    renderEachComment(comment) {
        return (
            <div>
                <li className="list-group-item border-0">
                    {comment.comment}<br />-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comment.date)))}
                </li>
            </div>
        );
    }

    renderComments(dish) {
        if (dish != null)
            return (
                <div>
                    <h4 className="text-left">Comments</h4>
                    <ul className="list-group text-left">
                        {this.props.selectedDish.comments.map((comment) => {
                            return (
                                <div>{this.renderEachComment(comment)}</div>
                            );
                        })}
                    </ul>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dishdetail;