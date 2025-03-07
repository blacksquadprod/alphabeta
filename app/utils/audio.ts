import { AUDIO_BASE_PATH } from '../constants/audio';

// Cache for audio elements
const audioCache: { [key: string]: HTMLAudioElement } = {};

export const preloadAudio = async (url: string): Promise<HTMLAudioElement> => {
  if (audioCache[url]) {
    return audioCache[url];
  }

  return new Promise((resolve, reject) => {
    const audio = new Audio(url);
    
    audio.addEventListener('canplaythrough', () => {
      audioCache[url] = audio;
      resolve(audio);
    }, { once: true });

    audio.addEventListener('error', (e) => {
      console.error(`Error loading audio file ${url}:`, e);
      reject(new Error(`Failed to load audio file ${url}`));
    }, { once: true });

    // Start loading the audio
    audio.load();
  });
};

export const playAudio = async (url: string) => {
  try {
    // Ensure the URL is absolute
    const audioUrl = url.startsWith('http') || url.startsWith('/') 
      ? url 
      : `${AUDIO_BASE_PATH}/${url}`;

    // Try to get from cache or load
    const audio = await preloadAudio(audioUrl);
    
    // Reset the audio to start if it was already played
    audio.currentTime = 0;
    
    // Play the audio
    await audio.play();
  } catch (error) {
    console.error('Error playing audio:', error);
    // You might want to show a user-friendly error message here
  }
}; 