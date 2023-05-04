import "./Comment.css"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import toast, { Toaster } from "react-hot-toast";

function Comment() {
    let item_id
    const a = window.location.search;
    const arugments = new URLSearchParams(a);
    item_id = (arugments.get('var'));
    const navigate = useNavigate()

    const url = process.env.REACT_APP_BASENAME + "api/comments"
    const [currentComment, setCurrentComment] = useState('')
    const [comment, setComment] = useState([])

    useEffect(() => {
        fecthCommentHandler()
    }, [])

    function submitcomment(e) {
        e.preventDefault();
        let length = currentComment.length
        if (length > 150) {
            toast.error("Character limit is 150, please edit!")
            return
        } else if (currentComment === "") {
            toast.error('Please enter your comment')
        } else {
            axios.post(url, JSON.stringify({
                item_id: item_id,
                comment: currentComment
            }), { withCredentials: true })
                .then(function (response) {
                    console.log(response)
                    if (response.status === 200) {
                        toast.success('Comment success')
                        setCurrentComment('')
                        setTimeout(function () {
                            window.location.reload();
                        }, 1800);
                    }
                }).catch(function (error) {
                    if (error.response.status === 401) {
                        toast.error("You cannot comment as guest, please register or login!")
                    }
                })
        }
    }
    function handlecomment(e) {
        setCurrentComment(e.target.value)
    }

    function fecthCommentHandler() {
        axios.get(process.env.REACT_APP_BASENAME + `api/comments.php?item_id=${item_id}`, { withCredentials: true }).then(function (response) {
            console.log(response.data)
            const reversedArray = response.data.reverse().map((item) => {
                return { username: item.username, comment_text: item.comment_text, time_created: item.time_created };
            })

            setComment(reversedArray)
        })
    }

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <br></br>

            <div>
                {comment.map((comment, index) => {
                    return (
                        <div key={index}>
                            <h6>{comment.time_created}</h6>

                            <h1>{comment.username}: {comment.comment_text}</h1>
                            <hr />
                        </div>

                    )
                })}
            </div>
            <form onSubmit={(e) => submitcomment(e)}>
                <div className="comment-group">
                    <div>
                        <input onChange={(e) => handlecomment(e)} id='comment' className="comment-controll" type='text' placeholder="Enter your comment" value={currentComment}/>
                        
                        <button className="comment_button"> <span className="post_font">Send</span></button>
                        
                        </div>

                    <div>

                    </div>
                </div>
            </form>
           
            
        </div>
    )


}
export default Comment