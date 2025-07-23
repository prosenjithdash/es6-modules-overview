import React from 'react';

const Watch = ({ watch }) => {
    const { id, name, price } = watch;
    return (
        <div>
           
            <small>Id: { id}</small>
            <p>Name:{name}</p>
            <small>Price:{price}</small>
            
        </div>
    );
};

export default Watch;