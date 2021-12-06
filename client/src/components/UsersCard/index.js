import React, {useState} from 'react';



function UsersCard({user, index}) {
    const dayjs = require('dayjs')

    const [showContent, setShowContent] = useState(false)

    const showMoreContent = () => {
        !showContent ? setShowContent(true) : setShowContent(false)
    }

    const changeAvatarColor = () =>  {
        let color = ""

        if (user.id === 0 || user.id === 1) color = "#2081C3"
        else if (user.id === 2) color = "#6BAAAB"
        else if (user.id === 3 || user.id === 4) color = "#7E7E7E"

        return color
    }

    const formatPhoneNumber = (phoneNumber) => {
        if (typeof(input) !== 'string') phoneNumber = phoneNumber.toString()
        return "("+phoneNumber.substring(0,3)+")"+phoneNumber.substring(3,6)+"-"+phoneNumber.substring(6,11)
    }

    const formatTimeZone = (time) => {
        return dayjs(time).format("MM/DD/YY h:mm A")
    }


    return (
        <div className='profile-container' key={index}>

            <div className='profile-img'>
                <i className="fas fa-user-alt" style={{color:changeAvatarColor()}}></i>
            </div>

            <div className='profile-content'>
                <div className='profile-header'>
                    <h1 className='user-name'>{user.firstName} {user.lastName}</h1>
                    <p className='user-role'>{user.role}</p>
                    <p className='user-email'>{user.email}</p>
                </div>

                {showContent ?
                    <div className='content-details-container'>
                        <div className='content-details'>
                            <h1>Address</h1>
                            <p>{user.street}, {user.city}, {user.state} {user.zip}</p>
                        </div>
                        <div className='content-details'>
                            <h1>Phone</h1>
                            <p>{formatPhoneNumber(user.phone)}</p>
                        </div>
                        <div className='content-details'>
                            <h1>Created At</h1>
                            <p>{formatTimeZone(user.createdAt)}</p>
                        </div>
                        <div className='content-details'>
                            <h1>Last Loggined In</h1>
                            <p>{formatTimeZone(user.lastLoggedIn)}</p>
                        </div>
                    </div>
                : ""}
            </div>

            <div className='profile-show-content-icons'>
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
