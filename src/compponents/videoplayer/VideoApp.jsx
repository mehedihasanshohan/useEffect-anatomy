import { useState } from "react";
import VideoPlayer from "./VideoPlayer";


export default function VideoApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

  return (
    <>
      <input
          className="border-black bg-amber-600 rounded-lg mr-2 "
          placeholder="type here"
          value={text}
          onChange={e => setText(e.target.value)} />
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