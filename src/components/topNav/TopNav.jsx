const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="header">
        <h3>WhatsApp</h3>
        <div>
          <button className="search-button"><i className="fa fa-search"></i></button>
          <button className="top-nav-dropdown">
            <i className="material-icons">&#xe5d4;</i>
          </button>
        </div>
      </div>
      <nav>
        <button type="button"className="page"><i className="fa fa-camera"></i></button>
        <button type="button" className="default active page">CHATS</button>
        <button type="button" className="status page">STATUS</button>
        <button type="button" className="call page">CALLS</button>
      </nav>
    </div>

  )
}

export default TopNav
