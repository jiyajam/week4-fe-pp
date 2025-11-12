import { useState } from 'react'

const Registration = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registration Submitted:', {
      name,
      email,
      password,
      address,
      phoneNumber,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        name='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type='text'
        name='address'
        placeholder='Address'
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type='text'
        name='phoneNumber'
        placeholder='Phone Number'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type='submit'>Register</button>
    </form>
  )
}

export default Registration
