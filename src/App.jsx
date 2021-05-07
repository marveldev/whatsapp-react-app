import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ChatPage, HomePage } from './components'
import './index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layer">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/chatPage" component={ChatPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

