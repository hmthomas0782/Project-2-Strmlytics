export function createArtist(artists, data) {
    if (!Array.isArray(artists)) {
      throw new Error("Invalid artists array");
    }
    if (!data || typeof data !== "object") {
      throw new Error("Invalid artist data");
    }
  
    const artist = { id: Date.now(), ...data };
    artists.push(artist);
    return artists;
  }
  