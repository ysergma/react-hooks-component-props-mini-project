import React from 'react'
import blogData from '../data/blog'

const Article = ({post,title,date,preview,minutes}) => {

    const minutestoread=() => {
        if(minutes<30){
            const mins=Array(Math.ceil(minutes/5)).fill("☕️")
            return mins.join('') + ` ${minutes} minutes to read `
        }else {
            const mins=Array(Math.ceil(minutes/10)).fill("🍱")
            return mins.join('') + ` ${minutes} minutes to read `
        }
    }
        return (
            <article>
            <h3>{title}</h3>
            <small>{date || "January 1, 1970"}, {minutestoread()}</small>
            <p>{preview}</p>
        </article> 
             )

}

export default Article