const ArtistTracksCalls = {};
// artist/id/tracks/top
ArtistTracksCalls.getArtistTracks = function getArtistTracks(id) {
    console.log('getArtistTracks')
    const url = `https://api.napster.com/v2.2/artists/${id}/tracks/top?limit=5`;
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'YzQ5ZjUwNmMtMjk2Ny00YWUwLThkOTctNTZhODFjNTI0MWYz'
        }
    })
    .then(result => result.json())
    .then(data => {
        console.log(data, 'line 15')
        return data.tracks;
    })
    .catch(err => Error(err, "Loading Artists Tracks"));
};

ArtistTracksCalls.getArtistDetails = function getArtistDetails(id) {
    console.log('getArtistTracks')
    const url = `https://api.napster.com/v2.2/artists/${id}`
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'YzQ5ZjUwNmMtMjk2Ny00YWUwLThkOTctNTZhODFjNTI0MWYz'
        }
    })
        .then(result => result.json())
        .then(data => ArtistTracksCalls.simplifyArtist(data.artists[0]))
        .catch(err => Error(err, "Loading Artist Details"));
};

ArtistTracksCalls.simplifyArtist = function simplifyArtist(artist) {
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
};

export default ArtistTracksCalls;

