import React from "react";
import {CardText, CardTitle } from "reactstrap";
import dateFormat from "dateformat";
const LoadComments = props => {
    // console.log(props);
    return (
        props.comment.map(comment => {
            return(
                <div key={comment.id}>
                    <CardTitle tag="h5">{comment.author}</CardTitle>
                    <CardText>{comment.comment}</CardText>
                    <CardText>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</CardText>
                    <hr/>
                </div>
            );
        })
    );
}

export default LoadComments;