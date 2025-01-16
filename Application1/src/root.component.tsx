
import {Switch , Route} from "react-router-dom"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { ListingPage } from "./pages/ListingPage/ListingPage"



export default function Root(props) {
  return  <Switch>
           <Route exact path="/app1/">
            <Dashboard />
          </Route>
          <Route  exact path="/app1/list">
            <ListingPage />
          </Route>
  </Switch>
}
