import React, { useState ,useEffect} from 'react';
import './MenuBar.css';
import logoSrc from './assets/logo.jpg'
import { useLocalStorage } from 'usehooks-ts'

interface UserInfo{
    name: string;
    token: string;
};

const MenuBar: React.FC = () => {
    const [isLogin,setLoginStatus]=useLocalStorage<boolean>("isLogin",false);
    const [userInfo,setUserInfo]=useLocalStorage<UserInfo|null>("user-info",null);
    const [ssoToken,setSSOToken]=useLocalStorage<string|null>("sso-token",null);


    const updateSSOToken=(tok:string)=>{
        if(tok){
            setLoginStatus(true);
            setUserInfo({name:"John",token:tok} as UserInfo);
            setSSOToken(tok);
        }
        else{
            setLoginStatus(false);
            setUserInfo(null);
            setSSOToken("");
        }

    }
    



    return (
        
        <div className="menu-bar">
      <div className="menu-row orange-bg">
        <div className="logo"><img className="logo logo" src={logoSrc} /></div>
        <div className="menu-item">{userInfo?.name}</div>
      </div>
      <div className="menu-row white-bg">
        <div className="menu-item">Catalogue</div>
        <div className="menu-item" onClick={()=>{updateSSOToken("")}}>History</div>
        <div className="menu-item" onClick={()=>{updateSSOToken("abcdxsd")}}>Inbox</div>
        <div className="menu-item">Report</div>
      </div>
    </div>
    );
};

export default MenuBar;
