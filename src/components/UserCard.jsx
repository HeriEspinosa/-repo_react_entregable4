import React from 'react'
import '../styles/usercard.css'

const UserCard = ({ user, deleteUserById, setUpdateUser, handleShowForm, sweetDelete }) => {

    const handleDelete = () => {
        sweetDelete()
        deleteUserById(user.id)
    }

    const handleUpdate = () => {
        setUpdateUser(user)
        handleShowForm()
    }

    return (
        <article className="card">
            <h3 className='card__name'>{`${user.first_name} ${user.last_name}`}</h3>
            <hr />
            <ul>
                <li><span>Email </span><p><i className='bx bx-mail-send'></i> {user.email}</p></li>
                <li><span>Birthday</span><p><i className='bx bxs-gift'></i> {user.birthday}</p></li>
            </ul>
            <hr />
            <div className="card__btn">
                <button onClick={handleDelete} className='card__btn_delete'><i className='bx bx-trash'></i></button>
                <button onClick={handleUpdate} className='card__btn_update'><i className='bx bxs-edit-alt'></i></button>
            </div>
        </article>
    )
}

export default UserCard