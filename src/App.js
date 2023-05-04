import React, {useMemo} from "react";
import './App.scss';
import './media.scss';
import {useState} from "react";
import Top from "./components/UI/top";
import CollectionList from "./components/UI/collectionList";
import Pagination from "./components/UI/Pagination";

function App() {

    const [searchCollection, setSearchCollection] = useState('');
    const [collections, setCollections] = useState([]);
    const [tags, setTags] = useState([]);
    const [sortedCollection, setSortedCollection] = useState([]);
    const [sortedAndSearched, setSortedAndSearched] = useState([]);

    const [selectedTag, setSelectedTag] = useState('Все');

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPosts = sortedAndSearched.slice(firstPost, lastPost)


    React.useEffect(() =>{
        fetch('https://640c82da94ce1239b0aefdbd.mockapi.io/Collections')
            .then(res => res.json())
            .then((json) => {
                setCollections(json[0].collections.filter(obj => selectedTag === "Все" ? true : obj.category === selectedTag))
                setTags(json[0].categories)
            })
            .catch(err => {
                console.warn(err)
                alert('Ошибка при получении данных')
            });
    },[selectedTag, currentPage])

    const searchQuery = useMemo(() => {
        setSortedCollection(collections.filter(obj => obj.name.toLowerCase().includes(searchCollection.toLowerCase())))
    }, [searchCollection, collections])

    const sortedAndSearchedCollection = useMemo(() => {
        if(selectedTag === "Все")
            return setSortedAndSearched(sortedCollection)
        setSortedAndSearched(sortedCollection.filter(obj => obj.category === selectedTag))
    }, [selectedTag, sortedCollection])

    const resetPage = useMemo(() => {
        setCurrentPage(1)
    }, [selectedTag])

  return (
    <div className="App">
            <h1>My collection of photos</h1>
            <Top
                searchCollection={searchCollection}
                searchQuery={setSearchCollection}
                tags={tags}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
            />

            <CollectionList sortedAndSearched={currentPosts}/>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} postsPerPage={postsPerPage} totalPosts={sortedAndSearched.length}/>

    </div>
  );
}

export default App;
