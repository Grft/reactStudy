import React from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

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
        <React.Fragment>
            <li className="list-group-item border-0">
                {comment.comment}<br />-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            }).format(new Date(Date.parse(comment.date)))}
            </li>
        </React.Fragment>
    );
}

function renderComments(comments) {
    if (comments != null)
        return (
            <div>
                <h4 className="text-left">Comments</h4>
                <ul className="list-group text-left">
                    {comments.map((comment) => {
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

function Dishdetail(props) {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderDish(props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {renderComments(props.comments)}
                </div>
            </div>
        </div>
    );
}

export default Dishdetail;