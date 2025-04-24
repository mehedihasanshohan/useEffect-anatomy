import { useState } from "react";
import VideoPlayer from "./VideoPlayer";


export default function VideoApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

  return (
    <>
     <input
          type="text"
          className="w-full max-w-md px-4 py-2 text-white placeholder-white bg-amber-600 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent shadow-md transition-all duration-300 mr-2"
          placeholder="Type here..."
          value={text}
          onChange={e => setText(e.target.value)}
      />

      <button
          className="bg-gray-500 text-black-500 rounded-md px-2 py-1"
          onClick={() =>
          setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      ></VideoPlayer>
    </>
  );
}