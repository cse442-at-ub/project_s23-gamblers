import React,{useState} from "react";
import axios from "axios";
import "./PostForm.css"

function PostForm(){
    const url ="https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/post_item.php"
    const [postimage,setPostImage] = useState('')
    const [data, setData]= useState({
        item_name:"",
        description:"",
        price:"",
        contact:"",
    })
    const [test, setTest] = useState()
    function submit(e){
        e.preventDefault();
        const fd = new FormData()
        fd.append('images', postimage)
        fd.append('item_info',JSON.stringify(data))
        if (data.item_name === "") {
            window.alert('Please enter item name')
        } else if (data.description===''){
            window.alert('Please enter item description')
        }else if (data.price === '') {
            window.alert('Please enter item price')
        }
        else if (data.contact === '') {
            window.alert('Please enter contact information')
        }
        else if (postimage === '') {
            window.alert('Please upload a file')
        }
        console.log(fd)
        axios.post(url,fd,{withCredentials:true})
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        console.log(e)
        setData(newdata)
        console.log(newdata)
        console.log(test)
    }
    function handlepostimage(e){
        
        setTest(e.target.files[0]);
        setPostImage(e.target.files[0])
    }

    return (
        <div className="post_main">
            <div className="sub_main">
            <form onSubmit={(e)=>submit(e)}>
                <div className="form-group">
                    <h1>Item Description</h1>
                </div>
                <div className="form-group">
                <label >Item Name</label>
                <input className="form-controll" onChange={(e)=>handle(e)} id="item_name" value={data.name} placeholder="name" type="text"></input>
                </div>
                <div className="form-group">
                <label>Item Description</label>
                <input className="form-controll" onChange={(e)=>handle(e)} id="description" value={data.description} placeholder="description" type="text"></input>
                </div>
                <div className="form-group">
                <label>Item Price</label>
                <input className="form-controll" onChange={(e)=>handle(e)} id="price" value={data.price} placeholder="price" type="number"></input>
                </div>
                <div className="form-group">
                <label>Contact</label>
                <input className="form-controll" onChange={(e)=>handle(e)} id="contact"  value={data.contact} placeholder="contact" type="text"></input>
                </div>
                <div className="form-group">
                <label>Image
                <input type="file" name="images" id="images" onChange={handlepostimage}/>
                <div className="file-dummy"><span> select your item image</span>
                
                </div>
                </label>
                </div>
                <div className="form-group">
                <button className="post_button"> <span className="post_font">Upload Post</span></button>
                </div>
            </form>
            </div>
            
        </div>
    )

}
export default PostForm;