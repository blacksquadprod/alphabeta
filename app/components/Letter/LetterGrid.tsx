import { ArabicLetter } from '../../types/arabic';
import { Letter } from './Letter';

interface LetterGridProps {
  letters: ArabicLetter[];
  onLetterClick: (letter: ArabicLetter) => void;
}

export const LetterGrid = ({ letters, onLetterClick }: LetterGridProps) => {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full">
        <tbody>
          {Array.from({ length: 5 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 6 }, (_, colIndex) => {
                const letterIndex = rowIndex * 6 + colIndex;
                const letter = letters[letterIndex];
                
                if (!letter) return <td key={colIndex} className="p-1" />;
                
                return (
                  <td key={colIndex} className="p-1">
                    <Letter letter={letter} onClick={onLetterClick} />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 