const profile = {
  fullName: 'Jiwon',
  description: 'E-Scooter Services',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'avatar.svg',
  about: {
    title: `Hello!! 
    Welcome to JiwonWorkz`,
    description: `I am a Limited time Electric Scooter Builder with Clean Wirings and Many others services. If you are interested in building a scooter for your own do come and contact me! 
   `,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Singapore, Woodlands',
        url: '',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'twitter',
        text: '@username',
        url: 'https://twitter.com/username',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'email@email.com',
        url: 'mailto://ryanlimjunbin@gmail.com',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'lock',
        text: '@kuser',
        url: 'https://keybase.io/kuser',
        hoverColor: '#e9641c'
      }
    ]
  },
  social: [
    {
      iconName: 'twitter',
      url: 'https://twitter.com/username',
      text: "I'm on Twitter",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'telegram',
      url: 'https://t.me/@JiW_0N',
      text: "Contact me on Telegram",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/username',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:ryanlimjunbin@gmail.com',
      text: 'Send me an email',
      hoverColor: '#000'
    }
  ]
}

const projects = [
  {
    title: 'Fiido Wiring Service',
    img: '',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['YYK Controller', 'HM Motor'],
    siteUrl: 'https://amazing.project.com',
    sourceCodeUrl: 'https://github.com/user/project'
  },
  {
    title: 'HM Motor Hall Sensor Replacement',
    img: 'https://www.nethruster.com/assets/img/icons/apple-touch-icon.png',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Hall Sensor', 'HM Motor', 'Go'],
    siteUrl: 'https://amazing.project.com'
  },
  {
    title: 'HM Motor Bearing Replacement',
    img: 'https://www.nethruster.com/assets/img/wareader.svg',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Wat', 'Linux', 'LoL'],
    sourceCodeUrl: 'https://github.com/user/:O'
  },
  {
    title: 'HM Motor Rephase AWG Wire',
    img: 'https://www.nethruster.com/assets/img/wareader.svg',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Wat', 'Linux', 'LoL'],
    sourceCodeUrl: 'https://github.com/user/:O'
  },
  {
    title: 'YYK Conroller Fully AWG',
    img: 'https://www.nethruster.com/assets/img/wareader.svg',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Wat', 'Linux', 'LoL'],
    sourceCodeUrl: 'https://github.com/user/:O'
  }
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = 'no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
