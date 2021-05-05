import { BrowserRouter, Route, Switch } from "react-router-dom"
import { TopNav } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layer">
        <Switch>
          <Route path="/" component={TopNav} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

