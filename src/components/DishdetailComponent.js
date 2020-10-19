import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';

function renderDish(dish) {
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

function renderEachComment(comment) {
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

function renderComments(dish) {
    if (dish != null)
        return (
            <div>
                <h4 className="text-left">Comments</h4>
                <ul className="list-group text-left">
                    {dish.comments.map((comment) => {
                        return (
                            <div key={comment.id}>{renderEachComment(comment)}</div>
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

const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderDish(props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {renderComments(props.selectedDish)}
                </div>
            </div>
        </div>
    );
}

export default Dishdetail;