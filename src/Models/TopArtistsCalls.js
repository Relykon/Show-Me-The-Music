const TopArtistsCalls = {};

TopArtistsCalls.getDailyTopArtists = function getDailyTopArtists() {
    console.log('getDailyTopArtists')
    const url = "https://api.napster.com/v2.2/artists/top?range=day"
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'YzQ5ZjUwNmMtMjk2Ny00YWUwLThkOTctNTZhODFjNTI0MWYz'
        }
    })
    .then(result => result.json())
    .then(data => TopArtistsCalls.simplifyArtists(data.artists))
    .catch(err => Error(err, "Loading Top Artists of the Day..."));
};

TopArtistsCalls.getWeeklyTopArtists = function getWeeklyTopArtists() {
    console.log('getWeeklyTopArtists')
    const url = "https://api.napster.com/v2.2/artists/top?range=week"
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'YzQ5ZjUwNmMtMjk2Ny00YWUwLThkOTctNTZhODFjNTI0MWYz'
        }
    })
    .then(result => result.json())
    .then(data => TopArtistsCalls.simplifyArtists(data.artists))
    .catch(err => Error(err, "Loading Top Artists of the Week..."));
};

TopArtistsCalls.getMonthlyTopArtists = function getMonthlyTopArtists() {
    console.log('getMonthlyTopArtists')
    const url = "https://api.napster.com/v2.2/artists/top?range=month"
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'YzQ5ZjUwNmMtMjk2Ny00YWUwLThkOTctNTZhODFjNTI0MWYz'
        }
    })
    .then(result => result.json())
    .then(data => TopArtistsCalls.simplifyArtists(data.artists))
    .catch(err => Error(err, "Loading Top Artists of the Month..."));
};

TopArtistsCalls.getYearlyTopArtists = function getYearlyTopArtists() {
    console.log('getYearlyTopArtists')
    const url = "https://api.napster.com/v2.2/artists/top?range=year"
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'YzQ5ZjUwNmMtMjk2Ny00YWUwLThkOTctNTZhODFjNTI0MWYz'
        }
    })
    .then(result => result.json())
    .then(data => TopArtistsCalls.simplifyArtists(data.artists))
    .catch(err => Error(err, "Loading Top Artists of the Year..."));
};

TopArtistsCalls.simplifyArtists = function simplifyArtists(artists) {
    return artists.map(artist => {
        const artDetails = {
            name: artist.name,
            id: artist.id,
            topTracksApi: artist.links.topTracks.href || ''
        };

        if (artist.albumGroups.main) {
            artDetails.image = 
            `https://api.napster.com/imageserver/v2/albums/${artist.albumGroups.main[0]}/images/200x200.jpg`;
        }
        if (artist.bios) {
            artDetails.bio = artist.bios[0].bio
        }
        return artDetails;
    })
};


export default TopArtistsCalls;

