import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {

  return(
      <Component {...pageProps} />
  ) 
}

export default MyApp
//Dentro do _app fica os componetes fixos da página, tal como sidbar e cabeçalhos
//index é a home, com arquivos indicando outras páginas