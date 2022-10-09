import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three'
const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0);
  console.log("myRefDiv.current", myRefDiv.current);
  useEffect(()=> {
    console.log("myRefDiv.current", myRefDiv.current);
    if (!vanta){
        setVanta(Clouds({
            THREE,
            el: myRefDiv.current
        }));
        console.log("Cargando la fanta, digo el vanta");
    }
    // Al salir de la pantalla debemos detener el efecto
    // y des-asociar todos los recursos (div + vanta effect)
    return () => {
        if (vanta) {
            vanta.destroy();
            console.log("Libero los recursos");
        }
    }
  },[vanta])
  return (
    <div className='full' ref={myRefDiv}>
        {children}
    </div>
  )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen