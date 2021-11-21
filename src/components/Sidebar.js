import React from 'react'
import Li from './sidebaritem/Li'
import './sidebaritem/li.css'
import icon0 from'../asset/icon0.png'
import icon1 from'../asset/icon1.png'
import icon2 from'../asset/icon2.png'
import icon3 from'../asset/icon3.png'
import icon4 from'../asset/icon4.png'
import icon5 from'../asset/icon5.png'
import icon6 from'../asset/icon6.png'
import icon7 from'../asset/icon7.png'
import icon8 from'../asset/icon8.png'
import icon9 from'../asset/icon9.png'
import img from '../asset/house.jpg'

const Sidebar = () => {
    return (
        <div className="d-flex flex-column bg-white">
            <div className="d-flex justify-content-center align-center p-2" style={{height:'10vh'}}>
                <img src={img} alt="icon" width="30%" height="70%"></img>
                <div className="ms-2">
                    <h5>پنل مدیریت</h5>
                    <p className="text-muted">متنا</p>    
                </div>
            </div>
            <div className="scrollbarstyle">

                <ul  style={{width:'100%',padding:'0px'}}>
                <Li title='شرکت ها'  icon={icon9}/>
                <Li title='میزکار'  icon={icon0}/>
                <Li title='کاربران'  icon={icon1}/>
                <Li title='ورود و خروج'  icon={icon2}/>
                <Li title='لیست کارها'  icon={icon3}/>
                <Li title='نمودارها'  icon={icon4}/>
                <Li title='گزارش چک لیست'  icon={icon5}/>
                <Li title='برد متنا'  icon={icon6}/>
                <Li title='مخاطبین'  icon={icon7}/>
                <Li title='بارکدخوان'  icon={icon8}/>
                <Li title='دریافت بارکد'  icon={icon9}/>
                <Li title='پشتیبانی'  icon={icon0}/>
                <Li title='برد متنا'  icon={icon2}/>
                <Li title='مخاطبین'  icon={icon3}/>
                <Li title='بارکدخوان'  icon={icon7}/>
                <Li title='دریافت بارکد'  icon={icon9}/>
                <Li title='پشتیبانی'  icon={icon3}/>

                
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar
