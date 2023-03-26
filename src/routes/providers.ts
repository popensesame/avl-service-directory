
type Service = 'Homeless Services' |
  'Rental Aid' |
  'Veteran Aid' |
  'Overnight Shelter' |
  'Food Aid' |
  'Referral Services' |
  'Legal Aid' |
  'Court Advocacy' |
  'Transgender & Non-binary Support' |
  'Support Hotline' |
  'LGBTQ Support' |
  'Emergency Shelter' |
  'Domestic Violence Support' |
  'Individual Counseling' |
  'Group Counseling';

type ServiceLocation = {
  name?: string;
  hours?: string[];
  phones?: string[];
  address?: string;
  email?: string;
}

type Provider = {
  name: string;
  locations?: ServiceLocation[];
  website?: string;
  description?: string;
  services: Service[];
}

export const providers: Provider[] = [
  {
    name: 'United Way 2-1-1',
    description: 'NC 211 is an information and referral service provided by United Way of North Carolina. Families and individuals can call to obtain free and confidential information on health and human services and resources within their community.',
    website: 'https://nc211.org',
    locations: [
      {
        name: '24-Hour Hotline',
        phones: [
          '211',
          '1-888-892-1162'
        ]
      }
    ],
    services: [
      'Referral Services'
    ]
  },
  {
    name: 'Homeward Bound',
    description: 'Homeward Bound’s Permanent Supportive Housing Program provides safe, stable homes, paired with long-term intensive case management services, to highly vulnerable, chronically homeless individuals.',
    locations: [
      {
        name: 'AHOPE Day Center',
        phones: ['828-252-8883'],
        address: '19 North Ann Street, Asheville, NC 28801',
        hours: [
          'Monday, Tuesday, Thursday, Friday | 8 am to 2 pm',
          'Wednesday | 8 am to 11:30 am | 1:30 pm to 3:30 pm for families'
        ]
      },
      {
        name: 'Administrative Office',
        phones: ['828-258-1695']
      },
      {
        name: 'Welcome Home Donation Center',
        phones: ['828-412-5322']
      }
    ],
    services: [
      'Homeless Services',
      'Rental Aid',
      'Veteran Aid',
      'Food Aid',
    ],
  },
  {
    name: 'Tranzmission',
    description: 'Education, advocacy and support for nonbinary and transgender people in Western North Carolina.',
    website: 'https://tranzmission.org',
    services: [
      'Transgender & Non-binary Support',
      'LGBTQ Support',
      'Food Aid'
    ],
    locations: [
      {
        name: 'Contact',
        email: 'info@tranzmission.org'
      }
    ]
  },
  {
    name: 'Trans Lifeline',
    description: 'Trans Lifeline is a grassroots hotline and microgrants 501(c)(3) non-profit organization offering direct emotional and financial support to trans people in crisis – for the trans community, by the trans community.',
    website: 'https://translifeline.org',
    services: [
      'Support Hotline',
      'Transgender & Non-binary Support',
      'LGBTQ Support'
    ],
    locations: [
      {
        name: '24-Hour Hotline',
        phones: [
          '877-565-8860'
        ],
      }
    ]
  },
  {
    name: 'Trevor Project',
    description: 'Crisis counselors are trained to answer calls, chats, or texts from LGBTQ young people who reach out on our free, confidential and secure 24/7 service when they are struggling with issues such as coming out, LGBTQ identity, depression, and suicide.',
    website: 'https://www.thetrevorproject.org',
    services: [
      'Support Hotline',
      'Transgender & Non-binary Support',
      'LGBTQ Support'
    ],
    locations: [
      {
        name: '24-Hour Hotline (Call)',
        phones: [
          '1-866-488-7386'
        ]
      },
      {
        name: '24-Hour Hotline (Text)',
        phones: [
          '678-678'
        ]
      }
    ]
  },
  {
    name: 'Helpmate',
    description: 'Is your partner violent, threatening, critical or controlling? Helpmate provides free emergency shelter, counseling, and support for you and your children. We will help you explore your options.',
    website: 'https://helpmateonline.org',
    services: [
      'Support Hotline',
      'Domestic Violence Support',
      'Emergency Shelter',
      'Court Advocacy',
      'Individual Counseling',
      'Group Counseling',
      'LGBTQ Support',
      'Transgender & Non-binary Support',
    ],
    locations: [
      {
        name: '24-Hour Hotline',
        phones: [
          '828-254-0516'
        ]
      },
      {
        name: 'Family Justice Center',
        phones: [
          '828-254-2968'
        ],
        address: '35 Woodfin St, Asheville, NC 28801'
      }
    ]
  },
  {
    name: 'Pisgah Legal Services',
    description: 'Pisgah Legal Services seeks to pursue justice by providing legal assistance and advocacy to help low-income people in Western North Carolina meet their basic needs and improve their lives.',
    website: 'https://www.pisgahlegal.org',
    services: [
      'Legal Aid'
    ],
    locations: [
      {
        name: 'Apply for Help',
        phones: [
          '828-253-0406'
        ],
        hours: [
          'Monday - Friday 8:30am - 5:00pm'
        ]
      },
      {
        name: 'Asheville Office',
        phones: [
          '1-828-253-040'
        ],
        address: '62 Charlotte Street, Asheville, NC 28801'
      },
      {
        name: 'Hendersonville Office',
        phones: [
          '1-828-692-7622'
        ],
        address: '440 S. Church Street, Hendersonville, NC 28792',
      },
      {
        name: 'Rutherfordton Office',
        phones: [
          '1-828-247-0297'
        ],
        address: '169 N. Main Street, Rutherfordton, NC 28139'
      },
      {
        name: 'Highlands/Cashiers Office',
        phones: [
          '828-210-3424'
        ],
        address: '209 Hospital Dr. Ste. 203, Highlands, NC 28741'
      },
      {
        name: 'Burnsville Office',
        phones: [
          '1-800-489-6144'
        ],
        address: '302 W. U.S. Hwy. 19E Bypass, Burnsville, NC 28714'
      },
      {
        name: 'Additional offices on website'
      }
    ]
  }
]