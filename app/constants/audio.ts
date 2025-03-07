export const AUDIO_BASE_PATH = '/audio/letters';

export const getAudioPath = (name: string) => `${AUDIO_BASE_PATH}/${name.toLowerCase()}.mp3`; 