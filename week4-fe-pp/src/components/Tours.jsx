import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'
import { useState } from 'react'

const Tours = () => {
  const [toursData, setToursData] = useState(tours)

  const handleDeleteItem = (tourId) => {
    const updatedItems = toursData.filter((item) => item.id !== tourId)
    setToursData(updatedItems)
  }

  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        {toursData.map((tour) => (
          <Tour key={tour.id} {...tour} onDelete={handleDeleteItem} />
        ))}
      </div>
    </section>
  )
}
export default Tours
