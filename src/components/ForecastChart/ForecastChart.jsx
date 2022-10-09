import React from 'react'
import PropTypes from 'prop-types'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import './ForecastChart.css';
const ForecastChart = ( {data} ) => {
  return (
    <ResponsiveContainer width={"95%"} height={250}>
      <LineChart
          margin={{ top: 20, left: 5, right: 5, bottom:20 }} 
          data={data}>
          <XAxis dataKey="dayHour"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid />
          <Line type="monotone" dataKey="max" stroke="#FF0000" />
          <Line type="monotone" dataKey="min" stroke="#0000FF" />
      </LineChart>
    </ResponsiveContainer>
  )
}

ForecastChart.propTypes = {
    data: PropTypes.shape({
      dayHour: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    }).isRequired
}

export default ForecastChart