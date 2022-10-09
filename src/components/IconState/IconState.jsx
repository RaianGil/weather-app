import React from 'react'
import { WiDayCloudy, WiDaySunny, WiRain, WiSnow, WiRaindrop, WiThunderstorm, WiDust } from 'react-icons/wi';
import PropTypes from 'prop-types'

export const validValues = [
  "clouds",
  "clear",
  "rain",
  "snow",
  "drizzle",
  "thunderstorm",
  "mist"
];
const stateByName = {
  clouds: WiDayCloudy,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  drizzle: WiRaindrop,
  thunderstorm: WiThunderstorm, 
  mist: WiDust
};

const IconState = ({ state }) => {
  const IconState =  stateByName[state];
  return <IconState />
}

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState