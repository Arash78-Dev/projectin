import React from 'react'
import './content.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Container , Row } from 'react-bootstrap'
import Galleryitem from './gallery/Galleryitem'
import img from '../../asset/gal.jpg';



const Contentmain = () => {
    return (
        <div className="mt-3 ms-3">
            <h3>شرکت ها</h3>

            <div className="searching d-inline-block align-items-center">
                <input placeholder="عبارت موردنظر...."/>
                
                    <button className="btn btn-block float-end text-white" style={{backgroundColor:"green"}}>
                        <span className="me-2"><FontAwesomeIcon icon={faSearch} style={{color:'white'}}/></span>
                         جستجو
                    </button>
            </div>

            <Container fluid className="mt-3 d-flex flex-wrap">
                <Row className="w-100 mx-auto"> 
                    <Galleryitem img={img} title="ویلای گلدره"/>
                    <Galleryitem img={img} title="مجتمع اداری فرهنگی و تجاری معلم دمشق ها"/>
                    <Galleryitem img={img} title="دمو"/>
                    <Galleryitem img={img} title="هتل فدک"/>
                    <Galleryitem img={img} title="بیمارستان کودکان حضرت علی"/>
                    <Galleryitem img={img} title="تعریف نشده"/>
                    <Galleryitem img={img} title="ساختمان پزشکان دی"/>
                    <Galleryitem img={img} title="انبار های عمومی و خدمات گمرکی امام خمینی"/>
                </Row>
            </Container>


        <div className="mx-auto d-flex justify-content-around mt-4 pagin " style={{direction:'ltr', fontSize:'25px'}}>
            <p className="py-3 px-3 pointer active" >1</p>
            <p className="py-3 px-3 pointer">2</p>
            <p className="py-3 px-3">....</p>
            <p className="py-3 px-3 pointer">4</p>
            <p className="py-3 px-3 pointer">بعدی <FontAwesomeIcon icon={faAngleRight} style={{verticalAlign:'-8px'}}/></p>


            
        </div>
            
        </div>
    )
}

export default Contentmain
