import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [users, setUsers] = useState()
  const [updateUser, setUpdateUser] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const getAllUsers = () => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = (id) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.patch(url, data)
      .then(res => {
        getAllUsers()
        setUpdateUser()
      })
      .catch(err => console.log(err))
  }

  const handleShowForm = () => {
    setIsOpen(true)
  }

  const handleHiddenForm = () => {
    setIsOpen(false)
  }

  console.log(users);
  return (

    <div className="App">
      <div className='container'>
        <Banner />
        <button className='show__form' onClick={handleShowForm}>Register</button>
        <div className={`app__form ${isOpen && 'app__form-visible'}`}>
          <FormUser
            createNewUser={createNewUser}
            updateUser={updateUser}
            updateUserById={updateUserById}
            handleHiddenForm={handleHiddenForm}
          />
        </div>

        <div className="container__card">
          {
            users?.map(user => (
              <UserCard
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setUpdateUser={setUpdateUser}
                handleShowForm={handleShowForm}
              />
            ))
          }
        </div>
      </div>

      <div className='banner__right'>
        <div className="banner__letter">
          <h1>N</h1>
          <h1>O</h1>
          <br />
          <h1>S</h1>
          <h1>T</h1>
          <h1>O</h1>
          <h1>P</h1>
        </div>
        <div className='banner__right_social'>
          <p className="footer__information-info"><a href="http://facebook.com" target="_blank"><i className='bx bxl-facebook-circle'></i></a></p>
          <p className="footer__information-info"><a href="http://instagram.com/hr_espinosa" target="_blank"><i className='bx bxl-instagram-alt' ></i></a></p>
          <p className="footer__information-info"><a href="https://www.linkedin.com/in/heri-espinosa/" target="_blank"><i className='bx bxl-linkedin' ></i></a></p>
        </div>
      </div>


    </div>

  )
}

export default App
