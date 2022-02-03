import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
                type="text"
            />
            <MySelect
                value={filter.sort}
                onChange={selectSort => setFilter({...filter, sort: selectSort})}
                defaultValue="Сортировка по..."
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;