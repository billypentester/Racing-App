import { useState } from 'react'
import Data from './../data/data.json'

const Gallery = () => {

  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const filteration = (e) => {
    setSearch(e.target.value)
    if(e.target.value == '') {
      setFilteredData([])
    }
    else
    {
      const filtered = Data.filter(item => {
        return item.tag.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setFilteredData(filtered)
    }
  }
  
  return (
    <div>
      <div className='bg-gray-100 flex flex-1 justify-center py-10'>
        <div className='w-3/5'>
          <div className="flex flex-1">
          <input type="text" placeholder="Type here tags like Nature, Technology, Travel, Food, Sports, Health, Fitness, Art" className="input input-bordered w-full mr-4" value={search} onChange={filteration} />
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-wrap justify-center py-10 gap-5'>
        {
          filteredData.map((item, index) => {
            return(
              <div key={index} className='w-1/4'>
                <div className="card bordered shadow-lg">
                  <div className="card-body">
                    <img src={item.image} alt={item.tag} className='rounded-lg' />
                    <h2 className="card-title">{item.tag}</h2>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery
