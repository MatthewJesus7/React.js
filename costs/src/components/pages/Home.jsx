import styles from './Home.module.css'
import { PiPiggyBankThin } from 'react-icons/pi'

function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo</p>
            <a href="/">Criar Prjeto</a>
            <PiPiggyBankThin className={styles.piggy}></PiPiggyBankThin>
        </section>
    )
}

export default Home