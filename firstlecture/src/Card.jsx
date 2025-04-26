import { useState } from 'react'

export default function Card(props){

    const [isFollowing, setIsFollowing] = useState(false);

    function follow(){
        setIsFollowing(!isFollowing);
    }
    return (
        <div className="card">
            <img
              src={props.img}
              alt="User Picture"
              className="user-image"
            />
            <h2 className="username">{props.username}</h2>
            <button className="follow-button" onClick={follow}>{isFollowing ? "Following!" : "Follow"}</button>
        </div>
    );
}