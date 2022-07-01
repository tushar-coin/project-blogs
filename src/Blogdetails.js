import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import { useNavigate } from 'react-router-dom';
const Blogdetails = () => {
    const { id } = useParams();
    const { error, isPending, data } = useFetch('http://localhost:8000/blogs/' + id);
    console.log(data);
    const history = useNavigate();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })
            .then(() => {
                history('/');
            })
    }
    return (
        <>
            {isPending && <h1>loading........</h1>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <h2>{data.author}</h2>
                    <p>{data.body}</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}

        </>
    );
}

export default Blogdetails;