import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import defaultValues from "../utils/defaultValues";

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

    return (
        <section className="container__form" >
            <form className="form__users" action="" onSubmit={handleSubmit(sumit)}>
                <h2 className="form__title">Insert User</h2>
                <div>
                    <label htmlFor="firstname" placeholder="Insert your first name">First Name: </label>
                    <input {...register('first_name')} type="text" id="firstName" />
                </div>
                <div>
                    <label htmlFor="lastname" placeholder="Insert your last name"> Last Name: </label>
                    <input {...register('last_name')} type="text" id="lastName" />
                </div>
                <div>
                    <label htmlFor="email" placeholder="Insert your email">Email: </label>
                    <input {...register('email')} type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password" placeholder="Insert your password">Password: </label>
                    <input {...register('password')} type="password" id="password" />
                </div>
                <div>
                    <label htmlFor="birthday" placeholder="Insert your birthday">Birthday: </label>
                    <input {...register('birthday')} type="date" id="birthday" />
                </div>
                <button>{updateUser ?
                    'Update'
                    :
                    'Create'}
                </button>
            </form>
        </section>

    );
}

export default FormUser;
