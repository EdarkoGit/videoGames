import './App.css';
import {Switch,Route} from 'react-router-dom' // Routes similar al antiguo switch
import Landing from './Components/Landing/Landing';
import Create from './Components/Create/Create';
import Delete from './Components/Delete/Delete';
import Home from './Components/Home/Home';
import Default from './Components/Default/Default';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { getAllGenres, reqGetMyServer } from './actions/actions';
import Header from './Components/Header/Header';
import Detail from './Components/Detail/Detail';



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(reqGetMyServer())
    dispatch(getAllGenres())
  }, [dispatch])
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route >
          <Route path='/' component={Header}/>
          <main>
            <Switch>
              <Route exact path='/home' component={Home}/>
              <Route exact path='/create' component={Create}/>
              <Route exact path='/delete' component={Delete}/>
              <Route exact path='/detail/:idVideogame' component={Detail}/>
              <Route path='/*' component={Default}/>
            </Switch>
          </main>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
