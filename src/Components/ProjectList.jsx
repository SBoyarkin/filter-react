export function ProjectList({ projects, filter }) {
    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);
    console.log(filteredProjects)
    return (
        <div className="project-list">
            {filteredProjects.map(project => (
                <img src={project.img} alt={project.category} class='project'/>
            ))}
        </div>
    );
}