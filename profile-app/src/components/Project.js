import React from 'react'

const Project = ({ project }) => {
	return (
		<div className="card">
			<h3>{project.title}</h3>
			<img src={project.image} alt={project.title} />
			<a href={project.deployedUrl}>Project</a>
			<a href={project.githubUrl}>Github Repo</a>
			<p>{project.description}</p>
		</div>
	)
}

export default Project