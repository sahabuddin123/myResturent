import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

const MenuItem = props => {
    // console.log(props);
    return (
        <div className="col-md-6">
                <Card style={{margin:'10px'}}>
                    <CardImg
                        alt={props.dish.name}
                        src={props.dish.image}
                        style={{
                            opacity: '0.6'
                        }}
                        width="100%"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h4" className="text-center">
                        {props.dish.name}
                        </CardTitle>
                        <CardText>
                        {props.dish.description}
                        </CardText>
                        {/* <CardText>
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </CardText> */}
                    </CardImgOverlay>
                </Card>
                </div>
    );
}

export default MenuItem;