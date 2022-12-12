import './App.css'
import Header from './Header'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route
                        path="/checkout"
                        element={<h1>장바구니 패이지 입니다</h1>}
                    ></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
