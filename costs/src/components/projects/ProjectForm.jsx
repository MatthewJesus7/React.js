import React, { useState, useEffect } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btnText,  projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:8000/categories' , {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data); // assuming your JSON structure has an object with key 'categories'
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e) {
    setProject({ ...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
    } })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input 
      text="Nome do projeto:" 
      type="text" 
      name="name"
      placeholder="Insira o nome do projeto"
      handleOnChange={handleChange}
      value={project.name ? project.name : ''}
    //   Problema aqui
      />

      <Input 
      text="Orçamento do projeto:" 
      type="number"
      name="budget"
      placeholder="Insira o orçamento total"
      handleOnChange={handleChange}
      value={project.budget ? project.budget : ''}
    //   Problema aqui
      />

      <Select 
      text="Selecione a Categoria:" 
      name="category_id" 
      options={categories}
      handleOnChange={handleCategory}
      value={project.category ? project.category.id : ''}
      />

      <SubmitButton 
      text={btnText} />
    </form>
  );
}

export default ProjectForm;
