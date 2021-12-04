import React, {useState} from 'react';


function UsersCard({user}) {
    const [showContent, setShowContent] = useState(false)

    const showMoreContent = () => {
        !showContent ? setShowContent(true) : setShowContent(false)
    }

    return (
        <div className='profile-container'>
            <div className='profile-img'>
                <i className="fas fa-user-alt"></i>
            </div>

            <div className='profile-content'>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.role}</p>
                <p>{user.email}</p>

                {showContent ?
                    <div className='content-details'>
                        <p>{user.street},{user.city},{user.state} {user.zip}</p>
                        <p>{user.phone}</p>
                        <p>{user.createdAt}</p>
                        <p>{user.lastLoggedIn}</p>
                    </div>
                : ""}
            </div>

            <div className='profile-show-content'>
                {!showContent ?
                    <i onClick={showMoreContent} className="fas fa-angle-down"></i>
                    :
                    <i onClick={showMoreContent} className="fas fa-angle-up"></i>
                }
            </div>

        </div>
    )
}

export default UsersCard
