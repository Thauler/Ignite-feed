import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';

export function Comment(props) {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/Thauler.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{props.author}</strong>
              <time title='data exata' dateTime={Date.now()}>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar Comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom!!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}