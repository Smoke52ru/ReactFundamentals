import React, {useMemo, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css';
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Aaa', body: 'Sss'},
        {id: 2, title: 'Mmm', body: 'Www'},
        {id: 3, title: 'Hhh', body: 'Bbb'},
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPosts = useMemo(() => {
            console.log('sorted...')
            if (selectedSort) {
                return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
            }
            return posts
        }, [selectedSort, posts]
    )

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

    return (
        <div className="App">
            {/*Функциональная компонента*/}
            <Counter/>
            {/*Классовая компонента*/}
            <ClassCounter/>

            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                    type="text"
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка по..."
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                />
            </div>
            {sortedAndSearchedPosts.length
                ?
                <PostList remove={removePost} posts={sortedPosts} title="Список постов"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены!
                </h1>
            }

        </div>
    );
}

export default App;
