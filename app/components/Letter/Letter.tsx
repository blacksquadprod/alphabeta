import { ArabicLetter } from '../../types/arabic';
import { SunIcon } from '../Icons/SunIcon';
import { MoonIcon } from '../Icons/MoonIcon';
import { playAudio } from '../../utils/audio';

interface LetterProps {
  letter: ArabicLetter;
  onClick: (letter: ArabicLetter) => void;
}

export const Letter = ({ letter, onClick }: LetterProps) => {
  const handleClick = async () => {
    // Play the sound
    await playAudio(letter.audioUrl);
    // Call the onClick handler
    onClick(letter);
  };

  return (
    <div
      className="letter-card relative p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm cursor-pointer group aspect-square flex flex-col items-center justify-center hover:shadow-lg transition-all duration-200"
      onClick={handleClick}
    >
      <div className="text-center w-full">
        <div className="text-3xl lg:text-4xl mb-1 font-arabic text-gray-900 dark:text-white">
          {letter.isolated}
        </div>
        <div className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate px-1">
          {letter.name}
        </div>
      </div>
      <div className="solar-lunar-indicator absolute top-1 right-1">
        {letter.isSolar ? <SunIcon /> : <MoonIcon />}
      </div>
    </div>
  );
}; 