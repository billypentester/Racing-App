import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="container mx-auto px-5 my-16">
        <div className='my-10'>
            <h1 className="text-5xl text-center my-3">Contact Us</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center my-10">
            <div className="w-full md:w-1/3">
                <img src="https://i.pinimg.com/originals/a0/b0/b0/a0b0b0f6b34f192fbb28c4104eb5c5f3.png" alt="" className="w-full" />
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center items-center gap-4">
                <div class="form-control w-full max-w-full">
                    <label class="label">  <span class="label-text">Name</span></label>
                    <input type="text" placeholder="Type your name...." class="input input-bordered w-full max-w-full" />
                </div>
                <div class="form-control w-full max-w-full">
                    <label class="label">  <span class="label-text">Email</span></label>
                    <input type="text" placeholder="Type your name...." class="input input-bordered w-full max-w-full" />
                </div>
                <div class="form-control w-full max-w-full">
                    <label class="label">  <span class="label-text">Message</span></label>
                    <textarea className="textarea textarea-bordered" placeholder="Write your message here..." rows="5" cols="10" resize="none"></textarea>
                </div>
                <button className="btn btn-neutral btn-wide my-4">Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
