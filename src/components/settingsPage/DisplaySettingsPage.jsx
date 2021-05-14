const DisplaySettingsPage = () => {
  return (
    <div className="display-settings-page">
      <div className="header">
        <button className="material-icons">&#xe5c4;</button>
        <p>Chats</p>
      </div>
      <div className="content">
        <div className="display-setting">
          <h4>Display</h4>
          <button>
            <i className="material-icons">&#xe3ab;</i>
            <div>
              <p>Theme</p>
              <span>Light</span>
            </div>
          </button>
          <button>
            <i className="material-icons">&#xe1bc;</i>
            <div>
              <p>Wallpaper</p>
            </div>
          </button>
        </div>
        <div className="chat-settings">
          <h4>Chat settings</h4>
          <label>
            <div>
              <p>Enter is send</p>
              <span>Enter key will send your message</span>
            </div>
            <div className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </div>
          </label>
          <label>
            <div>
              <p>Media visibility</p>
              <span>Show newly downloaded media in your phone's gallery</span>
            </div>
            <div className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </div>
          </label>
          <button>
            <p>Font size</p>
            <span>Medium</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DisplaySettingsPage
