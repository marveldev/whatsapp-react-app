import './topNav.scss'

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="header">
        <h3>WhatsApp</h3>
        <div>
          <button><i className="fa fa-search"></i></button>
          <button>
            <i className="material-icons">&#xe5d4;</i>
          </button>
        </div>
      </div>
      <nav className="nav">
        <button><i className="fa fa-camera"></i></button>
        <button className="active">CHATS</button>
        <button>STATUS</button>
        <button>CALLS</button>
      </nav>
    </div>
  )
}

export default TopNav
