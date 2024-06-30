import ProjectCard from './ProjectCard'

const projects = [{
    title: "Grain Elevator Management System",
    images: [
        "src/assets/projects/tickets.png"
    ],
    text: [
        "A management system for a grain elevator to keep track of contracts, create tickets, track payments, discounts, invoices, and clients"
    ],
    techStack: [
        "src/assets/tech-icons/Angular.svg",
        "src/assets/tech-icons/Ionic.svg",
        "src/assets/tech-icons/Firebase.svg",
        "src/assets/tech-icons/Node.js.svg",
        "src/assets/tech-icons/TypeScript.svg"
    ],
    reverse: false,
    length: 0
}];

function Portfolio() {
    const mappedCards = projects.map((project, index) => <ProjectCard {...project} key={index}></ProjectCard>)

    return (
        <>
            <h1>Projects</h1>
            {mappedCards}
        </>
    )
}

export default Portfolio