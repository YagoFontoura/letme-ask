import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRooms";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom/AdminRoom";

import { Route, BrowserRouter ,Switch} from "react-router-dom";
import {AuthContextProvider} from '../src/context/AuthContext'

function App() {
  

  return (
    <BrowserRouter>
     <AuthContextProvider>
       <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room}/>
        <Route path="/admin/rooms/:id" component={AdminRoom}/>
       </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
