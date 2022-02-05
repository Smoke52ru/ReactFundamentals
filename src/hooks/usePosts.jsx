import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
            console.log('sorted...')
            if (sort) {
                return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
            }
            return posts
        }, [sort, posts]
    )
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    return useMemo(() => {
        console.log('searched...')
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
}