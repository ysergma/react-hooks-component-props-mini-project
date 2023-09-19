import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import  ArticleList  from "./ArticleList";
console.log(blogData);

function App() {
  const { name, image, about, posts } = blogData;
  return (
    <div className="App">
      <Header name={name}/>
      <About imgsrc={image} about={about}/>
      <ArticleList articles={blogData.posts}/>
    </div>
  );
}

export default App;
