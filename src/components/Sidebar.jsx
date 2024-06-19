import styles from './Sidebar.module.css';

import { PencilLine } from '@phosphor-icons/react';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img 
        className={styles.cover}
        src='https://images.unsplash.com/photo-1558724040-9de64afade55?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar} 
          src='https://avatars.githubusercontent.com/u/75540343?v=4'
          />
        <strong>Ignite Team</strong>
        <span>React Developers</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </div>
  );
}