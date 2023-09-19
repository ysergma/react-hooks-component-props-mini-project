import React from 'react'
import  Article  from './Article'

function ArticleList ({articles})  {
  return (
    <main>
        {
           articles.map((post)=>(
            <Article key={post.id} post={post} preview={post.preview} title={post.title} date={post.date} minutes={post.minutes}/>
           )) 
        }
    </main>
      )
}


export default ArticleList