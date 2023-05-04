import React from 'react';
import Collection from "./collection";

const CollectionList = ({sortedAndSearched}) => {
    return (
        <div className="container">
            {sortedAndSearched.map(obj =>
                <Collection collection={obj}/>
            )}
        </div>
    );
};

export default CollectionList;