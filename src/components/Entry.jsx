import React from "react";

function Entry(props) {
    return(
        <div className="term">
            <dt>
            <span className="fruit">
            <img src={props.img} alt="avatar_img" />
            </span>
            <span>{props.name}</span>
            </dt>
                <dd>{props.vitamins}</dd>
        </div>
    );
}

export default Entry;