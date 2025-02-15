import './App.css'
import Header from "./components/Header/Header.jsx";
import StoryParts from "./components/Main/StoryParts/StoryParts.jsx";
import Tabs from "./components/Main/Tabs/Tabs.jsx";
import {useState} from "react";
import About from "./components/Main/About/About.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./components/Main/Login/Login.jsx";
import Support from "./components/Main/Support/Support.jsx";
import Clicker from "./components/Clicker/Clicker.jsx";
import Profile from "./components/Main/Profile/Profile.jsx";

export default function App() {
  let [tab, setTab] = useState('main');
  return (
    <>
    <Header />
        <BrowserRouter>
            <Routes>
                <Route path={'/zasostest/'} exact element={
                    <>
                    <Tabs active={tab} onChange={current => setTab(current)} />
                    {tab === 'main' && <StoryParts />}
                    {tab === 'about' && <About />}
                    {tab === 'support' && <Support />}
                    {tab === 'clicker' && <Clicker />}
                    </>
                } />
                <Route path={'/zasostest/login'} Component={Login} />
                <Route path={'/zasostest/profile'} Component={Profile} />
            </Routes>
        </BrowserRouter>

    </>
  )
}
