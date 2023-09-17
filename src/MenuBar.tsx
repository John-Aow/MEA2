import React, { useState ,useEffect} from 'react';
import './MenuBar.css';
import logoSrc from './assets/logo.jpg'
interface UserInfo{
    name: string;
    token: string;
};

const MenuBar: React.FC = () => {
    const [isLogin,updateLoginStatus]=useState<boolean>(false);
    const [userInfo,updateUserInfo]=useState<UserInfo|null>(null);
    const [ssoToken,updateSSOToken]=useState<string|null>(null);

    useEffect(()=>{
        const tok=sessionStorage.getItem("sso-token");
        if(tok){
            updateSSOToken(tok);
            updateLoginStatus(true);
            updateUserInfo({name:"John",token:ssoToken} as UserInfo);
        }
        
    },[]);
    // if(sessionStorage.getItem('sso-token')){
    //     updateLoginStatus(true);
    //     updateUserInfo({name:"John",token:ssoToken} as UserInfo);
    // }
    function updateToken(tok: string){
        sessionStorage.setItem("sso-token",tok);
        return;

    }

    return (
        // <div className="menu-bar">
        //     <div className="AppBar">
        //         <img className="logo logo" src={logoSrc} />
        //         <div className="NameBox" >NAME</div>
        //     </div>
        //     <div><nav className="menu-bar">
        //         <ul>
        //             <li>
        //                 <a href="#">Home</a>
        //             </li>
        //             <li>
        //                 <a href="#">About</a>
        //             </li>
        //             <li>
        //                 <a href="#">Contact</a>
        //             </li>
        //         </ul>
        //     </nav></div>
        //     <FloatingToolbox isVisible={toolboxVisible} />
        // </div>
        <div className="menu-bar">
      <div className="menu-row orange-bg">
        <div className="logo"><img className="logo logo" src={logoSrc} /></div>
        <div className="menu-item">{userInfo?.name} {userInfo?.token} {isLogin.toString()} </div>
      </div>
      <div className="menu-row white-bg">
        <div className="menu-item" onClick={()=>{updateLoginStatus(!isLogin)}}>Catalogue</div>
        <div className="menu-item" onClick={sessionStorage.clear}>History</div>
        <div className="menu-item" onClick={()=>{updateToken("abcdx")}}>Inbox</div>
        <div className="menu-item">Report</div>
      </div>
    </div>
    );
};

export default MenuBar;
