import React from 'react'
import Comment from './Comment'

function CommentsList({data}) {

  return  (
    data.map((c, index) => 
  <div key = {index} className='' >
    <Comment cdata = {c}/>
    <div className='ml-4 border-l-2 max-w-full]'>
        <CommentsList data = {c.replies}/>
    </div>
  </div>
  ))
}

export default CommentsList