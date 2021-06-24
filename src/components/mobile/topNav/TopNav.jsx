import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { currentPageActions } from '../homePage/slice'
import './topNav.scss'

const TopNav = () => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const [logoIsActive, setLogoIsActive] = useState(true)
  const { currentPage } = useSelector(state => state.currentPage)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    const toggleLogoDisplay = () => {
      const currentScroll = window.pageYOffset
      const checkpoint = 80
      if (currentScroll >= checkpoint) {
        setLogoIsActive(false)
      } else {
        setLogoIsActive(true)
      }
    }

    window.addEventListener('scroll', toggleLogoDisplay)

    return () => window.removeEventListener('scroll', toggleLogoDisplay)
  }, [])

  const switchCurrentPage = page => {
    dispatch(currentPageActions.setCurrentPage(page))
    localStorage.setItem('storedPage', page)
  }

  return (
    <div className="top-nav">
      {logoIsActive && (
        <div className="header">
          <h3>WhatsApp</h3>
          <div>
            <button><i className="fa fa-search" /></button>
            <button onClick={() => setDropdownIsOpen(true)}>
              <i className="material-icons">&#xe5d4;</i>
            </button>
          </div>
        </div>
      )}
      <nav className="nav">
        <button><i className="fa fa-camera" /></button>
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
            <button onClick={() => history.push('/settingsPage')}>Settings</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TopNav
