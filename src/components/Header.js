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
                <div className="window-body" style={{textAlign: "right"}}>
                    {
                        props.isLoggedIn ?
                            <Auth userInfo={props.userInfo} isLoggedIn={props.isLoggedIn} connectFunc={props.connectFunc} />
                            :
                            <p>Currently logged in as {props.userInfo.username}</p>
                    }
                </div>
            </header>
        )
    }


