const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer'); // v8.2.4 required
const player = require('play-sound')({});
const ffmpeg = require('fluent-ffmpeg');
const cliProgress = require('cli-progress');
const NodeID3 = require('node-id3');

const SUPPORTED_EXTS = ['.mp3', '.aac', '.wav', '.m4a', '.mp4'];

// 🟡 Ask user for folder path
async function getFolderPath() {
  const answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'folderPath',
      message: '📂 Enter your favorite music folder full path:',
      default: path.join(__dirname, 'music'),
      validate: function (input) {
        return fs.existsSync(input) ? true : '❌ Path does not exist. Try again!';
      }
    }
  ]);
  return answer.folderPath;
}

// 🟢 Filter audio/video files from folder
function getMediaFiles(folderPath) {
  return fs.readdirSync(folderPath).filter(file =>
    SUPPORTED_EXTS.includes(path.extname(file).toLowerCase())
  );
}

// 🎯 Let user select file to start
async function showFileList(folderPath, files) {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'chosenFile',
      message: '🎧 Choose a file to start:',
      choices: files
    }
  ]);
  const startIndex = files.indexOf(answer.chosenFile);
  await playFiles(folderPath, files, startIndex);
}

// 🕐 Get media duration
function getDuration(filePath) {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) reject(err);
      else resolve(metadata.format.duration);
    });
  });
}

// 🎶 Display song info
async function displayMetaInfo(filePath) {
  const tags = NodeID3.read(filePath);
  const filename = path.basename(filePath);
  console.clear();
  console.log(`🎶 Now Playing: ${tags.title || filename}`);
  console.log(`🎤 Artist: ${tags.artist || 'Unknown'}`);
  console.log(`💽 Album: ${tags.album || 'N/A'}`);
  console.log('───────────────────────────────────────────────');
}

// ▶️ Play songs one by one
async function playFiles(folderPath, files, startIndex = 0) {
  for (let i = startIndex; i < files.length; i++) {
    const filePath = path.join(folderPath, files[i]);

    await displayMetaInfo(filePath);
    const duration = await getDuration(filePath);

    const bar = new cliProgress.SingleBar({
      format: '📻 Playing ┃{bar}┃ {percentage}% | {value}/{total}s',
      barCompleteChar: '█',
      barIncompleteChar: '░',
      hideCursor: true
    });

    bar.start(Math.floor(duration), 0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      bar.update(current);
      if (current >= duration) clearInterval(interval);
    }, 1000);

    await new Promise((resolve, reject) => {
      player.play(filePath, function (err) {
        clearInterval(interval);
        bar.stop();
        if (err) reject(err);
        else setTimeout(resolve, 400); // 🔄 0.4s delay
      });
    });
  }

  console.log('\n🎉 All songs finished! Press Ctrl+C to exit.');
}

// 🚀 App start
async function startApp() {
  const folderPath = await getFolderPath();
  const files = getMediaFiles(folderPath);

  if (files.length === 0) {
    console.log('❌ No supported media files found in this folder.');
    return;
  }

  await showFileList(folderPath, files);
}

startApp();
