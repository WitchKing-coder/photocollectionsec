import React from 'react';

const Top = ({searchCollection, searchQuery, tags, setSelectedTag, selectedTag}) => {
    return (
        <div className="top">
            <ul className="tags">
                {tags.map((tag) =>
                    <li className={selectedTag === tag.name ? 'active' : ''} onClick={() => setSelectedTag(tag.name)} value={tag.name}>{tag.name}</li>
                )}
            </ul>
            <input value={searchCollection} onChange={(e) => searchQuery(e.target.value)} placeholder="Поиск по названию" type="text"/>
        </div>
    );
};

export default Top;