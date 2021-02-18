/* 
  REMOVE AFTER TESTING COMPLETE
  A copy of the events from the old site for uploading during testing 
*/

const eventsToUpload = [
  {
    published: true,
    repertoire: [{
        composer: 'Poulenc',
        work: 'Dialogues des Carmélites'
    }],
    startDate: new Date('2020-05-21'),
    endDate: new Date('2020-07-19'),
    performances: [
      new Date('2020-05-21'),
      new Date('2020-05-24'),
      new Date('2020-05-29'),
      new Date('2020-05-30'),
      new Date('2020-06-03'),
      new Date('2020-06-06'),
      new Date('2020-06-09'),
      new Date('2020-06-12'),
      new Date('2020-06-18'),
      new Date('2020-06-21'),
      new Date('2020-06-24'),
      new Date('2020-06-27'),
      new Date('2020-07-03'),
      new Date('2020-07-10'),
      new Date('2020-07-14'),
      new Date('2020-07-19'),
    ],
    institution: 'Glyndebourne',
    status: 'Cancelled',
    link: 'https://www.glyndebourne.com/festival/'
  },
  {
    published: true,
    institution: "Opera North",
    link: 'https://www.operanorth.co.uk/whats-on/the-turn-of-the-screw/',
    repertoire: [{
      composer: 'Britten',
      work: 'Turn of the Screw'
    }],
    startDate: new Date('2020-02-15'),
    endDate: new Date('2020-03-11'),
    performances: [
      new Date('2020-02-15'),
      new Date('2020-02-18'),
      new Date('2020-02-21'),
      new Date('2020-02-25'),
      new Date('2020-02-27'),
      new Date('2020-03-05'),
      new Date('2020-03-11'),
    ]
  },
  {
    published: true,
    institution: 'San Diego Symphony',
    repertoire: [
      {
        composer: 'Mozart',
        work: 'Overture to Le nozze di Figaro, K. 492'
      },
      {
        composer: 'Beethoven',
        work: '"Presto" and "Allegro con brio" from Symphony No. 7 in A Major, Op. 92'
      },
      {
        composer: 'Korngold',
        work: 'Tänzchen im alten Stil',
      },
      {
        composer: 'Dvorak',
        work: '"Larghetto" from Serenade in E Major, Op. 22'
      },
    ],
    startDate: new Date('2020-03-21'),
    endDate: new Date('2020-03-21'),
    status: 'Postponed',
    link: 'https://www.sandiegosymphony.org/'
  },
  {
    published: true,
    institution: 'San Diego Symphony',
    repertoire: [
      {
        composer: 'J. Strauss II',
        work: 'Overture to Die Fledermaus'
      },
      {
        composer: 'Berlioz',
        work: 'Roman Carnival'
      },
      {
        composer: 'Shostakovich',
        work: 'Mvt ii, Symphony No. 5',
      },
      {
        composer: 'Tchaikovsky',
        work: 'Mvt iii, Symphony No. 4'
      },
      {
        composer: 'Prokofiev',
        work: `'Romeo and Juliet' from Romeo & Juliet Suite No. 1`
      },
      {
        composer: 'Bernstein',
        work: 'Mambo from West Side Story'
      }
    ],
    startDate: new Date('2020-03-24'),
    endDate: new Date('2020-03-24'),
    performances: [
      new Date('2020-03-24')
    ],
    status: 'Postponed',
    link: 'https://www.sandiegosymphony.org/'
  },
  {
    published: true,
    institution: 'San Diego Symphony',
    startDate: new Date('2020-03-28'),
    endDate: new Date('2020-03-29'),
    performances: [
      new Date('2020-03-28'),
      new Date('2020-03-29')
    ],
    status: 'Postponed',
    link: 'https://www.sandiegosymphony.org/',
    repertoire: [
      {
        composer: 'Norman',
        work: 'Drip Blip Sparkle Spin Glint Glide Glow Float Flop Chop Pop Shatter Slpash'
      },
      {
        composer: 'Neruda',
        work: 'Trumpet Concerto in E-Flat Major'
      },
      {
        composer: 'Rivera',
        work: 'Concierto Venezolanda'
      },
      {
        composer: 'Tchaikovsky',
        work: 'Symphony No. 4 in F minor, Op. 36'
      }
    ],
    soloist: 'Pacho Flores'
  },
  {
    published: true,
    institution: 'Glyndebourne - BBC Proms',
    link: 'https://www.glyndebourne.com/festival/',
    repertoire: [{
      composer: 'Poulenc',
      work: 'Dialogues des Carmélites'
    }],
    startDate: new Date('2020-07-27'),
    endDate: new Date('2020-07-27'),
    performances: [
      new Date('2020-07-27')
    ],
    status: 'Cancelled'
  },
  {
    published: true,
    institution: 'Glyndebourne Tour',
    link: 'https://www.glyndebourne.com/events/the-magic-flute/',
    status: 'Cancelled',
    repertoire: [
      {
        composer: 'Mozart',
        work: 'Die Zauberflöte'
      }
    ],
    startDate: new Date('2020-11-24'),
    endDate: new Date('2020-11-27'),
    performances: [
      new Date('2020-11-24'),
      new Date('2020-11-26'),
      new Date('2020-11-27'),
    ]
  },
  {
    published: true,
    institution: 'Glyndebourne',
    repertoire: [
      {
        composer: 'Robertson/Livingston/Cruttwell-Reade/Appleby',
        work: 'Pay the Piper'
      }
    ],

    startDate: new Date('2021-02-19'),
    endDate: new Date('2021-02-21'),
    status: 'Postponed',
    performances: [
      new Date('2021-02-19'),
      new Date('2021-02-20'),
      new Date('2021-02-21')
    ]
  },
  {
    published: true,
    institution: 'Salomon Orchestra',
    status: 'Postponed',
    startDate: new Date('2020-10-20'),
    endDate: new Date('2020-10-20'),
    performances: [new Date('2020-10-20')],
    repertoire: [{
      composer: 'Repertoire TBC',
      work: ''
    }]
  },
  {
    published: true,
    startDate: new Date('2020-02-01'),
    endDate: new Date('2020-02-01'),
    performances: [new Date('2020-02-01')],
    repertoire: [
      {
        composer: 'Berkeley',
        work: 'Divertimento'
      },
      {
        composer: 'Beethoven',
        work: 'Symphony No. 5'
      }
    ],
    institution: 'Covent Garden Chamber Orchestra'
  },
  {
    published: true,
    startDate: new Date('2021-05-20'),
    endDate: new Date('2021-06-23'),
    performances: [
      new Date('2021-05-20'),
      new Date('2021-05-23'),
      new Date('2021-05-27'),
      new Date('2021-05-30'),
      new Date('2021-06-03'),
      new Date('2021-06-06'),
      new Date('2021-06-09'),
      new Date('2021-06-12'),
      new Date('2021-06-17'),
      new Date('2021-06-23'),
    ],
    repertoire: [{
      composer: 'Janacek',
      work: 'Katya Kabanova'
    }],
    institution: 'Glyndebourne'
  },
  {
    published: true,
    startDate: new Date('2020-08-30'),
    endDate: new Date('2020-08-31'),
    repertoire: [{
      composer: 'Ravel',
      work: `L'Enfant et les Sortilèges`
    }],
    institution: 'London Philharmonic Orchestra',
    performances: [
      new Date('2020-08-30'),
      new Date('2020-08-31')
    ]
  },
  {
    published: true,
    startDate: new Date('2020-11-24'),
    endDate: new Date('2020-11-28'),
    repertoire: [{
      composer: 'Donizetti',
      work: 'Lucrezia Borgia'
    }],
    performances: [
      new Date('2020-11-24'),
      new Date('2020-11-26'),
      new Date('2020-11-28'),
    ],
    institution: 'Opera de Tenerife',
    link: 'https://auditoriodetenerife.com/es/lucrezia-borgia'
  }
]

export { eventsToUpload }