import * as React from "react"
import { Button } from 'react-bootstrap'
import logo from "../../static/images/tcg-logo.png"

const Hero = ( {}) => (
  <div className="px-4 pt-5 my-5 text-center">
     <div className="container px-5">
        <img className="img-fluid" style={{maxHeight: "200px"}} src={logo}></img>
    </div>
    <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Self taught tattoo artist based in Bremen</p>
        <Button type="button" className="btn btn-primary">booking</Button>
    </div>
   
  </div>
  
)

export default Hero
