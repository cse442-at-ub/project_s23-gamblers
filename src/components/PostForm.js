import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostForm.css"
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom'
function PostForm(props) {
    const url = "https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/post_item.php"
    const navigate = useNavigate()
    const [postimage, setPostImage] = useState('')
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(false)

    useEffect(()=>{
        editHandler()
    },[])

    function editHandler() {
        if (Object.keys(props).length != 0) {
            setEdit(true)
            axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/item.php?var=${props.data.item_id}`,
                { withCredentials: true }).then(function (response) {
                    console.log(response)
                    const newdata = { ...data }
                    newdata['item_name'] = response.data.item_name
                    newdata['description'] = response.data.item_description
                    newdata['price'] = response.data.item_price
                    newdata['contact'] = response.data.item_contact
                    setData(newdata)
                })
        }
    }

    console.log(data)




    function submit(e) {
        e.preventDefault();
        const fd = new FormData()
        fd.append('images', postimage)
        fd.append('item_info', JSON.stringify(data))
        if (data.item_name === "" || data.item_name === undefined) {
            toast.error('Please enter item name')
        } else if (data.description === '' || data.description === undefined) {
            toast.error('Please enter item description')
        } else if (data.price === '' || data.price === undefined) {
            toast.error('Please enter item price')
        }
        else if (data.contact === '' || data.contact === undefined) {
            toast.error('Please enter contact information')
        }
        else if (postimage === '') {
            toast.error('Please upload a file')
        } else {
            let type = postimage.name.split('.').at(-1)
            let size = postimage.size
            if (!image_file_check(type, size)) {
                return
            }
            axios.post(url, fd, { withCredentials: true })
                .then(res => {
                    if (res.status === 200) {
                        toast.success('Successfully upload!')
                        setTimeout(function () {
                            navigate(`/`);
                        }, 1800);
                        console.log(res.data)
                        if (edit) {
                            axios.post(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/delete.php`, {
                                item_id: props.data.item_id
                            })
                        }
                    }
                })
        }
        
    }
    function image_file_check(file_type,size){
        let acceptable = ['jpg','jpeg','png']
        if(!acceptable.includes(file_type)){
            toast.error("Wrong image type, try jpg or png")
            return false
        }
        if( size > 2000000){
            toast.error("Too large, try image small than 2mb")
            return false
        }
        return true
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        console.log(e)
        setData(newdata)
        console.log(newdata)
    }
    function handlepostimage(e) {

        setPostImage(e.target.files[0])
    }

    return (
        <div className="post_main">
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <form onSubmit={(e) => submit(e)}>
                    <div className="form-group">
                        {edit ? <h1>Edit your item</h1> : <h1>Item Description</h1>}
                    </div>
                    <div className="form-group">
                        <label >Item Name</label>
                        <input className="form-controll" onChange={(e) => handle(e)} id="item_name" placeholder={edit ? data.item_name : "name"} type="text" ></input>
                    </div>
                    <div className="form-group">
                        <label>Item Description</label>
                        <input className="form-controll" onChange={(e) => handle(e)} id="description" placeholder={edit ? data.description : "description"} type="text" ></input>
                    </div>
                    <div className="form-group">
                        <label>Item Price</label>
                        <input className="form-controll" onChange={(e) => handle(e)} id="price" placeholder={edit ? data.price : "price"} type="number" ></input>
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input className="form-controll" onChange={(e) => handle(e)} id="contact" placeholder={edit ? data.contact : "contact"} type="text" ></input>
                    </div>
                    <div className="form-group">
                        <label>Image
                            <input type="file" name="images" id="images" onChange={handlepostimage} />
                            <div className="file-dummy">{edit ? <span>Please reupload your image</span>: <span> select your item image</span>}

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