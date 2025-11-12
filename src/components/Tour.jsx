function Tour({
  id,
  image,
  date,
  title,
  info,
  location,
  duration,
  cost,
  difficulty,
  rating,
  onDelete,
}) {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={image} className='tour-img' alt={title} />
        <p className='tour-date'>{date}</p>
        <p className='tour-difficulty'>{difficulty}</p>
      </div>

      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
          <p className='tour-rating'>⭐ {rating}</p>
        </div>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span>
              <i className='fas fa-map' />
            </span>
            {location}
          </p>
          <p>from {cost}</p>
          <p>{duration} days</p>
        </div>

        {/* DELETE BUTTON */}
        <div className='tour-btn'>
          <button className='btn' onClick={() => onDelete(id)}>
            Not Interested
          </button>
        </div>
      </div>
    </article>
  )
}

export default Tour
