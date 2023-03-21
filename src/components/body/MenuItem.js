import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const MenuItem = props => {
    // console.log(props);
    return (
        
                <Card 
                style={{margin:'10px',cursor:'pointer'}} 
                onClick={props.DishSelect}
                >
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
                    </CardImgOverlay>
                </Card>
    );
}

export default MenuItem;