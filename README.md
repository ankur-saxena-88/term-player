# 🎵 Terminal Music Player (for Windows PowerShell)

A clean and simple command-line music player made for Windows users who love to vibe with their songs right inside the terminal!

---

## 📜 Introduction

One day, while dealing with some health-related struggles and feeling a little low, I randomly stumbled upon a tech creator’s vlog on YouTube. She was showcasing a terminal-based music player that runs inside Linux. Something about it deeply clicked with me.

That small discovery gave me a spark — I thought, *“Why not build a similar terminal-based player for Windows users that works right inside PowerShell?”* And that’s how this project was born.

This project is not just about playing songs — it’s about blending **code, music, and emotion** into a seamless terminal experience.

---

## 🚀 About This App

This music player lets you play your local songs directly from PowerShell in a beautiful, interactive way — with arrow key navigation, song metadata display, and a real-time timeline. It supports many popular audio formats and runs smoothly inside the Windows terminal.

---

## 💡 Motivation Behind It

This project was inspired by:

- A personal need for **comfort through music and coding**
- A casual moment of discovery while browsing YouTube
- The excitement of building something terminal-centric for **PowerShell lovers**

It started as a **one-day self-motivation idea**, and became something beautiful that I now proudly share with others.

---

## 🧠 Features

✅ Browse music from any folder of your choice  
✅ Supports formats like `.mp3`, `.mp4`, `.aac`, `.wav`, `.m4a`  
✅ Select songs using arrow keys inside the terminal  
✅ Displays song info: `Title`, `Artist`, `Composer` and `Album` (if metadata available)  
✅ Real-time progress bar with duration timeline  
✅ Songs auto-play one after the other with a 0.4 second gap  
✅ Works smoothly in **Windows PowerShell or any terminal**

---

## 🛠️ How I Built It

This project is built using:

- **Node.js** – The backbone of the app
- **inquirer** – For interactive user inputs
- **play-sound** – To handle audio playback using system audio player
- **fluent-ffmpeg** – To extract song duration info
- **cli-progress** – To display a beautiful progress timeline
- **node-id3** – To extract metadata (title, artist, composer, album) from songs

I kept it as simple as possible so that even beginners can understand and extend it.

---

## 📦 Installation

### 🔧 Prerequisites

- Node.js installed (`v18+` recommended)
- PowerShell or Terminal on Windows
- FFmpeg installed (ensure it’s in your system PATH)

---

### 📥 Steps to Run

1. **Clone the repository**

```bash
git clone https://github.com/ankur-saxena-88/term-player.git
cd term-player
```
2. **Install the dependencies**

```bash
npm install inquirer@8.2.4 play-sound fluent-ffmpeg cli-progress node-id3
```
3. **Run the app**

```bash
node term-player.js
```
4. **Follow the prompts**

- Enter the path to your favorite music folder

- Use arrow keys to select a song

- Enjoy music directly in the terminal 🎧

---

## 🎯 Example

```yaml
📂 Enter your favorite music folder full path: C:\Users\Ankur\Music\Favorites
🎧 Choose a file to start:
❯ 01 - Tum Mile.mp3
   02 - Memories.mp3
   03 - Night Drive.m4a

🎶 Now Playing: Tum Mile
🎤 Artist: Pritam
💽 Album: Tum Mile
📻 Playing ┃██████░░░░░░┃ 60% | 90/150s
```

---

## 📌 Why Use This?

- You love music and terminal tools

- You want a distraction-free, keyboard-driven music experience

- You’re a PowerShell enthusiast who codes, works, and vibes with music 💻🎶

---

## 🎁 Bonus
This project is fully open-source. Fork it, extend it, remix it your way!!

You can even convert it into:

- A Linux-compatible CLI version

- A WSL-based tool

- Or integrate it into your custom productivity workflows

---

## 🧡 Final Thoughts
This project is special to me — not because it’s big or perfect, but because it was born from a small emotional moment, and turned into something useful, peaceful, and creative.

If you love music, code, and clean terminal tools — I hope you find joy in this too.

Happy Coding and Happy Listening!
— Ankur Saxena

---

## 📫 Connect with Me
- GitHub: @ankur-saxena-88
- Email: author88ankur@outlook.com
- Project hashtag: #TerminalMusicPlayer

---
