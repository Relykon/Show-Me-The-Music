import React from 'react';
import { Link } from 'react-router-dom';
import './TopArtists.css';
// import Artist from '../Artist/Artist';
import TopArtistsCalls from '../../Models/TopArtistsCalls.js';

class TopArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dailyTopArtists: [],
            weeklyTopArtists: [],
            monthlyTopArtists: [],
            yearlyTopArtists: [],
            selectedTrack: {},
            currentTrackId: '',
        };
    }

    loadDailyTopArtists() {
        return TopArtistsCalls.getDailyTopArtists()
            .then(DailyTopArtists => {
                console.log(DailyTopArtists, 'Daily Top Artists')
                this.setState({ DailyTopArtists });
            })
            .catch(err => Error(err, "Loading Tracks"));
    }

    loadWeeklyTopArtists() {
        return TopArtistsCalls.getWeeklyTopArtists()
            .then(weeklyTopArtists => {
                console.log(weeklyTopArtists, 'Weekly Top Artists')
                this.setState({ weeklyTopArtists });
            })
            .catch(err => Error(err, "Loading Tracks"));
    }

    loadMonthlyTopArtists() {
        return TopArtistsCalls.getMonthlyTopArtists()
        .then(MonthlyTopArtists => {
            console.log(MonthlyTopArtists, 'Monthly Top Artists')
            this.setState({ MonthlyTopArtists });
        })
        .catch(err => Error(err, "Loading Tracks"));
    }

    loadYearlyTopArtists() {
        return TopArtistsCalls.getYearlyTopArtists()
            .then(YearlyTopArtists => {
                console.log(YearlyTopArtists, 'Yearly Top Artists')
                this.setState({ YearlyTopArtists });
            })
            .catch(err => Error(err, "Loading Tracks"));
    }

    componentDidMount() {
        this.loadWeeklyTopArtists();
    }

    render() {
        const topArtistsList = this.state.weeklyTopArtists.map(artist => (
            <div className="TopArtistsList">
                <h1>{artist.name}</h1>
                <img src={`${artist.image}`} alt="Album Art" />
                <br></br>
                <Link to={artist.id}>view artist details</Link>
            </div>
        ));


        return (
            <div className="TopArtists">
                <h4>View Top Artists By:</h4>
                    <Link to="/dailytop">Today</Link> | <Link to="/weeklytop">This Week</Link> | <Link to="/monthlytop">This Month</Link> | <Link to="/yearlytop">This Year</Link>
                <h1>This Week's Top Artists</h1>
                {topArtistsList}
            </div>
        )
    }
};


export default TopArtists;