function UsersCard({users}) {

    return (
        <>
        {users?.map((user, index) => (
            <div key={index}>
                <p>{user.firstName} {user.lastName}</p>
                <p>{user.role}</p>
                <p>{user.email}</p>
            </div>
        ))}

        </>
    )
}

export default UsersCard
