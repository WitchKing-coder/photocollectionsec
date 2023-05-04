import React from 'react';

const Collection = ({collection}) => {
    return (
        <div className="collection">
            <img className="collection__big" src={collection.photos[0]} alt="Item"/>
            <div className="small__collection">
                <img className="collection__mini" src={collection.photos[1]} alt="Item"/>
                <img className="collection__mini" src={collection.photos[2]} alt="Item"/>
                <img className="collection__mini" src={collection.photos[3]} alt="Item"/>
            </div>
            <h4>{collection.name}</h4>
        </div>
    );
};

export default Collection;