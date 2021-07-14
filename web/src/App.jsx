import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home'
import Login from './components/login'
import Nav from './components/nav'
import About from './components/about'
import Signup from './components/signup'
import ForgotPassword from './components/forgotPassword'
import { AuthProvider } from './contexts/authContext'
import ProtectedAccount from './components/protected/ProtectedAccount'
// import Protected from './components/protected/Protected'
import './styles/App.scss'
import MyProfile from './components/myprofile'
import Groups from './components/groups'
import Maps from './components/map'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Route exact path='/' component={Home} />
        <ProtectedAccount path='/login' component={Login} />
        <ProtectedAccount path='/signup' component={Signup} />
        <ProtectedAccount path='/forgotpassword' component={ForgotPassword} />
        <Route path='/about' component={About} />
        <Route path='/myprofile' component={MyProfile} />
        <Route path='/groups' component={Groups} />
        <Route path='/map' component={Maps} />
      </Router>
    </AuthProvider>
  )
}
