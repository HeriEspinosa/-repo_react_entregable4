import React from 'react'

const UserCard = ({ user, deleteUserById }) => {

    const handleDelete = () => {
        deleteUserById(user.id)
    }

    return (
        <article className="card">
            <h3 className='card__name'>{`${user.first_name} ${user.last_name}`}</h3>
            <hr />
            <ul>
                <li><span>Email: </span>{user.email}</li>
                <li><span>Birthday: </span>{user.birthday}</li>
            </ul>
            <hr />
            <button onClick={handleDelete} className='card__btn_delete'>Delete</button>
            <button className='card__btn_update'>Update</button>
        </article>
    )
}

export default UserCard