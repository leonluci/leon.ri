import React, { useState } from "react";
import { Menu, Search, User } from "lucide-react";

const animeList = [
  { title: "Demon Slayer", episodes: 26, image: "/images/demon_slayer.jpg" },
  { title: "Jujutsu Kaisen", episodes: 24, image: "/images/jujutsu_kaisen.jpg" },
  { title: "Attack on Titan", episodes: 75, image: "/images/aot.jpg" },
  { title: "One Piece", episodes: 1000, image: "/images/one_piece.jpg" },
];

function AnimeCard({ anime }) {
  return (
    <div className="bg-zinc-800 hover:shadow-xl transition rounded">
      <img src={anime.image} alt={anime.title} className="rounded-t-lg h-40 object-cover w-full" />
      <div className="p-4">
        <h3 className="text-lg font-medium text-purple-300">{anime.title}</h3>
        <p className="text-sm text-gray-400">Episodes: {anime.episodes}</p>
        <button className="mt-2 w-full bg-purple-500 hover:bg-purple-600 text-white text-sm py-2 px-4 rounded">
          Watch
        </button>
      </div>
    </div>
  );
}

function AnimeStreaming() {
  const [search, setSearch] = useState("");

  // Filter animeList based on search (case-insensitive)
  const filteredAnime = animeList.filter(anime =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-zinc-900 text-white min-h-screen font-sans">
      <header className="flex items-center justify-between px-6 py-4 bg-zinc-800 shadow">
        <div className="text-2xl font-bold text-purple-400">HiAnime</div>
        <div className="flex items-center gap-2 w-1/2">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search anime..."
            className="bg-zinc-700 text-white px-4 py-2 rounded w-full"
          />
          <button className="p-2">
            <Search className="text-white" size={20} />
          </button>
        </div>
        <div className="flex gap-4">
          <button className="p-2">
            <User />
          </button>
          <button className="p-2">
            <Menu />
          </button>
        </div>
      </header>

      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/featured.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-start p-6">
          <h1 className="text-3xl font-bold text-purple-300">Featured: Demon Slayer</h1>
          <p className="mt-2 text-gray-300">Watch the latest episodes in HD quality, ad-free!</p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
            Watch Now
          </button>
        </div>
      </section>

      <main className="px-6 py-8">
        <h2 className="text-2xl font-semibold mb-4">Trending Anime</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredAnime.length > 0 ? (
            filteredAnime.map((anime, index) => (
              <AnimeCard key={index} anime={anime} />
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-400">
              No anime found.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default AnimeStreaming;