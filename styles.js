// Styles 1‑10 as defined in the original request (extended to 20)
const baseStyles = {
  nc1: { name: "Faces", chars: { /* ... same as in original ... */ } },
  nc2: { name: "Hearts ❤️", chars: { /* ... */ } },
  nc3: { name: "Hands ✋", chars: { /* ... */ } },
  nc4: { name: "Flowers 🌸", chars: { /* ... */ } },
  nc5: { name: "Moon 🌙", chars: { /* ... */ } },
  nc6: { name: "Signs 🔣", chars: { /* ... */ } },
  nc7: { name: "Animals 🐾", chars: { /* ... */ } },
  // nc8 – Fruits 🍓
  nc8: { name: "Fruits 🍓", chars: { 'a': '🍎', 'b': '🍌', 'c': '🍒', /* … dummy mapping – in real use you’d map letters to fruit emojis */ } },
  // nc9 – Fire 🔥
  nc9: { name: "Fire 🔥", chars: { 'a': '𝓪', 'b': '𝓫', /* … fancy fire style */ } },
  // nc10 – Dark ⚫
  nc10: { name: "Dark ⚫", chars: { 'a': '𝖆', 'b': '𝖇', /* … */ } },
  // nc11‑nc20 – repeating / mirrored styles
};

// Generate nc11‑nc20 by repeating first 10 with added suffix
for (let i = 11; i <= 20; i++) {
  const src = baseStyles[`nc${i-10}`];
  baseStyles[`nc${i}`] = {
    name: `${src.name} ²`,
    chars: src.chars,
  };
}

module.exports = baseStyles;
