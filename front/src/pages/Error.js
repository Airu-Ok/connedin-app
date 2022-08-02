import { Link } from 'react-router-dom'
import { Component } from 'react'
import Notfound from '../assets/images/100447-search-not-found.json'
import {Button, Box} from '../assets/wrappers/ErrorPage'
import Lottie from 'react-lottie';

class Error extends Component {
    render(){
        const defaultOptions ={
            loop: true,
            autoplay: true,
            animationData: Notfound,
        };
        return(
            <Box className='not-found'>

                <Lottie options={defaultOptions} />
                
                <p>Lo siento, la página solicitada no se ha podido encontrar.</p>
                <Button>
                <Link to="/" style={{textDecoration: 'none', color: '#fff'}}>Ir a home</Link>
                </Button>
            </Box>
        );
    }
}

export default Error
