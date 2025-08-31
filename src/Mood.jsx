import React, { useState } from "react";

export default function Mood() {
  const [mood, setMood] = useState("🙂");
  const [message, setMessage] = useState("How are you feeling today?");

  const moods = {
    Happy: { emoji: "😄", text: "Stay joyful and spread the smiles!" },
    Sad: {
      emoji: "😢",
      text: "It’s okay to feel down. Brighter days are ahead.",
    },
    Excited: {
      emoji: "🤩",
      text: "Your energy is contagious, go conquer today! You gat it",
    },
    Angry: {
      emoji: "😡",
      text: "Take a deep breath. Calmness brings clarity.",
    },
    Relaxed: {
      emoji: "😌",
      text: "Peace of mind is priceless—enjoy the calm.",
    },
  };

  const handleMoodClick = (moodKey) => {
    setMood(moods[moodKey].emoji);
    setMessage(moods[moodKey].text);
  };

  return (
    <div>
      <h1>Emoji Mood App</h1>
      <div className="emoji">{mood}</div>
      <p className="message">{message}</p>

      <div className="button-group">
        {Object.keys(moods).map((moodKey) => (
          <button key={moodKey} onClick={() => handleMoodClick(moodKey)}>
            {moodKey}
          </button>
        ))}
      </div>
    </div>
  );
}
