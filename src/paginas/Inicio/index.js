import Banner from "Componentes/Banner"
import styles from "./inicio.module.css"
import posts from "json/posts.json"
import Post from "Componentes/Post"

function Inicio () {
    return (
        <main>
            <Banner/>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Inicio