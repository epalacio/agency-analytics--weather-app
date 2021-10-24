
# Weather App - Built for: Agency Analytics

Small weather app built purely through Front-End Development.


## Author
- [@estebanpalacio](https://www.github.com/epalacio)

## Notes
- App has been built with a mobile-first approach. As only a desktop version was given, a vertical stacked layout is suggested for mobile screens to be able to see all data in screen.
- App was built with one main container as there are no pages, plus two components. Main Card component and a Small Card component that has been used mapping through available data.
- All info provided via API is kept in case app needs to be scaled in the future to display more info.
- Api calls are done through axios, and a small loader has been added in place to avoid render issues in case of slow api response.
- Icon set has been obtained from flaticon, these are used as SVGs for faster loading times and image scaleability without pixelation. These are the closest possible to mockup provided.
- Google Fonts used are Montserrat for all text, Teko for temperatures.
- tailwindCSS proves to be an excellent front-end framework, easily customizable.

## Challenges
- Conversion of UTC dates to date as openWeather doesn't provide date strings
- Deployment initially attempted through Heroku, same as my portfolio website, yet compatibility issues with PostCSS8 and tailwind proved to be unnecessarily complex.
- API key hidden through Netlify variables is not available due to compatibility with React? Yet on Full App is possible to hide through Back-End with Nodejs.


## Tech Stack
**Client:** React, react-router-dom, tailwindCSS

**Server:** Node, axios, Netlify

  
## Deployment
App has been deployed with Netlify and can be viewed [here](https://weather-esteban-bfa357.netlify.app/)

  
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.estebanpalacio.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/palacioesteban/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/esti_pal)