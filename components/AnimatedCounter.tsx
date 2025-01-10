"use client";
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <span className='w-full'>
        <CountUp end={amount} 
        duration={2} 
        separator=","
        prefix='₹'
        decimals={2}
        decimal='.'
        />
    </span>
  )
}

export default AnimatedCounter