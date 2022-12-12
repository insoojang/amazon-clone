import { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function App() {
    const [{}, dispatch] = useStateValue()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user, '입니다')
            if (user) {
                dispatch({ type: 'SET_USER', user: user })
            } else {
                dispatch({ type: 'SET_USER', user: null })
            }
        })
    }, [])

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <>
                                <Header />
                                <Checkout />
                            </>
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
