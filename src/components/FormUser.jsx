import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import defaultValues from "../utils/defaultValues";
import '../styles/formuser.css'

const FormUser = ({ createNewUser, updateUser, updateUserById, handleHiddenForm }) => {

    const { reset, register, handleSubmit } = useForm()

    useEffect(() => {
        if (updateUser) {
            reset(updateUser)
        }
    }, [updateUser])

    const sumit = data => {
        if (updateUser) {
            updateUserById(updateUser.id, data)
            handleHiddenForm()
        }
        else {
            createNewUser(data);
            handleHiddenForm()
        }
        reset(defaultValues)
    }

    const handleCLose = () => {
        handleHiddenForm()
        reset(defaultValues)
    }

    return (
        <section className="container__form" >
            <form className="form__users flex" action="" onSubmit={handleSubmit(sumit)}>
                <h3 onClick={handleCLose} className="form__close">X</h3>
                <h1 className="form__title">* New User *</h1>

                <div>
                    <span className="name__span"><i className='bx bx-user'></i></span>
                    <div className="name flex">
                        <div>
                            <label htmlFor="firstname">First Name: </label>
                            <input {...register('first_name')} type="text" id="firstName" placeholder="First name" />
                        </div>
                        <div>
                            <label htmlFor="lastname"> Last Name: </label>
                            <input {...register('last_name')} type="text" id="lastName" placeholder="Last name" />
                        </div>
                    </div>
                </div>

                <div>
                    <i className='bx bx-envelope'></i>
                    <div className="user flex">
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input {...register('email')} type="email" id="email" placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input {...register('password')} type="password" id="password" placeholder="Password" />
                        </div>
                    </div>
                </div>

                <div>
                    <i className='bx bxs-balloon'></i>
                    <div className="birthday flex">
                        <div>
                            <label htmlFor="birthday">Birthday: </label>
                            <input {...register('birthday')} type="date" id="birthday" />
                        </div>
                    </div>
                </div>

                <button className="form__button">{updateUser ?
                    'UPDATE'
                    :
                    'CREATE'}
                </button>
            </form>
        </section>

    );
}

export default FormUser;
