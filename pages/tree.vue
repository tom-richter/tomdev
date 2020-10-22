<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Willkommen auf meiner Website!</h1>
        <v-treeview dense :items="tree" item-key="name"></v-treeview>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Tree extends Vue {
  tree = [
    {
      rank: 'no rank',
      name: 'root',
      otherNames: {
        synonyms: ['all'],
      },
      children: [
        {
          rank: 'no rank',
          name: 'cellular organisms',
          otherNames: {
            synonyms: ['biota'],
          },
          children: [
            {
              rank: 'superkingdom',
              name: 'Eukaryota',
              otherNames: {
                synonyms: ['Eucarya', 'Eucaryotae', 'Eukarya', 'Eukaryotae'],
                commonNames: ['eukaryotes'],
              },
              children: [
                {
                  rank: 'kingdom',
                  name: 'Viridiplantae',
                  otherNames: {
                    synonyms: ['Chlorobionta', 'Chloroplastida'],
                    commonNames: ['green plants'],
                    equivalentNames: [
                      'Chlorophyta/Embryophyta group',
                      'chlorophyte/embryophyte group',
                    ],
                    authorities: [
                      'Chlorobionta Jeffrey, 1982',
                      'Chloroplastida Adl et al. 2005',
                      'Viridiplantae Cavalier-Smith, 1981',
                    ],
                  },
                  children: [
                    {
                      rank: 'phylum',
                      name: 'Streptophyta',
                      otherNames: {
                        authorities: ['Streptophyta Bremer, 1985'],
                      },
                      children: [
                        {
                          rank: 'subphylum',
                          name: 'Streptophytina',
                          otherNames: {
                            synonyms: ['Charophyta/Embryophyta group'],
                            equivalentNames: ['charophyte/embryophyte group'],
                          },
                          children: [
                            {
                              rank: 'clade',
                              name: 'Embryophyta',
                              otherNames: {
                                commonNames: ['higher plants', 'land plants', 'plants'],
                              },
                              children: [
                                {
                                  rank: 'clade',
                                  name: 'Tracheophyta',
                                  otherNames: {
                                    commonNames: ['vascular plants'],
                                    authorities: ['Tracheophyta Sinnott ex Cavalier-Smith, 1998'],
                                  },
                                  children: [
                                    {
                                      rank: 'clade',
                                      name: 'Euphyllophyta',
                                      otherNames: {
                                        equivalentNames: ['euphyllophytes'],
                                      },
                                      children: [
                                        {
                                          rank: 'clade',
                                          name: 'Spermatophyta',
                                          otherNames: {
                                            commonNames: ['seed plants'],
                                          },
                                          children: [
                                            {
                                              rank: 'class',
                                              name: 'Magnoliopsida',
                                              otherNames: {
                                                synonyms: ['Angiospermae', 'Magnoliophyta'],
                                                commonNames: ['angiosperms'],
                                              },
                                              children: [
                                                {
                                                  rank: 'clade',
                                                  name: 'Mesangiospermae',
                                                  otherNames: {
                                                    authorities: [
                                                      'Mesangiospermae M.J.Donoghue, J.A.Doyle & P.D.Cantino, 2007',
                                                    ],
                                                  },
                                                  children: [
                                                    {
                                                      rank: 'clade',
                                                      name: 'eudicotyledons',
                                                      otherNames: {},
                                                      children: [
                                                        {
                                                          rank: 'clade',
                                                          name: 'Gunneridae',
                                                          otherNames: {
                                                            equivalentNames: [
                                                              'core eudicots',
                                                              'core eudicotyledons',
                                                            ],
                                                            authorities: [
                                                              'Gunneridae D.E.Soltis, P.S.Soltis & W.S.Judd, 2007',
                                                            ],
                                                          },
                                                          children: [
                                                            {
                                                              rank: 'clade',
                                                              name: 'Pentapetalae',
                                                              otherNames: {
                                                                authorities: [
                                                                  'Pentapetalae D.E.Soltis, P.S.Soltis & W.S.Judd, 2007',
                                                                ],
                                                              },
                                                              children: [
                                                                {
                                                                  rank: 'clade',
                                                                  name: 'rosids',
                                                                  otherNames: {},
                                                                  children: [
                                                                    {
                                                                      rank: 'clade',
                                                                      name: 'fabids',
                                                                      otherNames: {
                                                                        synonyms: ['eurosids I'],
                                                                      },
                                                                      children: [
                                                                        {
                                                                          rank: 'order',
                                                                          name: 'Rosales',
                                                                          otherNames: {
                                                                            authorities: [
                                                                              'Rosales Bercht. & J.Presl, 1820',
                                                                            ],
                                                                          },
                                                                          children: [
                                                                            {
                                                                              rank: 'family',
                                                                              name: 'Rosaceae',
                                                                              otherNames: {
                                                                                synonyms: [
                                                                                  'Malaceae',
                                                                                ],
                                                                                commonNames: [
                                                                                  'rose family',
                                                                                ],
                                                                                authorities: [
                                                                                  'Malaceae Sm., 1903',
                                                                                  'Rosaceae Juss., 1789',
                                                                                ],
                                                                              },
                                                                              children: [
                                                                                {
                                                                                  rank: 'subfamily',
                                                                                  name:
                                                                                    'Amygdaloideae',
                                                                                  otherNames: {
                                                                                    synonyms: [
                                                                                      'Maloideae',
                                                                                      'Spiraeoideae',
                                                                                    ],
                                                                                    authorities: [
                                                                                      'Amygdaloideae Arn., 1832',
                                                                                      'Maloideae C.Weber, 1964',
                                                                                    ],
                                                                                  },
                                                                                  children: [
                                                                                    {
                                                                                      rank: 'tribe',
                                                                                      name:
                                                                                        'Maleae',
                                                                                      otherNames: {
                                                                                        synonyms: [
                                                                                          'Pyreae',
                                                                                        ],
                                                                                        authorities: [
                                                                                          'Maleae Small, 1933',
                                                                                          'Pyreae Baill., 1869',
                                                                                          'Pyrodae C.S.Campbell et al., 2007',
                                                                                        ],
                                                                                      },
                                                                                      children: [
                                                                                        {
                                                                                          rank:
                                                                                            'genus',
                                                                                          name:
                                                                                            'Malus',
                                                                                          otherNames: {},
                                                                                          children: [
                                                                                            {
                                                                                              rank:
                                                                                                'species',
                                                                                              name:
                                                                                                'Malus domestica',
                                                                                              otherNames: {
                                                                                                synonyms: [
                                                                                                  'Malus communis',
                                                                                                  'Malus pumila auct.',
                                                                                                  'Malus pumila var. domestica',
                                                                                                  'Malus sylvestris var. domestica',
                                                                                                  'Malus x domestica',
                                                                                                  'Pyrus malus',
                                                                                                ],
                                                                                                commonNames: [
                                                                                                  'apple tree',
                                                                                                  'cultivated apple',
                                                                                                ],
                                                                                                authorities: [
                                                                                                  'Malus communis Desf.',
                                                                                                  'Malus domestica Borkh., nom. cons. prop.',
                                                                                                  'Malus pumila var. domestica (Borkh.) C.K.Schneid.',
                                                                                                  'Malus sylvestris var. domestica (Borkh.) Mansf.',
                                                                                                  'Pyrus malus L.',
                                                                                                ],
                                                                                              },
                                                                                              children: [],
                                                                                              numOfChildren: 0,
                                                                                            },
                                                                                          ],
                                                                                          numOfChildren: 1,
                                                                                        },
                                                                                        {
                                                                                          rank:
                                                                                            'genus',
                                                                                          name:
                                                                                            'Pyrus',
                                                                                          otherNames: {
                                                                                            authorities: [
                                                                                              'Pyrus L., 1753',
                                                                                            ],
                                                                                          },
                                                                                          children: [
                                                                                            {
                                                                                              rank:
                                                                                                'species',
                                                                                              name:
                                                                                                'Pyrus pyraster',
                                                                                              otherNames: {
                                                                                                synonyms: [
                                                                                                  'Pyrus communis var. pyraster',
                                                                                                ],
                                                                                                commonNames: [
                                                                                                  'wild pear',
                                                                                                ],
                                                                                                authorities: [
                                                                                                  'Pyrus communis var. pyraster L.',
                                                                                                  'Pyrus pyraster (L.) Burgsd.',
                                                                                                ],
                                                                                              },
                                                                                              children: [],
                                                                                              numOfChildren: 0,
                                                                                            },
                                                                                            {
                                                                                              rank:
                                                                                                'species',
                                                                                              name:
                                                                                                'Pyrus ussuriensis',
                                                                                              otherNames: {
                                                                                                commonNames: [
                                                                                                  'Harbin pear',
                                                                                                  'qiu zi li',
                                                                                                ],
                                                                                                authorities: [
                                                                                                  'Pyrus ussuriensis Maxim.',
                                                                                                ],
                                                                                              },
                                                                                              children: [],
                                                                                              numOfChildren: 0,
                                                                                            },
                                                                                            {
                                                                                              rank:
                                                                                                'species',
                                                                                              name:
                                                                                                'Pyrus boissieriana',
                                                                                              otherNames: {
                                                                                                authorities: [
                                                                                                  'Pyrus boissieriana Buhse',
                                                                                                ],
                                                                                              },
                                                                                              children: [],
                                                                                              numOfChildren: 0,
                                                                                            },
                                                                                          ],
                                                                                          numOfChildren: 3,
                                                                                        },
                                                                                      ],
                                                                                      numOfChildren: 4,
                                                                                    },
                                                                                    {
                                                                                      rank: 'tribe',
                                                                                      name:
                                                                                        'Amygdaleae',
                                                                                      otherNames: {
                                                                                        authorities: [
                                                                                          'Amygdaleae Juss., 1789',
                                                                                        ],
                                                                                      },
                                                                                      children: [
                                                                                        {
                                                                                          rank:
                                                                                            'genus',
                                                                                          name:
                                                                                            'Prunus',
                                                                                          otherNames: {
                                                                                            synonyms: [
                                                                                              'Prunus subg. Amygdalus',
                                                                                              'Prunus subg. Armeniaca',
                                                                                              'Prunus subg. Cerasus',
                                                                                            ],
                                                                                            authorities: [
                                                                                              'Amygdalus L., 1753',
                                                                                              'Armeniaca Scop., 1754',
                                                                                              'Cerasus Mill., 1754',
                                                                                              'Maddenia Hook.f. & Thomson, 1854',
                                                                                              'Prunus L., 1753',
                                                                                              'Prunus subg. Amygdalus (L.) Focke',
                                                                                              'Prunus subg. Armeniaca (Scop.) Nakai',
                                                                                              'Prunus subg. Cerasus (Mill.) Focke',
                                                                                            ],
                                                                                          },
                                                                                          children: [
                                                                                            {
                                                                                              rank:
                                                                                                'species',
                                                                                              name:
                                                                                                'Prunus domestica',
                                                                                              otherNames: {
                                                                                                authorities: [
                                                                                                  'Prunus domestica L.',
                                                                                                ],
                                                                                              },
                                                                                              children: [],
                                                                                              numOfChildren: 0,
                                                                                            },
                                                                                          ],
                                                                                          numOfChildren: 1,
                                                                                        },
                                                                                      ],
                                                                                      numOfChildren: 1,
                                                                                    },
                                                                                  ],
                                                                                  numOfChildren: 5,
                                                                                },
                                                                              ],
                                                                              numOfChildren: 5,
                                                                            },
                                                                          ],
                                                                          numOfChildren: 5,
                                                                        },
                                                                      ],
                                                                      numOfChildren: 5,
                                                                    },
                                                                  ],
                                                                  numOfChildren: 5,
                                                                },
                                                              ],
                                                              numOfChildren: 5,
                                                            },
                                                          ],
                                                          numOfChildren: 5,
                                                        },
                                                      ],
                                                      numOfChildren: 5,
                                                    },
                                                  ],
                                                  numOfChildren: 5,
                                                },
                                              ],
                                              numOfChildren: 5,
                                            },
                                          ],
                                          numOfChildren: 5,
                                        },
                                      ],
                                      numOfChildren: 5,
                                    },
                                  ],
                                  numOfChildren: 5,
                                },
                              ],
                              numOfChildren: 5,
                            },
                          ],
                          numOfChildren: 5,
                        },
                      ],
                      numOfChildren: 5,
                    },
                  ],
                  numOfChildren: 5,
                },
              ],
              numOfChildren: 5,
            },
          ],
          numOfChildren: 5,
        },
      ],
      numOfChildren: 5,
    },
  ]
}
</script>
