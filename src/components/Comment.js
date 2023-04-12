import React from 'react'

function Comment(props) {
  return (
    <div>
      {props.commentData.map((comment, index)=>{
        return(
            <div key={index}>
                <h1>{comment.comment_text} {comment.time_created}</h1>
            </div>
        )
      })}
    </div>
  )
}

export default Comment
