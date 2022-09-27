import {useEffect, useState} from "react";
import Wrapper from "../../components/Wrapper";

function Profile() {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!posts) return <p>No profile data</p>

    return <Wrapper>
        {posts.map((post:Post) => (
            <li key={post.id}>{post.title}</li>
        ))}
    </Wrapper>
}

interface Post {
    title: string,
    id: number
}

export default Profile
