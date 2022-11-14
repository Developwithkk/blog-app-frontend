import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div>
      <div className="imgcontainer">
        <img className='photo' src="https://pbs.twimg.com/profile_images/1559208751118237696/DDU0lCEI_400x400.jpg" alt="Divine" />
      </div>
      <h2 className='title'>Divine Trades</h2>
      <p className="desc">Investment and Trading Advisory</p>
      <p className="desc">Email - Krishna.me.aiet@gmail.com</p>
      <form action="#" className='forum'>
        <label className='tag' htmlFor="name">Name</label>
        <input className='feed' type="text" name="" id="name" placeholder='Enter Name'  />
        <label className='tag' htmlFor="email">Email</label>
        <input className='feed' type="email" placeholder='Enter email' id='email'/>
        <label className='tag' htmlFor="number" >Number</label>
        <input className='feed' type="tel"  id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
        <label className='tag' htmlFor="desc">Query</label>
        <textarea className='area' name="query" id="desc" cols="30" rows="10"></textarea>
      </form>
      <button className='btn'>Submit</button>
    </div>
  )
}

export default Contact
