import React from "react";
import BridgeHealth from '../../images/BH.png';
import { useNavigate } from 'react-router-dom';

const ApplicationHeader = () =>{
    const navigation = useNavigate()
    const onClickLogo = () =>{
        navigation('/')
    }
    return(
        <div>
           <img src={BridgeHealth} alt="Logo" onClick={(e) => onClickLogo()}/>
        </div>
    )
}

export default ApplicationHeader;