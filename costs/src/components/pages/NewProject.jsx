import { useNavigate } from 'react-router-dom';

import styles from './NewProject.module.css'
import ProjectForm from '../projects/ProjectForm'

function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

            fetch('http://localhost:8000/projects' , {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(project)
            })
              .then((resp) => resp.json())
              .then((data) => {
                const state = { message: 'Projeto criado com sucesso!' }
                navigate('/Projects', {state})
              })
              .catch((err) => console.log(err));
            }

    return(
        <section className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"></ProjectForm>

        </section>
    )
}

export default NewProject