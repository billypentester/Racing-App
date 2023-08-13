import React from 'react'

const Gallery = () => {
  return (
    <div className='bg-gray-100 flex flex-1 justify-center py-10'>
      <div className='w-3/5'>
        <div className="flex flex-1">
        <input type="text" placeholder="Type here" className="input input-bordered w-full mr-4" />
        <input type="text" placeholder="Type here" className="input input-bordered w-full mr-4" />
        <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery
