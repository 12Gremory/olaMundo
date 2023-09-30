import styles from './banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

function Banner () {
    return (
        <div className={styles.banner}>
            <div className={styles.apresetacao}>
                <h1 className={styles.titulo}>
                    Olá mundo
                </h1>
                <p className={styles.paragrafo}>
                    Bem vindo! Eu me chamo Thomas e estou me tornando um Desenvolvedor Front-end. 
                    Venha me conhecer mais e acompanhar minha evolução!
                </p>
            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=''
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Minha foto'
                />
            </div>
        </div>
    )
}

export default Banner