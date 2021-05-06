import { useDispatch, useSelector } from 'react-redux'
import { currentPageActions } from '../homePage/slice'
import './topNav.scss'

const TopNav = () => {
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
          <button>
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
    </div>
  )
}

export default TopNav
