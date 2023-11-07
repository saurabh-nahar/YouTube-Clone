import React from 'react'
import Comment from './Comment'

function CommentsList({data}) {

  return  (
    data.map((c, index) => 
  <div key = {index}>
    <Comment cdata = {c}/>
    <div className='ml-4 border-l-2'>
        <CommentsList data = {c.replies}/>
    </div>
  </div>
  ))
}

export default CommentsList