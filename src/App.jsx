import {TwitterFollowCard} from './TwitterFollowCard'
import './App.css'

const users = [
    {
        userName: 'Ernesto40590251',
        name: 'marvin Nolasco',
        isFollowing: false
    },
    {
        userName: 'Karelyruizz33',
        name: 'Karely Ruiz',
        isFollowing: true
    },
    {
        userName: 'MariaBecerra22',
        name: 'Maria Becerra',
        isFollowing: false
    },
    {
        userName: 'MRBeast',
        name: 'Mr Beast',
        isFollowing: true
    },
]

export function App () {
    return(
        <div className='tw-target-followers'>
        {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
        }
        </div>
    )
}

 