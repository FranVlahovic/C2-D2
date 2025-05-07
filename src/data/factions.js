import empire from '../assets/images/empire.svg';
import jedi from '../assets/images/jedi.svg';
import resistance from '../assets/images/resistance.svg';

export const factions = [
    {
        id: 0,
        name: 'Jedi Order',
        image: jedi,
        imageAlt: 'Jedi Order Logo',
        description: 'Guardians of peace and justice in the galaxy, the Jedi Order wield the Force to defend the innocent and uphold balance. Guided by wisdom, discipline, and compassion, Jedi Knights stand against the rise of darkness.',
    },
    {
        id: 1,
        name: 'Galactic Empire',
        image: empire,
        imageAlt: 'Galactic Empire Logo',
        description: 'A ruthless regime built on fear, control, and military dominance, the Galactic Empire seeks to bring order to the galaxy through absolute power. Led by the Emperor, it crushes opposition with its vast fleet and deadly legions.',
    },
    {
        id: 2,
        name: 'The Resistance',
        image: resistance,
        imageAlt: 'Resistance Logo',
        description: 'A brave and defiant movement rising against tyranny, the Resistance fights to restore freedom across the galaxy. Fueled by hope and determination, they challenge the might of oppressive forces despite overwhelming odds.',
    },
];
