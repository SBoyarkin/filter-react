export function ProjectList({projects}) {
    console.log(projects)
    const items = projects.map((item) =>  <img class="project" src={item.img}></img>
    )
    return(
        <>

            {items}
        </>
    )

}