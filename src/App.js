import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SingInAndSingUp from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'
import { auth } from './firebase/firebase.util'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />

          <Route path='/signin' component={SingInAndSingUp} />
        </Switch>
      </div>
    )
  }
}

export default App
