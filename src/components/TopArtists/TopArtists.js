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
            mainArtistList: [],
            selectedTrack: {},
            currentTrackId: '',
        };
    }

    loadDailyTopArtists() {
        TopArtistsCalls.getDailyTopArtists()
            .then(e => {
                console.log(e, 'Daily Top Artists')
                this.setState({ mainArtistList: e });
            })
            .catch(err => Error(err, "Loading Tracks"));
    }

    loadWeeklyTopArtists() {
        TopArtistsCalls.getWeeklyTopArtists()
            .then(weeklyTopArtists => {
                console.log(weeklyTopArtists, 'Weekly Top Artists')
                this.setState({ mainArtistList: weeklyTopArtists });
            })
            .catch(err => Error(err, "Loading Tracks"));
    }

    loadMonthlyTopArtists() {
        TopArtistsCalls.getMonthlyTopArtists()
        .then(MonthlyTopArtists => {
            console.log(MonthlyTopArtists, 'Monthly Top Artists')
            this.setState({ mainArtistList: MonthlyTopArtists });
        })
        .catch(err => Error(err, "Loading Tracks"));
    }

    loadYearlyTopArtists() {
        TopArtistsCalls.getYearlyTopArtists()
            .then(YearlyTopArtists => {
                this.setState({ mainArtistList: YearlyTopArtists });
                console.log(YearlyTopArtists, 'Yearly Top Artists');
            })
            .catch(err => Error(err, "Loading Tracks"));
    }

    toggleTopArtistsCall() {

    }

    componentDidUpdate() {

    }
    
    componentDidMount() {
        this.loadWeeklyTopArtists();
    }
    
    render() {
        let pathname = this.props.location.pathname;
        let lengthOfTime;
        if (pathname === '/weeklytop'){
            this.loadWeeklyTopArtists();
            this.lengthOfTime = 'Week\s'
        } else if (pathname === '/yearlytop'){
            this.loadYearlyTopArtists();
        } else if (pathname === '/monthlytop'){
            this.loadMonthlyTopArtists();
        } else if (pathname === '/dailytop'){
            this.loadDailyTopArtists();
        };

        let topArtistsList = this.state.mainArtistList.map(artist => (
            <div className="TopArtistsList">
                <h1 className="ArtistName">{artist.name}</h1>
                <img src={`${artist.image}`} alt="Album Art" />
                <br></br>
                <Link to={artist.id}>view artist details</Link>
            </div>
        ));


        return (
            <div className="TopArtists">
                <h4>View Top Artists By:</h4>
                    <Link to="/dailytop">Today</Link> | <Link to="/weeklytop">This Week</Link> | <Link to="/monthlytop">This Month</Link> | <Link to="/yearlytop">This Year</Link>
                <h1>This {lengthOfTime} Top Artists</h1>
                {topArtistsList}
            </div>
        )
    }
};


export default TopArtists;