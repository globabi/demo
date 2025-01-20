import React from 'react'
import Modal from 'react-modal'
import { EN } from '../../content/language/en'
import { useState } from 'react'

export default function Login() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <span>
      <button onClick={openModal} style={{ marginLeft: '1em' }} href=''>
        {EN.LOGIN}
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Example Modal'>
        <h2>Log in</h2>
        <button style={{ position: 'absolute', right: '1em', top: '1em' }} onClick={closeModal}>
          x
        </button>
        <form>
          <div>
            <label htmlFor='fname'>Username : </label>
            <input type='text' id='fname' name='fname' />
          </div>
          <div>
            <label htmlFor='lname'>Password : </label>
            <input type='text' id='lname' name='lname' />
          </div>
          <input type='submit' value='Submit' />
        </form>
      </Modal>
    </span>
  )
}
