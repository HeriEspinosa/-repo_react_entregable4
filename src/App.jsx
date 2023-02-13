import axios from 'axios'
import { useEffect, useState } from 'react'
import './styles/App.css'
import Banner from './components/Banner'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import Footer from './components/Footer'
import BannerRight from './components/BannerRight'
import swal from 'sweetalert';
import defaultValues from './utils/defaultValues'
import Loading from './components/Loading'

function App() {

  const [users, setUsers] = useState()
  const [updateUser, setUpdateUser] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getAllUsers = () => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.get(url)
      .then(res => {
        setUsers(res.data)
        setIsLoading(false)
      })
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
        sweetSuccess()
        getAllUsers()
        handleHiddenForm()

      })
      .catch(err => {
        sweetEmptyFields()
        console.log(err)
      }

      )
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
        sweetSuccessUpdate()
        setUpdateUser()
        getAllUsers()
        handleHiddenForm()
      })
      .catch(err => console.log(err))
  }

  const handleShowForm = () => {
    setIsOpen(true)
  }

  const handleHiddenForm = () => {
    setIsOpen(false)
  }

  const sweetSuccess = () => {
    swal({
      title: "User created successfully",
      text: "Thanks for using our service",
      icon: "success",
      button: "Accept",
      timer: "3000"
    })
  }

  const sweetEmptyFields = () => {
    sweetAlert({
      title: "You have empty fields",
      text: "We do not accept empty fields",
      icon: "warning",
      buttons: "Accept"
    })
  }

  const sweetSuccessUpdate = () => {
    swal({
      title: "User updated successfully",
      text: "Thanks for using our service",
      icon: "success",
      button: "Accept",
      timer: "2800"
    })
  }

  const sweetDelete = () => {
    swal({
      title: "User deleted successfully",
      text: "Thanks for using our service",
      icon: "error",
      buttons: "accept",
      timer: "2800"
    })
  }

  return (
    <div className="App">

      {
        isLoading ?
          <Loading />
          :
          <>
            <div className="main">
              <Banner />
              <button className="show__form" onClick={handleShowForm}><i className='bx bx-user-plus'></i> NEW REGISTER</button>
              <div className={`app__form ${isOpen && 'app__form-visible'}`}>
                <FormUser
                  createNewUser={createNewUser}
                  updateUser={updateUser}
                  updateUserById={updateUserById}
                  handleHiddenForm={handleHiddenForm}
                  setUpdateUser={setUpdateUser}
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
                        sweetDelete={sweetDelete}
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
          </>
      }
    </div>
  )
}

export default App
