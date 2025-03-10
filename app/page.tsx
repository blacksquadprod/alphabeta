'use client';

import { useState, useEffect } from 'react';
import { ArabicLetter } from './types/arabic';
import { LetterGrid } from './components/Letter/LetterGrid';
import { LetterDetails } from './components/Letter/LetterDetails';
import { getAudioPath } from './constants/audio';

// Arabic letters data
const arabicLetters: ArabicLetter[] = [
  {
    name: 'Hamza',
    isolated: 'ء',
    final: 'ء',
    medial: 'ـئـ',
    initial: 'أ',
    isSolar: false,
    makharij: 'Glottal Stop',
    audioUrl: getAudioPath('hamza'),
  },
  {
    name: 'Alif',
    isolated: 'ا',
    final: 'ـا',
    medial: 'ـا',
    initial: 'ا',
    isSolar: false,
    makharij: 'Glottal',
    audioUrl: getAudioPath('alif'),
  },
  {
    name: 'Bâ',
    isolated: 'ب',
    final: 'ـب',
    medial: 'ـبـ',
    initial: 'بـ',
    isSolar: false,
    makharij: 'Bilabial',
    audioUrl: getAudioPath('ba'),
  },
  {
    name: 'Tâ',
    isolated: 'ت',
    final: 'ـت',
    medial: 'ـتـ',
    initial: 'تـ',
    isSolar: true,
    makharij: 'Dental',
    audioUrl: getAudioPath('ta'),
  },
  {
    name: 'Thâ',
    isolated: 'ث',
    final: 'ـث',
    medial: 'ـثـ',
    initial: 'ثـ',
    isSolar: true,
    makharij: 'Interdental',
    audioUrl: getAudioPath('tha'),
  },
  {
    name: 'Jīm',
    isolated: 'ج',
    final: 'ـج',
    medial: 'ـجـ',
    initial: 'جـ',
    isSolar: false,
    makharij: 'Palatal',
    audioUrl: getAudioPath('jim'),
  },
  {
    name: 'Ḥā',
    isolated: 'ح',
    final: 'ـح',
    medial: 'ـحـ',
    initial: 'حـ',
    isSolar: false,
    makharij: 'Pharyngeal',
    audioUrl: getAudioPath('ha'),
  },
  {
    name: 'Khā',
    isolated: 'خ',
    final: 'ـخ',
    medial: 'ـخـ',
    initial: 'خـ',
    isSolar: false,
    makharij: 'Velar',
    audioUrl: getAudioPath('kha'),
  },
  {
    name: 'Dāl',
    isolated: 'د',
    final: 'ـد',
    medial: 'ـد',
    initial: 'د',
    isSolar: true,
    makharij: 'Dental',
    audioUrl: getAudioPath('dal'),
  },
  {
    name: 'Dhāl',
    isolated: 'ذ',
    final: 'ـذ',
    medial: 'ـذ',
    initial: 'ذ',
    isSolar: true,
    makharij: 'Interdental',
    audioUrl: getAudioPath('dhal'),
  },
  {
    name: 'Rā',
    isolated: 'ر',
    final: 'ـر',
    medial: 'ـر',
    initial: 'ر',
    isSolar: true,
    makharij: 'Alveolar',
    audioUrl: getAudioPath('ra'),
  },
  {
    name: 'Zāy',
    isolated: 'ز',
    final: 'ـز',
    medial: 'ـز',
    initial: 'ز',
    isSolar: true,
    makharij: 'Alveolar',
    audioUrl: getAudioPath('zay'),
  },
  {
    name: 'Sīn',
    isolated: 'س',
    final: 'ـس',
    medial: 'ـسـ',
    initial: 'سـ',
    isSolar: true,
    makharij: 'Alveolar',
    audioUrl: getAudioPath('sin'),
  },
  {
    name: 'Shīn',
    isolated: 'ش',
    final: 'ـش',
    medial: 'ـشـ',
    initial: 'شـ',
    isSolar: true,
    makharij: 'Palatal',
    audioUrl: getAudioPath('shin'),
  },
  {
    name: 'Ṣād',
    isolated: 'ص',
    final: 'ـص',
    medial: 'ـصـ',
    initial: 'صـ',
    isSolar: true,
    makharij: 'Alveolar',
    audioUrl: getAudioPath('sad'),
  },
  {
    name: 'Ḍād',
    isolated: 'ض',
    final: 'ـض',
    medial: 'ـضـ',
    initial: 'ضـ',
    isSolar: true,
    makharij: 'Dental',
    audioUrl: getAudioPath('dad'),
  },
  {
    name: 'Ṭā',
    isolated: 'ط',
    final: 'ـط',
    medial: 'ـطـ',
    initial: 'طـ',
    isSolar: true,
    makharij: 'Dental',
    audioUrl: getAudioPath('taa'),
  },
  {
    name: 'Ẓā',
    isolated: 'ظ',
    final: 'ـظ',
    medial: 'ـظـ',
    initial: 'ظـ',
    isSolar: true,
    makharij: 'Interdental',
    audioUrl: getAudioPath('za'),
  },
  {
    name: '`Ayn',
    isolated: 'ع',
    final: 'ـع',
    medial: 'ـعـ',
    initial: 'عـ',
    isSolar: false,
    makharij: 'Pharyngeal',
    audioUrl: getAudioPath('ayn'),
  },
  {
    name: 'Ghayn',
    isolated: 'غ',
    final: 'ـغ',
    medial: 'ـغـ',
    initial: 'غـ',
    isSolar: false,
    makharij: 'Velar',
    audioUrl: getAudioPath('ghayn'),
  },
  {
    name: 'Fā',
    isolated: 'ف',
    final: 'ـف',
    medial: 'ـفـ',
    initial: 'فـ',
    isSolar: false,
    makharij: 'Labiodental',
    audioUrl: getAudioPath('fa'),
  },
  {
    name: 'Qāf',
    isolated: 'ق',
    final: 'ـق',
    medial: 'ـقـ',
    initial: 'قـ',
    isSolar: false,
    makharij: 'Uvular',
    audioUrl: getAudioPath('qaf'),
  },
  {
    name: 'Kāf',
    isolated: 'ك',
    final: 'ـك',
    medial: 'ـكـ',
    initial: 'كـ',
    isSolar: false,
    makharij: 'Velar',
    audioUrl: getAudioPath('kaf'),
  },
  {
    name: 'Lām',
    isolated: 'ل',
    final: 'ـل',
    medial: 'ـلـ',
    initial: 'لـ',
    isSolar: true,
    makharij: 'Dental',
    audioUrl: getAudioPath('lam'),
  },
  {
    name: 'Mīm',
    isolated: 'م',
    final: 'ـم',
    medial: 'ـمـ',
    initial: 'مـ',
    isSolar: false,
    makharij: 'Bilabial',
    audioUrl: getAudioPath('mim'),
  },
  {
    name: 'Nūn',
    isolated: 'ن',
    final: 'ـن',
    medial: 'ـنـ',
    initial: 'نـ',
    isSolar: true,
    makharij: 'Dental',
    audioUrl: getAudioPath('nun'),
  },
  {
    name: 'Hā',
    isolated: 'ه',
    final: 'ـه',
    medial: 'ـهـ',
    initial: 'هـ',
    isSolar: false,
    makharij: 'Glottal',
    audioUrl: getAudioPath('haa'),
  },
  {
    name: 'Wāw',
    isolated: 'و',
    final: 'ـو',
    medial: 'ـو',
    initial: 'و',
    isSolar: false,
    makharij: 'Labial-velar',
    audioUrl: getAudioPath('waw'),
  },
  {
    name: 'Yā',
    isolated: 'ي',
    final: 'ـي',
    medial: 'ـيـ',
    initial: 'يـ',
    isSolar: false,
    makharij: 'Palatal',
    audioUrl: getAudioPath('ya'),
  },
  {
    name: 'Lām-Alif',
    isolated: 'لا',
    final: 'ـلا',
    medial: 'ـلا',
    initial: 'لا',
    isSolar: true,
    makharij: 'Dental-Glottal',
    audioUrl: getAudioPath('lam-alif'),
  }
];

export default function Home() {
  const [selectedLetter, setSelectedLetter] = useState<ArabicLetter | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on system preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen p-4 md:p-8 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Theme Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Apprentissage de l&apos;Alphabet Arabe
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Letters Grid */}
        <LetterGrid 
          letters={arabicLetters}
          onLetterClick={setSelectedLetter}
        />

        {/* Selected Letter Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 md:p-6">
          {selectedLetter ? (
            <LetterDetails letter={selectedLetter} />
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Sélectionnez une lettre du tableau ci-dessus pour voir ses détails.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
