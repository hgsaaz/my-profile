import React, { useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'App/Theme/theme'
import { GlobalStyles } from 'App/Theme/global'
import './App.css'
import Home from 'App/components/Home'
import Header from 'App/components/Header'
import About from 'App/components/About'
import Skills from 'App/components/Skills'
import Connect from 'App/components/Connect'
import BackToTopBtn from 'App/components/BackToTopBtn'

const App = () => {
  const [mode, setMode] = useState('light');
  const [createTyped, setCreateTyped] = useState(true);

  const toggleTheme = () => {
    setCreateTyped(false)
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }

  const connectRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollTo = (src) => {
    switch (src) {
      case 'HOME': homeRef.current.scrollIntoView({ behavior: "smooth" }); break;
      case 'ABOUT': aboutRef.current.scrollIntoView({ behavior: "smooth" }); break;
      case 'CONNECT': connectRef.current.scrollIntoView({ behavior: "smooth" }); break;
      default: homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (

    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header mode={mode} toggleTheme={toggleTheme} scrollTo={scrollTo} />
        <Home mode={mode} myRef={homeRef} createTyped={createTyped}/>
        <Skills mode={mode} myRef={aboutRef} />
        <About mode={mode} />
        <Connect mode={mode} myRef={connectRef} />
        <BackToTopBtn mode={mode} />
      </>
    </ThemeProvider>
  );
}

export default App;