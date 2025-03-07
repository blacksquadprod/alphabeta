import { playAudio } from '../../utils/audio';

interface SoundButtonProps {
  audioUrl: string;
}

export const SoundButton = ({ audioUrl }: SoundButtonProps) => {
  const handleClick = async () => {
    await playAudio(audioUrl);
  };

  return (
    <button
      onClick={handleClick}
      className="audio-button dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-700"
    >
      <span>Écouter la Prononciation</span>
      <span>🔊</span>
    </button>
  );
}; 