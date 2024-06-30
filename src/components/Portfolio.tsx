import ProjectCard from './ProjectCard';
import ticketPageUrl from '../assets/projects/tickets.png';
import angularUrl from '../assets/tech-icons/Angular.svg';
import ionicUrl from '../assets/tech-icons/Ionic.svg';
import firebaseUrl from '../assets/tech-icons/Firebase.svg';
import nodeUrl from '../assets/tech-icons/Node.js.svg';
import typescriptUrl from '../assets/tech-icons/TypeScript.svg';

const projects = [{
    title: "Grain Elevator Management System",
    images: [
        ticketPageUrl
    ],
    text: [
        "A management system for a grain elevator to keep track of contracts, create tickets, track payments, discounts, invoices, and clients"
    ],
    techStack: [
        angularUrl,
        ionicUrl,
        firebaseUrl,
        nodeUrl,
        typescriptUrl
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