import main from '../assets/images/main2.png'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            app<span> seguimiento... </span>
          </h1>
          <p>
            Una App donde puedes dar seguimiento a tus empleos.
            Tanto, si fuiste llamado a una etrevista o si fuiste rechazado.
            
          </p>
          
          <Link to='/register' className='btn btn-hero btn-landing'>
            Iniciar sesión / Registrarse
          </Link>
         
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
