import axios from 'axios'
import { useEffect, useState } from 'react'
import './styles/App.css'
import Banner from './components/Banner'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import Footer from './components/Footer'
import BannerRight from './components/BannerRight'

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

  console.log(users);

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

  return (
    <div className="App">
      <div className="main">
        <Banner />
        <button className="show__form" onClick={handleShowForm}>REGISTER</button>
        <div className={`app__form ${isOpen && 'app__form-visible'}`}>
          <FormUser
            createNewUser={createNewUser}
            updateUser={updateUser}
            updateUserById={updateUserById}
            handleHiddenForm={handleHiddenForm}
          />
        </div>
        <div className="container">
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
          <div className="container__banner">
            <BannerRight />
          </div>

        </div>

      </div>



      <Footer />
    </div>

  )
}

export default App
