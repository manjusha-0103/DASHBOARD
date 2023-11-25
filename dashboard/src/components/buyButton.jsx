import React from 'react'
import "./butButton.css"
import { useNavigate } from 'react-router-dom'

const BuyButton = () => {
    
    return (
        <div className='bt-main'>
            <a href="https://themeforest.net/item/vuexy-vuejs-html-laravel-admin-dashboard-template/23328599?irgwc=1&clickid=wQc1JlzFwxyPUGeXXGVLi1brUkFVJZVtOVajT40&iradid=275988&irpid=1244113&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1244113&utm_medium=affiliate&utm_source=impact_radius" target="_blank" >
                <button 
                className='buy-bt' >Buy Now</button>
            </a>
        </div>
    )
}

export default BuyButton
