import { Link, useLocation } from 'react-router-dom';
import { Auth } from './Oauth';

export default function Header (props) {

    const location = useLocation()

    const challengeNum = parseInt(location.pathname.split("/").pop())

    return (
        <header className="window" style={{width: "auto", height: "70px"}}>
            <Link to="/">
                <div className={ !isNaN(challengeNum) && props.completedChallenges !== undefined && props.completedChallenges.includes(challengeNum) ? "title-bar completed-challenge" : "title-bar"}>
                    <div className="title-bar-text">Advent challenge 2020</div>
                </div>
            </Link>
            <div className="window-body" style={{display: "flex", flexDirection: "row-reverse", alignItems: "center"}}>
                {
                    props.isLoggedIn ?
                        <img className="inset" src={"https://cdn.discordapp.com/avatars/"+props.userInfo.id+"/"+props.userInfo.avatar+".png"} style={{height: "40px", width: "40px"}} alt="avatar" />
                        :
                        <div className="inset" style={{height: "40px", width: "40px"}} />
                }
                {
                    <Auth userInfo={props.userInfo} isLoggedIn={props.isLoggedIn} connectFunc={props.connectFunc} />
                }
                <span style={{marginRight: "auto"}}>
                    Completed <strong>{props.completedChallenges === undefined ? 0 : props.completedChallenges.length}/ 25</strong> challenges.
                </span>

                <Link to="/" style={{marginRight: "10px", display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
                    <img src="/favicon.ico" style={{marginRight: "4px"}} />
                    {location.pathname === "/" ? null : <strong>Back to calendar</strong>}
                </Link>
            </div>
        </header>
    )
}

