import React from 'react';

//we can use props also in place of id, name, email, but i like destructuring
const Card = ({id, name, email}) => {
    //const {id, name, email} = props;
    return(
        <div className="tc bg-dark-green dib br3  pa3 ma2 grow bw2 shadow-5">
            <img alt='robots profile' src={`https://robohash.org/${name}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;