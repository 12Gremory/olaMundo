import PostCard from "componentes/PostCard"
import styles from "./Sugestao.module.css"
import posts from "./posts.json"

function Sugestao () {
    return (
        <div>
            <h1 className={styles.titulo}>
                Outros posts que você pode gostar:
            </h1>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Sugestao