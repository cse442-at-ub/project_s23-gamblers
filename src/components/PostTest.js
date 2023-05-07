import { useState } from 'react'
import axios from 'axios';
export default function PostTest() {
    const [file, setFile] = useState()
    const [post, setPost] = useState({});

    function handleChange(e) {
      setFile(e.target.files[0])
    }
    const handleTxtChange = (event) => {
        setPost(vals => ({ ...vals, [event.target.name]: event.target.value }));
    
    }
    function handleSubmit(e) {
        e.preventDefault()
        const url = 'https://localhost/api/post_item.php';
        const data = new FormData();
        data.append('image', file);
        data.append('item_info', JSON.stringify(post));
        console.log(post);
        const cfg = {
            withCredentials:true,
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        
            axios.post(url, data, cfg).then((response) => {
            console.log("success");
        }).catch(function (error) {
            console.log(error.response.data.error) //unAuthenticate returned from server
            if(error.response.status === 401){
                console.log("unauth post");
            }
        });
    };
    return (
    <div>
        <form onSubmit={handleSubmit}>
            
        <input type='txt' name="item_name" onChange={handleTxtChange}></input>
        <input  type="file"  onChange={handleChange} id='image'></input><br></br>
        <button  type="submit">Upload</button>
        </form>
    </div>
    )
}
