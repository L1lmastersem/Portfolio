export const translations = {
  en: {
    nav: {
      home: 'home',
      about: 'about',
      projects: 'projects',
      contact: 'contact',
    },
    hero: {
      eyebrow: 'software developer',
      bio: "Third-year student at Mediacollege Amsterdam. I build user friendly web applications with React, JavaScript and PHP.",
      downloadCv: 'Download CV',
      getInTouch: 'Get in touch',
      scroll: 'scroll',
    },
    about: {
      eyebrow: 'about me',
      heading: 'Sem Pater',
      paragraph1: "Third-year student at Mediacollege Amsterdam studying software development. I build web applications with React, JavaScript and PHP and I take a lot of pride in the details most people never notice.",
      paragraph2: "I got into development because I wanted to turn ideas into something real and usable. I like owning a project end-to-end, from a rough sketch to a deployed product that actually feels good to use.",
      paragraph3: "Outside of school I'm always working on side projects or learning something new. Right now I'm focused on sharpening my React skills and getting more comfortable with backend architecture.",
      paragraph4: "I'm actively looking for an internship where I can contribute from day one, grow fast, and build things I'm proud of.",
      downloadCv: 'Download CV',
      frontend: 'Frontend',
      backend: 'Backend',
    },
    projects: {
      eyebrow: 'selected work',
      heading: 'Projects',
      comingSoon: 'Coming soon',
      live: 'Live',
      github: 'GitHub',
      sideProject: 'Side project',
      items: {
        tradingBot: {
          title: 'Trading Research & Tools',
          description: 'My biggest side project: designing and testing trading strategies for futures and crypto, and building the tools around them. I learned that a backtest that looks good is often wrong, so most of the work went into testing honestly: realistic fills, two years of data and checking results trade by trade.',
          timeline: [
            { phase: 'Start', text: 'A Python bot (CCXT, Pandas) with a desktop app and a live web dashboard that only traded when three timeframes agreed.' },
            { phase: 'Strategies', text: 'Moved to TradingView: built and backtested 10+ strategies in Pine Script on futures and crypto, and dropped every one without a real edge.' },
            { phase: 'Now', text: 'A Python simulator and a browser tool that merge exported trades by date to test daily risk limits, plus a live indicator that tracks risk across multiple charts.' },
          ],
          insight: '“Each chart looked safe on its own, but merged by date, the worst day across two symbols went 56% over the daily loss limit. The safety net brought it back under the limit by adjusting only 9 of 3,703 trades.”',
        },
        webshop: {
          title: 'E-commerce Webshop',
          description: 'My first webshop, built with HTML, CSS, JavaScript and PHP. It features a product catalog, shopping cart, and user authentication.',
        },
        dreamDestinations: {
          title: 'Dream Destinations',
          description: 'Built for the Skill Heroes competition. A React front end that shows travel destinations and their number of bookings, powered by a PHP REST API and a MySQL database.',
        },
      },
    },
    contact: {
      eyebrow: 'contact',
      headingLine1: "Let's work",
      headingLine2: 'together.',
      github: 'GitHub',
      instagram: 'Instagram',
      location: 'Amsterdam, NL',
    },
  },

  nl: {
    nav: {
      home: 'home',
      about: 'over mij',
      projects: 'projecten',
      contact: 'contact',
    },
    hero: {
      eyebrow: 'software developer',
      bio: 'Derdejaars student aan het Mediacollege Amsterdam. Ik bouw gebruiksvriendelijke webapplicaties met React, JavaScript en PHP.',
      downloadCv: 'Download CV',
      getInTouch: 'Neem contact op',
      scroll: 'scroll',
    },
    about: {
      eyebrow: 'over mij',
      heading: 'Over mij',
      paragraph1: 'Derdejaars student softwareontwikkeling aan het Mediacollege Amsterdam. Ik bouw webapplicaties met React, JavaScript en PHP en ik ben trots op details die de meeste mensen nooit opmerken.',
      paragraph2: 'Ik ben development gaan doen omdat ik ideeën wilde omzetten in iets echts en bruikbaars. Ik werk graag aan een project van begin tot eind, van een ruwe schets tot een gelanceerd product dat ook echt fijn is om te gebruiken.',
      paragraph3: 'Naast school werk ik altijd wel aan side-projects of leer ik iets nieuws. Op dit moment focus ik me op het aanscherpen van mijn React vaardigheden en het beter begrijpen van backend-architectuur.',
      paragraph4: 'Ik ben actief op zoek naar een stage waar ik vanaf dag één kan bijdragen, snel kan groeien en dingen kan bouwen waar ik trots op ben.',
      downloadCv: 'Download CV',
      frontend: 'Frontend',
      backend: 'Backend',
    },
    projects: {
      eyebrow: 'geselecteerd werk',
      heading: 'Projecten',
      comingSoon: 'Binnenkort',
      live: 'Live',
      github: 'GitHub',
      sideProject: 'Side project',
      items: {
        tradingBot: {
          title: 'Trading Research & Tools',
          description: 'Mijn grootste side project: tradingstrategieën voor futures en crypto ontwerpen en testen, en de tools eromheen bouwen. Ik leerde dat een backtest die er goed uitziet vaak niet klopt, dus het meeste werk zat in eerlijk testen: realistische fills, twee jaar aan data en resultaten trade voor trade controleren.',
          timeline: [
            { phase: 'Begin', text: 'Een bot in Python (CCXT, Pandas) met een desktop-app en een live webdashboard, die alleen tradede als drie tijdframes het eens waren.' },
            { phase: 'Strategieën', text: 'Overgestapt naar TradingView: meer dan tien strategieën in Pine Script gebouwd en gebacktest op futures en crypto, en alles zonder echte edge geschrapt.' },
            { phase: 'Nu', text: 'Een Python-simulator en een webtool die geëxporteerde trades op datum samenvoegen om dagelijkse risicolimieten te testen, plus een live indicator die het risico over meerdere grafieken bijhoudt.' },
          ],
          insight: '“Elke grafiek leek los veilig, maar samengevoegd op datum ging de slechtste dag over twee symbolen 56% over de dagelijkse verlieslimiet. Het safety net bracht dat terug onder de limiet door maar 9 van de 3.703 trades aan te passen.”',
        },
        webshop: {
          title: 'E-commerce Webshop',
          description: 'Mijn eerste webshop, gebouwd met HTML, CSS, JavaScript en PHP. Met productcatalogus, winkelwagen en gebruikersauthenticatie.',
        },
        dreamDestinations: {
          title: 'Dream Destinations',
          description: 'Gemaakt voor de Skill Heroes-wedstrijd. Een React-frontend die reisbestemmingen en hun aantal boekingen toont, gemaakt met een PHP REST API en een MySQL-database.',
        },
      },
    },
    contact: {
      eyebrow: 'contact',
      headingLine1: 'Laten we',
      headingLine2: 'samenwerken.',
      github: 'GitHub',
      instagram: 'Instagram',
      location: 'Amsterdam, NL',
    },
  },
};
