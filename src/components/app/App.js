import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Switch, Route } from 'react-router-dom';
import TopArtists from '../TopArtists/TopArtists';
import Artist from '../Artist/Artist';
import Error404 from '../Error404/Error404';

const App = () => (

    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" render={(props) => <TopArtists {...props}/>} />
        <Route exact path="/dailytop" render={(props) => <TopArtists {...props}/>} />
        <Route exact path="/weeklytop" render={(props) => <TopArtists {...props}/>} />
        <Route exact path="/monthlytop" render={(props) => <TopArtists {...props}/>} />
        <Route exact path="/yearlytop" render={(props) => <TopArtists {...props}/>} />
        <Route exact path="/:id" render={(props) => <Artist {...props}/>} />
        <Route component={Error404} />
      </Switch>
    </div> 

);

export default App;
