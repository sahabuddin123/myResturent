import React from "react";
import { Card, CardImg,CardBody, CardTitle, CardText } from "reactstrap";
const DishDetails = props => {
    return (
        <Card style={{margin:'10px'}}>
            <CardImg
                alt={props.dish.name}
                src={props.dish.image}
                width="100%"
            />
             <CardBody>
                <CardTitle tag="h2" className="text-left">
                    {props.dish.name}
                </CardTitle>
                <CardText>
                    {props.dish.description}
                </CardText>
                <CardText>
                    <b>BDT {props.dish.price} /-</b>
                </CardText>
             </CardBody> 
        </Card>
    );
}

export default DishDetails;