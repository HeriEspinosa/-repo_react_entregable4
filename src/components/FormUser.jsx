import React from "react";
import { useForm } from "react-hook-form";

const FormUser = ({ createNewUser }) => {

    const { reset, register, handleSubmit } = useForm()

    const sumit = data => {
        createNewUser(data);
    }

    return (
        <form action="" onSubmit={handleSubmit(sumit)}>
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
            <button>Create</button>
        </form>
    );
}

export default FormUser;
