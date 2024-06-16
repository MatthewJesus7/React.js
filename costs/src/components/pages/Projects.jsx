import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import Message from "../layout/Message"
import ProjectCard from '../projects/ProjectCard'

import styles from './Projects.module.css'

function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/NewProject" text="Criar Projeto" />
            </div>
            {message && <Message type="sucess" msg={message}></Message>}

            <Container customClass="Start">
                <p>projetos</p>
            </Container>
        </div>
    )
}

export default Projects