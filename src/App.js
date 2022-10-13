import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import useLocalStorage from 'use-local-storage'

function App() {
  const [theme, setTheme] = useLocalStorage('theme','light')


const toggleTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
}

  return (
    <div className = 'main'>
      <h1>
        <Header myTheme = {theme} onToggleTheme = {toggleTheme}/>
        <Hero myTheme = {theme}/>
        <Footer myTheme = {theme}/>
      </h1>
    </div>
  );
}

export default App;
