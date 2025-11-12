const Service = ({ id, icon, title, text, details, onDelete }) => {
  return (
    <article className='service'>
      <span className='service-icon'>
        <i className={icon}></i>
      </span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
        {details && <p className='service-details'>{details}</p>}
        <button className='btn' onClick={() => onDelete(id)}>
          Remove
        </button>
      </div>
    </article>
  )
}

export default Service
