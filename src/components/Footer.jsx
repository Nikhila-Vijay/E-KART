import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
       <div style={{width:'100%', height:'300px'}} 
       className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
           <div className='d-flex justify-content-evenly align-items-center mb-5 w-100' style={{color:'white'}}>
              <div style={{width:'400px', color:'white'}}>
                   <h4><i style={{color:'white'}} class='fa-solid fa-cart-shopping fa-bounce me-3'></i> E-KART</h4>
                   <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et neque eligendi ipsa atque similique esse provident laborum ea maxime eaque nisi tempore reiciendis aut, ut nulla debitis alias fugiat?</h6>
              </div>

              <div className='d-flex flex-column'>
                    <h4>Links</h4>
                    <Link to={'/'} style={{color:'white', textDecoration:'none'}}>Home</Link>
                    <Link to={'/cart'} style={{color:'white', textDecoration:'none'}}>Cart</Link>
                    <Link to={'/wishlist'} style={{color:'white', textDecoration:'none'}}>Wishlist</Link>
              </div>
              
              <div className='d-flex flex-column'>
                  <h4>Guides</h4>
                  <Link to={'https://react.dev/'} target="_blank" style={{color:'white', textDecoration:'none'}}>React</Link>
                  <Link to={'https://react-bootstrap.github.io/'} target="_blank" style={{color:'white', textDecoration:'none'}}>React Bootstrap</Link>
                  <Link to={'https://react.dev/'} target="_blank" style={{color:'white', textDecoration:'none'}}>Boots Watch</Link>

              </div>
                 <h4>Contact</h4>
                 <div className='d-flex'>
                       <input type="text" className='form-control' placeholder='Enter E-mail Id'/>
                       <button className='btn btn-warning ms-2'>Subscribe</button>
                     
                 </div>

                 <div className='d-flex justify-content-evenly mt-3'>
                      <Link style={{color:'orange', textDecoration:'none'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                      <Link style={{color:'blue', textDecoration:'none'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                      <Link style={{color:'white', textDecoration:'none'}}><i class="fa-brands fa-reddit-alien fa-2x"></i></Link>
                      <Link style={{color:'white', textDecoration:'none'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>

                 </div>
              </div>

           </div>

           <p style={{color:'white', textDecoration:'none'}}> Copyright &copy; 2024 E-Kart built with React Redux</p>
       
    </>
  )
}

export default Footer