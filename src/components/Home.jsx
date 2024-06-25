import React from 'react'
import Nav from './Nav'
import { Button } from 'react-bootstrap'
import { BsCameraVideoFill } from 'react-icons/bs'
import About from './About'

const Home = () => {
  return (
    <>
      <div className="row jumbo">
        <Nav />
        <div className="justify-content-center text-center mx-auto col-md-12">
        <h3 className="header text-white">
          Let The <span className="theme-text px-2"> Word </span> Guide You
        </h3>
        <div className="btn-group mt-3">
          <Button bsPrefix="btn-theme px-2" size="sm">Stream Live <i className="text-white ps-1"><BsCameraVideoFill /></i></Button>
          <Button bsPrefix="btn-custom" size="md">Download</Button>
        </div>
      </div>
    </div>
    <About />
    </>
  )
}

export default Home