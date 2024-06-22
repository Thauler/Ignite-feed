import styles from './Post.module.css';

export function Post(props) {
  return (
  <article className={styles.post}>
    <header>
      <div
        className={styles.author}
      >
        <img
          className={styles.avatar}
          src="https://github.com/Thauler.png"
          alt="Author"/>
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.authorInfo}</span>
          </div>
      </div>

      <time title='data exata' dateTime={Date.now()} className={styles.postDate}>Publicado há 1h</time>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 jane.design/doctorcare</p>
        <p>#novoprojeto #nlw #rocketseat</p>
      </div>
    </header>
  </article>
)
}