import { BrowserRouter, Route, Switch } from "react-router-dom"
import { HomePage } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-layer">
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App

