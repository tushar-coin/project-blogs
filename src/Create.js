import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(true);
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body };
        console.log(blog);
        setIsPending(false);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog)

        })
            .then(() => {
                setIsPending(true);
                console.log("new blog added");
                history('/');
            })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {/* <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option> */}

                {isPending && <button>Add Blog</button>}
                {!isPending && <button disabled>Adding</button>}
            </form>
        </div>
    );
}

export default Create;
