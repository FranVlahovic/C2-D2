import empire from '../assets/images/empire.svg';
import jedi from '../assets/images/jedi.svg';
import resistance from '../assets/images/resistance.svg';

export const cards = [
    {
        id: crypto.randomUUID(),
        name: 'Emperor Palpatine',
        faction: 'Galactic Empire',
        imageAlt: 'Photo of Emperor Palpatine',
        factionImage: empire,
        factionImageAlt: 'Icon of Galactic Empire',
    },
    {
        id: crypto.randomUUID(),
        name: 'Darth Vader',
        faction: 'Galactic Empire',
        imageAlt: 'Photo of Darth Vader',
        factionImage: empire,
        factionImageAlt: 'Icon of Galactic Empire',
    },
    {
        id: crypto.randomUUID(),
        name: 'Luke Skywalker',
        faction: 'Jedi Order',
        imageAlt: 'Photo of Luke Skywalker',
        factionImage: jedi,
        factionImageAlt: 'Icon of Jedi Order',
    },
    {
        id: crypto.randomUUID(),
        name: 'Leia Organa',
        faction: 'Resistance',
        imageAlt: 'Photo of Leia Organa',
        factionImage: resistance,
        factionImageAlt: 'Icon of Resistance',
    },
    {
        id: crypto.randomUUID(),
        name: 'R2-D2',
        faction: 'Resistance',
        imageAlt: 'Photo of R2-D2',
        factionImage: resistance,
        factionImageAlt: 'Icon of Resistance',
    },
    {
        id: crypto.randomUUID(),
        name: 'Han Solo',
        faction: 'Resistance',
        imageAlt: 'Photo of Han Solo',
        factionImage: resistance,
        factionImageAlt: 'Icon of Resistance',
    },
    {
        id: crypto.randomUUID(),
        name: 'Yoda',
        faction: 'Jedi Order',
        imageAlt: 'Photo of Yoda',
        factionImage: jedi,
        factionImageAlt: 'Icon of Jedi Order',
    },
    {
        id: crypto.randomUUID(),
        name: 'C-3PO',
        faction: 'Resistance',
        imageAlt: 'Photo of C-3PO',
        factionImage: resistance,
        factionImageAlt: 'Icon of Resistance',
    },
    {
        id: crypto.randomUUID(),
        name: 'Chewbacca',
        faction: 'Resistance',
        imageAlt: 'Photo of Chewbacca',
        factionImage: resistance,
        factionImageAlt: 'Icon of Chewbacca',
    },
    {
        id: crypto.randomUUID(),
        name: 'Obi-Wan Kenobi',
        faction: 'Jedi Order',
        imageAlt: 'Photo of Obi-Wan Kenobi',
        factionImage: jedi,
        factionImageAlt: 'Icon of Jedi Order',
    }
]