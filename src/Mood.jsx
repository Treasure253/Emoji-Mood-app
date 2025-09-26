import React, { useState, useEffect } from "react";

export default function Mood() {
  const [mood, setMood] = useState("🙂");
  const [emoji, setEmoji] = useState("");
  const [message, setMessage] = useState("How are you feeling today?");
  const [bgGradient, setBgGradient] = useState(
    "linear-gradient(135deg, #f9f9f9, #e0e0e0)"
  );
  const [pageGradient, setPageGradient] = useState(
    "linear-gradient(135deg, #ffffff, #f0f0f0)"
  );

  const moods = {
    Happy: {
      emoji: "😄",
      text: "Stay joyful and spread the smiles!",
      gradient: "linear-gradient(135deg, #fdd835, #ffeb3b)",
    },
    Sad: {
      emoji: "😢",
      text: "It’s okay to feel down. Brighter days are ahead.",
      gradient: "linear-gradient(135deg, #42a5f5, #64b5f6)",
    },
    Excited: {
      emoji: "🤩",
      text: "Your energy is contagious, go conquer today! You gat it",
      gradient: "linear-gradient(135deg, #ab47bc, #ba68c8)",
    },
    Angry: {
      emoji: "😡",
      text: "Take a deep breath. Calmness brings clarity.",
      gradient: "linear-gradient(135deg, #ef5350, #e53935)",
    },
    Relaxed: {
      emoji: "😌",
      text: "Peace of mind is priceless. I love when you enjoy the calm.",
      gradient: "linear-gradient(135deg, #66bb6a, #81c784)",
    },
    Tired: {
      emoji: "😴",
      text: "Rest is productive too. Take a break.",
      gradient: "linear-gradient(135deg, #8d6e63, #a1887f)",
    },
    Love: {
      emoji: "❤️",
      text: "Love makes everything better 💕",
      gradient: "linear-gradient(135deg, #ec407a, #f06292)",
    },
    Confused: {
      emoji: "😕",
      text: "Clarity will come. One step at a time 🔍",
      gradient: "linear-gradient(135deg, #ffa726, #ffcc80)",
    },
  };

  const handleInput = (e) => {
    setMood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (moods[mood]) {
      setEmoji(moods[mood].emoji);
      setMessage(moods[mood].text);
      setBgGradient(moods[mood].gradient);
      setPageGradient(moods[mood].gradient);
    } else {
      setEmoji("🤔");
      setMessage("Hmm… I don’t know that mood yet!");
      setBgGradient("linear-gradient(135deg, #494545ff, #302323ff)");
      setPageGradient("linear-gradient(135deg, #585353ff, #575454ff)");
    }
  };

  // Change page background dynamically
  useEffect(() => {
    document.body.style.background = pageGradient;
    document.body.style.transition = "background 0.6s ease";
  }, [pageGradient]);

  return (
    <div className="container">
      <h1>Emoji Mood App</h1>

      {/* Buttons */}
      <div className="buttons">
        {Object.entries(moods).map(([key, value]) => (
          <button
            key={key}
            className={`button ${key}`}
            onClick={() => {
              setMood(key);
              setEmoji(value.emoji);
              setMessage(value.text);
              setBgGradient(value.gradient);
              setPageGradient(value.gradient);
            }}
          >
            {value.emoji} {key}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Type your mood (e.g., Happy)"
          value={mood}
          onChange={handleInput}
          className="input"
        />
        <button type="submit" className="submitBtn">
          Show Mood
        </button>
      </form>

      {/* Display Emoji + Message */}
      <div className="output" style={{ background: bgGradient }}>
        <h2 className="emoji">{emoji}</h2>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}
