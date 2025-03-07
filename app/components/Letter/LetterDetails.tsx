import { ArabicLetter } from '../../types/arabic';
import { SunIcon } from '../Icons/SunIcon';
import { MoonIcon } from '../Icons/MoonIcon';
import { SoundButton } from '../Sound/SoundButton';

interface LetterDetailsProps {
  letter: ArabicLetter;
}

export const LetterDetails = ({ letter }: LetterDetailsProps) => {
  return (
    <div>
      <div className="letter-header dark:bg-gray-700">
        <div className="letter-name text-gray-900 dark:text-white">
          Lettre sélectionnée : {letter.name}
        </div>
        <div className="letter-isolated font-arabic text-gray-900 dark:text-white">
          {letter.isolated}
        </div>
      </div>
      
      <table className="details-table">
        <tbody>
          <tr>
            
            <th colSpan={4} className="dark:bg-gray-700 dark:text-white">Formes de la Lettre</th>
          </tr>
          <tr>
            {['Isolée', 'Finale', 'Médiane', 'Initiale'].map((label, index) => (
              <td key={index} className="dark:bg-gray-800">
                <span className="form-label dark:text-gray-400">{label}</span>
                <div className="letter-form font-arabic dark:text-white">
                  {letter[label === 'Isolée' ? 'isolated' : 
                          label === 'Finale' ? 'final' :
                          label === 'Médiane' ? 'medial' : 'initial']}
                </div>
              </td>
            ))}
          </tr>
          <tr>
            <th colSpan={4} className="dark:bg-gray-700 dark:text-white">Propriétés</th>
          </tr>
          <tr>
            <th className="dark:bg-gray-700 dark:text-white">Type</th>
            <td colSpan={3} className="dark:bg-gray-800">
              <div className="property-value flex items-center gap-2 dark:text-white">
                {letter.isSolar ? 'Lettre Solaire ' : 'Lettre Lunaire '} 
                {letter.isSolar ? <SunIcon /> : <MoonIcon />}
              </div>
            </td>
          </tr>
          <tr>
            <th className="dark:bg-gray-700 dark:text-white">Point d'Articulation (Makharij)</th>
            <td colSpan={3} className="dark:bg-gray-800">
              <div className="property-value dark:text-white">
                {letter.makharij}
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="dark:bg-gray-800">
              <SoundButton audioUrl={letter.audioUrl} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}; 