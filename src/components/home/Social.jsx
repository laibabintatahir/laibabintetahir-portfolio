import React from 'react'
import "./Home.css";
const Social = () => {
  return (
    <div className="home__social">
        <a href='https://instagram.com/laibalifelogs' className="home__social-icon" target="_blank">
        <i class="uil uil-instagram"></i></a>

        <a href="https://twitter.com/laibabintatahir" className="home__social-icon" target="_blank">
        <i class="uil uil-twitter"></i></a>

        <a href="https://laibabintatahir@gmail.com/"  className="home__social-icon" target="_blank">
        <i class="uil uil-envelope"></i> </a>

        <a href="https://github.com/laibabintatahir"  className="home__social-icon" target="_blank">
       <i class="uil uil-github-alt"></i></a>
    </div>
  )
}

export default Social