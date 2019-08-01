import React from 'react';
import { Link } from 'react-router-dom';
import './TopArtists.css';
// import Artist from '../Artist/Artist';
import TopArtistsCalls from '../../Models/TopArtistsCalls.js';

class TopArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topArtists: [],
            selectedTrack: {},
            currentTrackId: '',
        };
    }

    loadTopArtists() {
        return TopArtistsCalls.getTopArtists()
            .then(topArtists => {
                console.log(topArtists, 'Top Artists')
                this.setState({ topArtists });
            })
            .catch(err => Error(err, "Loading Tracks"));
    }

    componentDidMount() {
        this.loadTopArtists();
    }

    render() {
        const topArtistsList = this.state.topArtists.map(artist => (
            <div>
                <h1>{artist.name}</h1>
                <img src={`${artist.image}`} alt="Album Art" />
                <br></br>
                <Link to={artist.id}>view artist details</Link>
                {/* //TODO: look up how to convert string into html for bio */}
            </div>
        ));


        return (
            <div className="TopArtists">
                <h4>View Top Artists By:</h4>
                    <Link to="/dailytop">Today</Link> | <Link to="/weeklytop">This Week</Link> | <Link to="/monthlytop">This Month</Link>
                <h1>This Week's Top Artists</h1>
                <ul>{topArtistsList}</ul>
            </div>
        )
    }
};


export default TopArtists;