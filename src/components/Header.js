import { Link } from 'react-router-dom';
import { Auth } from './Oauth';

export default function Header (props) {
    return (
        <header className="window" style={{width: "100%", height: "70px"}}>
            <Link to="/">
                <div className="title-bar">
                    <div className="title-bar-text">Advent challenge 2020</div>
                </div>
            </Link>
            <div className="window-body" style={{display: "flex", flexDirection: "row-reverse", alignItems: "center"}}>
                {
                    props.isLoggedIn ?
                        <img className="inset" src={"https://cdn.discordapp.com/avatars/"+props.userInfo.id+"/"+props.userInfo.avatar+".png"} style={{height: "40px", width: "40px"}} />
                        :
                        <div className="inset" style={{height: "40px", width: "40px"}} />
                }
                {
                    <Auth userInfo={props.userInfo} isLoggedIn={props.isLoggedIn} connectFunc={props.connectFunc} />
                }
            </div>
        </header>
    )
}


