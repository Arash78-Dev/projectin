import React from 'react'
import './Navbar.css'
import img from '../../asset/arash.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown , faBars, faBell ,faComments, faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({add}) => {

    return (
        <div className="bg-white  d-flex align-item-center" style={{height:'95px' , padding:'22px 20px'}}>
            <FontAwesomeIcon className='my-auto d-xl-none'   icon={faBars}  style={{cursor:'pointer'}} size="2x" onClick={add} />
            <div className="mx-4  position-relative" >
                <img src={img} alt="human" width="60px" height="60px" style={{borderRadius:'50%',border:'3px solid #409bb8'}}/>
                <span className="position-absolute" style={{width:'13px',height:'13px',borderRadius:'50%',backgroundColor:'green' , bottom:'0px', left:'0px'}} ></span>
            </div>
            <div className="d-flex me-auto ms-1 align-items-center">
                <div className="d-flex  align-items-center">
                    <div className="d-flex flex-column ">
                        <h5>صابر جانی</h5>
                        <p className="text-muted" style={{fontSize:'15px'}}>CEO</p>
                    </div>

                    <FontAwesomeIcon   icon={faAngleDown}  style={{cursor:'pointer'}} />

                    
                </div>
                <div className="d-none d-md-block ms-3 borderdivi">
                   
                </div>
                <div className="d-none d-md-block ms-3">
                <FontAwesomeIcon   icon={faComments}  style={{cursor:'pointer' , color:'grey' }} size='2x' />
                </div>
                <div className=" d-none d-md-block ms-3 borderdivi">
                        
                </div>
                <div className=" d-none d-md-block ms-3">   
                <FontAwesomeIcon   icon={faBell}  style={{cursor:'pointer' , color:'grey' }} size='2x' />
                
                </div>
            </div>
            <div className=" input d-none d-md-flex align-items-center">
                <span><FontAwesomeIcon   icon={faSearch} size='2x'   /></span>
                <input placeholder="جستجو" className='mt-0'></input>
            </div>
        </div>
    )
}

export default Navbar
