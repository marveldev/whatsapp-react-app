import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentPageActions } from '../homePage/slice'
import './topNav.scss'

const TopNav = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const dispatch = useDispatch()
  const { currentPage } = useSelector(state => state.currentPage)

  const switchCurrentPage = page => {
    dispatch(currentPageActions.setCurrentPage(page))
    localStorage.setItem('storedPage', page)
  }

  return (
    <div className="top-nav">
      <div className="header">
        <h3>WhatsApp</h3>
        <div>
          <button><i className="fa fa-search"></i></button>
          <button onClick={() => setDropdownIsOpen(true)}>
            <i className="material-icons">&#xe5d4;</i>
          </button>
        </div>
      </div>
      <nav className="nav">
        <button><i className="fa fa-camera"></i></button>
        <button onClick={() => switchCurrentPage('contactList')}
          className={currentPage === 'contactList' ? 'active' : ''}
        >
          CHATS
        </button>
        <button onClick={() => switchCurrentPage('statusPage')}
          className={currentPage === 'statusPage' ? 'active' : ''}
        >
          STATUS
        </button>
        <button onClick={() => switchCurrentPage('callsPage')}
          className={currentPage === 'callsPage' ? 'active' : ''}
        >
          CALLS
        </button>
      </nav>
      {dropdownIsOpen && (
        <div onClick={() => setDropdownIsOpen(false)} className="overlay">
          <div className="dropdown">
            <button>New group</button>
            <button>New broadcast</button>
            <button>WhatsApp Web</button>
            <button>Starred messages</button>
            <button>Settings</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TopNav
