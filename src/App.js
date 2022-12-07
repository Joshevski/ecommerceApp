import React from 'react'

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats'
    },
    {
      id: 2,
      title: 'Jackets'
    },
    {
      id: 3,
      title: 'Hats'
    },
    {
      id: 4,
      title: 'Womens'
    },
    {
      id: 5,
      title: 'Mens'
    },
  ]
  return (
    <div className='categories-container'>
      {categories.map(({title}) => (
        <div className='category-contanier'>
             <div className='background-image'></div>
              <div>
                <h1>{title}</h1>
                <p>Shop now</p>
              </div>
        </div>
      ))}

    </div>
  )
}

export default App