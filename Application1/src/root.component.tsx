
import {Switch , Route} from "react-router-dom"
import { Dashboard } from "./pages/Dashboard/Dashboard"
import { ListingPage } from "./pages/ListingPage/ListingPage"



export default function Root() {
  return  <Switch>
           <Route exact path="/">
            <Dashboard />
          </Route>
          <Route  exact path="/list">
            <ListingPage />
          </Route>
  </Switch>
}
