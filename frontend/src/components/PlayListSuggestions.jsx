import React from "react";
import { PlayCircle } from "lucide-react"; // Play icon

// Playlist URLs mapped by language
const playlists = {
  Python: "https://youtu.be/ix9cRaBkVe0?si=3_VKDERvatujjcqK",
  JavaScript: "https://youtu.be/lfmg-EJ8gm4?si=EJa3Z3UXgJINy5Ub",
  HTML: "https://youtu.be/G3e-cpL7ofc?si=qygtzBuiyiJ9gOlV",
  Java: "https://www.youtube.com/watch?v=9n4fczZ0_ak",
  Cpp: "https://www.youtube.com/watch?v=oPpnCh7InLY",
  Swift: "https://www.youtube.com/watch?v=2EX2mAL_W9c",
  Rust: "https://www.youtube.com/watch?v=Jhfrsdf2g7",
  Go: "https://www.youtube.com/watch?v=AKJ98sd7gf",
  Kotlin: "https://www.youtube.com/watch?v=KJh3sjdfe45"
};

function PlaylistSuggestions({ language }) {
  const playlistUrl = playlists[language]; // Get playlist URL based on selected language

  return (
    <div className="p-6 bg-white shadow-2xl rounded-2xl text-center w-full max-w-md transform transition duration-300 hover:scale-105 mb-8">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4 ">
        Recommended Playlist for {language}
      </h2>
      {playlistUrl ? (
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-red-500 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md transition duration-300 hover:bg-red-600 hover:shadow-xl"
        >
          <PlayCircle className="w-6 h-6" />
          <span>Watch on YouTube</span>
        </a>
      ) : (
        <p className="text-lg text-gray-500 hidden">No playlist available for this language.</p>
      )}
    </div>
  );
}

export default PlaylistSuggestions;
