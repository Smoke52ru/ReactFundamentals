import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";
import classes from './PostList.module.css'

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <div className={classes.post}>
            <div className={classes.post__content}>
                <strong>{props.post.id}.{props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className={classes.post__btns}>
                <MyButton onClick={()=> router(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={()=> props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;