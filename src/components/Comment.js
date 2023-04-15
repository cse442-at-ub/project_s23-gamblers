import "./Comment.css"
import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";

function Comment(){
    let item_id
    const a = window.location.search;
    const arugments = new URLSearchParams(a);
    item_id = (arugments.get('var'));
    const navigate = useNavigate()

    const url ="https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/comments"
    const [currentComment, setCurrentComment]= useState('')
    const [comment, setComment] = useState([])

    useEffect(()=>{
        fecthCommentHandler()
    },[])

    function submitcomment(e){
        e.preventDefault();
        let length = currentComment.length
        if(length > 150){
            toast.error("Character limit is 150, please edit!")
            return
        }else if ( currentComment === "") {
            toast.error('Please enter your comment')
        }else{axios.post(url, JSON.stringify({
            item_id: item_id,
            comment: currentComment
        }),{withCredentials:true})
        .then(function(response){
            console.log(response)
            if(response.status===200){
                toast.success('Comment success')
                setCurrentComment('')
                setTimeout(function(){
                    window.location.reload();
                 }, 1800);
            }
        }).catch(function(error){
            if(error.response.status===401){
                toast.error("You cannot comment as guest, please register or login!")
            }
        })
    }
    }
    function handlecomment(e){
        setCurrentComment(e.target.value)
    }

    function fecthCommentHandler(){
        axios.get(`https://www-student.cse.buffalo.edu/CSE442-542/2023-Spring/cse-442m/api/comments.php?item_id=${item_id}`,{withCredentials:true}).then(function(response){
            console.log(response)
            setComment(response.data)
        })
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
                />
            <form onSubmit={(e)=>submitcomment(e)}>
                <div className="comment-group">
                    <label>Comment: 
                        <input onChange={(e)=>handlecomment(e)} id='comment' className="comment-controll" type='text' placeholder="Enter your comment" value={currentComment}></input>
                    </label>
                    <div>
                    <button className="comment_button"> <span className="post_font">Send</span></button>
                    </div>
                    </div>
                </form>
          {comment.map((comment, index)=>{
            return(
                <div key={index}>
                    <h6>{comment.time_created}</h6>

                    <h1>{comment.username}: {comment.comment_text}</h1> 
                </div>
                
            )
          })}
          <form>
            <input type='text'></input>
          </form>   
        </div>
      )
    

}
export default Comment