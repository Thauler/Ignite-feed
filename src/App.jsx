import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

function App() {

  return (
  <div>
    <Header headerText="Ignite Feed"/>
    <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Post 
          author="Ignite Team" 
          content="Welcome to the Ignite Feed! This is a simple social media feed built with React." />
        <Post
          author="Ignite Team"
          content="This is a simple social media feed built with React." />
      </main>
    </div>
  </div>
  )
}

export default App
