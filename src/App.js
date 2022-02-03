import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css';

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


    return (
        <div className="App">
            {/*Функциональная компонента*/}
            <Counter/>
            {/*Классовая компонента*/}
            <ClassCounter/>

            <PostForm create={createPost}/>
            <PostList posts={posts} title="Список постов"/>
        </div>
    );
}

export default App;
