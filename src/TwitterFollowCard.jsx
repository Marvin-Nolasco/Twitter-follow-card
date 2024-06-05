import './App.css'
import { useState } from 'react'

export function TwitterFollowCard ({children, userName, initialIsFollowing }){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassname = isFollowing ? 'tw-followCard-button is-following': 'tw-followCard-button'   
    
    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }
    return(
        <article>
        <header className='container'>
            <img className='avatar' src={`https://unavatar.io/twitter/${userName}`} alt="El avatar" />
            <div className='names'>
                <strong>{ children }</strong>
                <span>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassname} onClick={handleClick}>
               <span className='tw-follow-card-text'>{text}</span>
                <span className='tw-follow-card-stop-follow'>Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}