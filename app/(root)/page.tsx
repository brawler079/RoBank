import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = {firstName: 'Abhi', lastName: 'Brawl', email: 'anand@test'}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type = 'greeting'
            title = 'Welcome'
            user = {loggedIn?.firstName || 'Guest'}
            subtext = 'Manage your account and transactions efficiently'

          />

          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1250.37}
          />
        </header>
        Recent Transaction
      </div>

      <RightSidebar
      user = {loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 169.5},{currentBalance: 225.6}]}
      />
    </section>
  )
}

export default Home
