import { useState, useContext } from 'react'
import { AppContext } from './../App'
import Data from './../data/data.json'

const Gallery = () => {

  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [loading, setLoading] = useState(false)

  const { cart, setCart } = useContext(AppContext)

  const AddtoCart = (id, image, tag) => {
    let check = cart.find(item => item.id == id)
    if(check) {
      let item = cart.filter(item => item.id == id)
      item[0].quantity++
      setCart([...cart])
    }
    else
    {
      let item = { id, image, tag, quantity: 1, price: 13 }
      setCart([...cart, item])
    }
  }

  const filteration = (e) => {
    setSearch(e.target.value)
    if(e.target.value == '') {
      setFilteredData([])
    }
    else
    {
      setLoading(true)
      const filtered = Data.filter(item => {
        return item.tag.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setFilteredData(filtered)
      setLoading(false)
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
          loading ? <span className="loading loading-ring loading-lg"></span> : filteredData.length == 0 && search != '' ? <h1 className='text-2xl'>No results found</h1> :
          loading == false && filteredData.length > 0 && filteredData.map((item, index) => {
            return(
              <div key={index} className='w-1/4'>
                <div className="card bordered shadow-lg">
                  <div className="card-body">
                    <img src={item.image} alt={item.tag} className='rounded-lg' />
                    <div className='flex flex-1 justify-between align-middle'>
                      <button className="btn btn-neutral btn-md" onClick={() => AddtoCart(item.id, item.image, item.tag)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-content" viewBox="0 0 576 512" fill="currentColor">
                          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                        </svg>
                        <span className='ml-2'>Add to Cart</span>
                      </button>
                      <h2 className="card-title">
                        <span className='badge badge-accent px-7 text-lg py-5'>{item.tag}</span>
                      </h2>
                    </div>
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
