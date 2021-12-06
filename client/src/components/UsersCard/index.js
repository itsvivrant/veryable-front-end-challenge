import React, {useState} from 'react';



function UsersCard({user, index}) {
    const [showContent, setShowContent] = useState(false)

    const showMoreContent = () => {
        !showContent ? setShowContent(true) : setShowContent(false)
    }

    return (
        <div className='profile-container' key={index}>

            <div className='profile-img'>
                <i className="fas fa-user-alt"></i>
            </div>

            <div className='profile-content'>
                <div className='profile-header'>
                    <h1 className='user-name'>{user.firstName} {user.lastName}</h1>
                    <p className='user-role'>{user.role}</p>
                    <p className='user-email'>{user.email}</p>
                </div>

                {showContent ?
                    <div className='content-details'>
                        <p>{user.street}, {user.city}, {user.state} {user.zip}</p>
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
