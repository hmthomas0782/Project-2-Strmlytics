export function createArtist(artists, data) {
    const artist = { id: Date.now(), ...data };
    artists.push(artist);
    return artists;
}
