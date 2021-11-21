import React from 'react'
import { Col } from 'react-bootstrap'
import './gallery.css'

const Galleryitem = (props) => {
    return (
        <Col md={3} sm={6} xs={12} className="mb-4">
                <div className="card" >
                    <img src={props.img} alt={props.title} width="60%" className="mx-auto h-75" ></img>
                    <div className="w-75 mx-auto text-center h-25">
                        <h5>{props.title}</h5>
                    </div>
                </div>
        </Col>
    )
}

export default Galleryitem
