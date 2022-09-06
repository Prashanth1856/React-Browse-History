import './index.css'

const History = props => {
  const {historyData, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyData

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="bottom-container">
      <p className="time">{timeAccessed}</p>
      <div className="content-and-delete">
        <div className="inner-container">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="domain">{domainUrl}</p>
        </div>
        <button type="button" className="delete-button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default History
