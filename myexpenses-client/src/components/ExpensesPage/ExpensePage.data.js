export function createExpense(expense) {
  // Return promise to external API call
}

// export function getExpenses() {
// Return promise to external API call
// }

export function getExpenses() {
  return new Promise(resolve => {
    setTimeout(() => resolve(expensesData), 0);
  });
}

const expensesData = [
  {
    id: '4b91f095-2fa3-4af7-b55a-0d03c909e4a4',
    amount: 2280,
    category: 'Nepal',
    description: 'Cummings Contreras spent 3676 in Denmark'
  },
  {
    id: 'f6de2612-953e-4b35-b208-016fabc303b9',
    amount: 901,
    category: 'Paraguay',
    description: 'Bray Dillon spent 2783 in Solomon Islands'
  },
  {
    id: '855fa1f7-9278-44ec-ae31-763cce282b4d',
    amount: 1012,
    category: 'Tuvalu',
    description: 'Holder Schroeder spent 506 in Armenia'
  },
  {
    id: 'ef75417a-3186-44e4-b705-4fe1fa1cf876',
    amount: 3613,
    category: 'Anguilla',
    description: 'Kellie Bradford spent 3251 in Bahrain'
  },
  {
    id: 'b115fc94-bca1-4f17-9a38-715a4451cd4c',
    amount: 4000,
    category: 'Kenya',
    description: 'Ward Houston spent 3444 in Kuwait'
  },
  {
    id: 'f21dd518-b201-4243-808a-cf351847e921',
    amount: 3473,
    category: 'Spain',
    description: 'Noemi Compton spent 2584 in Cyprus'
  },
  {
    id: '613097d3-33f8-4163-9c90-3a8cdd380ce5',
    amount: 1017,
    category: 'Saint Lucia',
    description: 'Callie Stout spent 653 in Gabon'
  },
  {
    id: '4bc978a1-285b-42fd-995c-69dca220ccc6',
    amount: 1238,
    category: 'Iceland',
    description: 'Valencia Rowland spent 3049 in Qatar'
  },
  {
    id: '35a00049-fd17-43cc-9ead-a81b317b58fe',
    amount: 3354,
    category: 'Argentina',
    description: 'Hamilton Stein spent 3610 in French Guiana'
  },
  {
    id: 'c27c154c-1d05-4d14-8155-bcd14d9db1c9',
    amount: 3521,
    category: 'Algeria',
    description: 'Latasha Bender spent 2286 in Norfolk Island'
  },
  {
    id: 'dcd82c49-9824-4626-af7b-f212a5620753',
    amount: 3937,
    category: 'Vatican City State (Holy See)',
    description: 'Patricia Fisher spent 1657 in United Arab Emirates'
  },
  {
    id: '5f339ccf-2393-419b-a73b-a6e0881b2805',
    amount: 2697,
    category: 'Croatia (Hrvatska)',
    description: 'Kristine Mercer spent 2007 in Mauritius'
  },
  {
    id: '5650545a-5fa5-4e7d-b794-a7ad284eded4',
    amount: 3161,
    category: 'Iran',
    description: 'Clara Dennis spent 1085 in Samoa'
  },
  {
    id: '54858db2-4f5f-4d13-86a7-8c9bf3c44585',
    amount: 2184,
    category: 'Eritrea',
    description: 'Tyler Bartlett spent 2774 in Bangladesh'
  },
  {
    id: '05cdeaaa-0523-41e4-95ff-c61cf89df5f5',
    amount: 1485,
    category: 'Poland',
    description: 'Taylor James spent 554 in Israel'
  },
  {
    id: '8536a6e9-c543-46e7-be51-f36b33ee48ff',
    amount: 119,
    category: 'Italy',
    description: 'Briana Avila spent 3385 in Korea (North)'
  },
  {
    id: '0c203e84-ea73-4261-a095-01cc9b656ad9',
    amount: 954,
    category: 'Cameroon',
    description: 'Lola Mcdowell spent 1148 in Aruba'
  },
  {
    id: 'b4d3f443-3bd3-451a-a87a-b135c8a408af',
    amount: 629,
    category: 'Japan',
    description: 'Krystal Watson spent 1145 in Myanmar'
  },
  {
    id: 'ed08f1cd-5c84-4303-b03f-8f3a7b5cf915',
    amount: 3143,
    category: 'Macau',
    description: 'Montoya Richardson spent 3930 in Virgin Islands (US)'
  },
  {
    id: '3331fe18-2fa7-436c-a5ee-afa84d23b7e3',
    amount: 2180,
    category: 'India',
    description: 'Peggy Roth spent 2693 in St. Helena'
  },
  {
    id: 'a3c9fe22-0c3b-41a5-970e-aab2462c6c49',
    amount: 1328,
    category: 'Colombia',
    description: 'Carrie Lane spent 1334 in Ethiopia'
  },
  {
    id: '89b8669b-d387-4ad4-a618-8cb106d77705',
    amount: 3435,
    category: 'United Kingdom',
    description: 'Gallegos Becker spent 3348 in Bhutan'
  },
  {
    id: '0d6d1a1c-6b49-46f4-84b6-5395a284ae5e',
    amount: 890,
    category: 'Germany',
    description: 'Malinda Ewing spent 3648 in Panama'
  },
  {
    id: '28ca425d-dafc-4cfe-b9f7-a795d328c7b1',
    amount: 2046,
    category: 'Saudi Arabia',
    description: 'Williamson Beasley spent 304 in US Minor Outlying Islands'
  },
  {
    id: '3b0d1e68-27d7-4682-a194-fa7cf4ec6a9a',
    amount: 2329,
    category: 'Sao Tome and Principe',
    description: 'Riddle Lopez spent 2496 in Venezuela'
  },
  {
    id: '48f993bd-b78d-4f7f-88dd-37f2b386bf27',
    amount: 2928,
    category: 'Bolivia',
    description: 'Malone Knight spent 1785 in Mexico'
  },
  {
    id: '4f20c99d-4e73-4f19-b5a0-0ef6eafb4c31',
    amount: 3550,
    category: 'Saint Kitts and Nevis',
    description: 'Jefferson Hinton spent 3276 in Morocco'
  },
  {
    id: '685a7c84-c832-44f1-8d6d-c1e2286f63e7',
    amount: 3375,
    category: 'Angola',
    description: 'Lyons Lambert spent 1277 in Cook Islands'
  },
  {
    id: '3d3a914e-bd2f-4ac8-8baf-2f3066d300b7',
    amount: 3475,
    category: 'Peru',
    description: 'Myrtle Brewer spent 3132 in China'
  },
  {
    id: '732dc5f8-14d3-4188-bfcb-6001307804de',
    amount: 3166,
    category: 'Ireland',
    description: 'Boyle Boyle spent 1972 in Netherlands'
  },
  {
    id: '5cb10867-099a-4843-ac43-e3a598701bee',
    amount: 1455,
    category: 'Madagascar',
    description: 'Desiree Frederick spent 822 in East Timor'
  },
  {
    id: '59990b7c-bc9c-4252-bb3a-cdd42b32593c',
    amount: 2883,
    category: 'Puerto Rico',
    description: 'Marsha Higgins spent 2080 in Tajikistan'
  },
  {
    id: '86c54822-23bd-497b-b316-f3b68b48b59a',
    amount: 1825,
    category: 'Senegal',
    description: 'Manuela Williamson spent 1298 in Oman'
  }
];
