import ProjectCard from './ProjectCard';

import ticketPageUrl from '../assets/projects/tickets.png';
import ticketConsoleUlr from '../assets/projects/scale-console.png'
import contractsUrl from '../assets/projects/contracts.png'
import directoryUrl from '../assets/projects/directory.png'
import inventoryUrl from '../assets/projects/inventory.png'

import angularUrl from '../assets/tech-icons/Angular.svg';
import firebaseUrl from '../assets/tech-icons/Firebase.svg';
import nodeUrl from '../assets/tech-icons/Node.js.svg';
import typescriptUrl from '../assets/tech-icons/TypeScript.svg';
import cSharpUrl from '../assets/tech-icons/CSharp.svg';
import sqliteUrl from '../assets/tech-icons/SQLite.svg';

const projects = [{
    title: "Grain Elevator Management System",
    images: [
        ticketPageUrl,
        contractsUrl,
        directoryUrl,
        inventoryUrl
    ],
    text: [
        "Developed a robust Grain Elevator Management System designed to streamline and automate critical operations. This all-in-one solution offers extensive functionality to efficiently manage contracts, generate tickets, track payments, apply discounts, create invoices, and maintain detailed client records.",
        "The Contracts Management Page is a pivotal component of the Grain Elevator Management System, designed to enhance user efficiency and accuracy. This feature-rich page allows users to create contracts linked to specific products and clients, track grain deliveries, automatically close fulfilled contracts, and manage invoicing and payments seamlessly.",
        "The Directory Page is an essential feature of the Grain Elevator Management System, providing a centralized hub for managing client and partner accounts. This dynamic page enables the creation of accounts for clients, logistics partners, and other contacts, with the ability to tag and filter contacts by type or custom attributes. Additionally, personalized pages for each contact offer a comprehensive view of related contracts, tickets, and attached documents.",
        "The Inventory Management Page is a vital component of the Grain Elevator Management System, offering real-time visibility into product quantities across all warehouses. This intuitive page enables users to efficiently monitor current inventory levels, track incoming and outgoing shipments, and manage sales in relation to existing contracts.",
    ],
    techStack: [
        angularUrl,
        firebaseUrl,
        nodeUrl,
        typescriptUrl
    ],
    reverse: false,
    length: 4
},
{
    title: "Ticket Console Integration for Grain Elevator Management",
    images: [
        ticketConsoleUlr
    ],
    text: [
        "Created an advanced ticket console application that seamlessly integrates with the Grain Elevator Management System. This tool enhances operational efficiency by automating the download of contracts and contacts, ensuring that ticketing processes are accurately linked to active contracts within the company."
    ],
    techStack: [
        cSharpUrl,
        sqliteUrl,
        firebaseUrl
    ],
    reverse: true,
    length: 1

}];

function Portfolio() {
    const mappedCards = projects.map((project, index) => <ProjectCard {...project} key={index}></ProjectCard>)

    return (
        <>
            <h1 className='text-7xl mb-10 font-bold'>Projects</h1>
            {mappedCards}
        </>
    )
}

export default Portfolio