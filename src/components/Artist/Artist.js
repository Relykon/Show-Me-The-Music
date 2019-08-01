import React from 'react';
import { Link } from 'react-router-dom';
import './Artist.css';
import ArtistTracksCalls from '../../Models/ArtistTracksCalls';

class Artist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentArtist: {},
            artistTracks: []
        };
    }
    
    loadArtistTracks() {
        console.log(this.props)
        return ArtistTracksCalls.getArtistTracks(this.props.match.params.id)
            .then(artistTracks => {
                console.log(artistTracks, 'Artist Tracks')
                this.setState({ artistTracks });
            })
            .catch(err => Error(err, "Loading Artists Tracks"));
    }

    loadArtistDetails() {
        return ArtistTracksCalls.getArtistDetails(this.props.match.params.id)
            .then(currentArtist => {
                console.log(currentArtist, 'fd')
                this.setState({ currentArtist });
            })
            .catch(err => Error(err, "Loading Artist"));
    }

    componentDidMount() {
        this.loadArtistTracks();
        this.loadArtistDetails();
    }

    render() {
        const artistTracksList = this.state.artistTracks.map(track => (
            <div>
                <a href={track.previewURL} target="_blank">{track.name}</a>
                {/* <Link to={track.previewURL}>Play me bitch</Link> */}
            </div>
            
        ));
        
        const artist = this.state.currentArtist;
        console.log(artist, 'aaa')
        
        return (
            <div className="ArtistTracks">
                <h1>{artist.name}</h1>
                <img src={`${artist.image}`} alt="Album Art" />
                <h3>Tracks:</h3>
                <ul>{artistTracksList}</ul>
                <div className="ArtistBio">
                    <h5>About {artist.name}:</h5>
                    <p dangerouslySetInnerHTML={{ __html: artist.bio }}/>
                </div>
            </div>
        )
    }
};

export default Artist;