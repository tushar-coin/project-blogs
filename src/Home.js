import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./UseFetch";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            "title": "1st july",
            "author": "tushar",
            "body": "hi there!!!!",
            "id": 12
        },
        {
            "title": "test",
            "author": "test1",
            "body": "test123",
            "id": 13
        }
    ]);
    // const [len, setLen] = useState(0);
    // const [ispending, setIsPending] = useState(true);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => (
            blog.id !== id
        ))
        setBlogs(newBlogs);
    }
    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogs')
    //             .then((res) => {
    //                 console.log(res);
    //                 if (!res.ok) {
    //                     throw Error('could not fetch data');
    //                 }
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 setIsPending(false);
    //                 setBlogs(data);
    //                 let l = data.length
    //                 setLen(l);
    //             })
    //             .catch((err) => {
    //                 console.log(err.message);
    //             })
    //         console.log("hie");
    //         console.log(blogs);
    //     }, 2000)

    // }, [])
    // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
    console.log(blogs);
    return (
        <div className="home">
            {/* {isPending && <d`iv>Loading..........</div>} */}
            {blogs && <Bloglist blogs={blogs} title="all blogs" />}
        </div>

    );
}

export default Home; 