import { useMemo, useState } from "react";

interface ProjectCardProps {
    reverse: boolean;
    images: string[];
    text: string[];
    techStack: string[];
    title: string;
    length: number;
}

function ProjectCard(props: ProjectCardProps ) {
    const [index] = useState(0)   

    const mappedTech = useMemo(() => props.techStack.map((t, index) => <img src={t} key={index} className="size-10"></img>), [])

    return (
        <div className={"project-card p-10 rounded-xl flex gap-10 " + (props.reverse ? "flex-row-reverse" : "flex-row")}>
            <img src={props.images[index]} className="h-96 rounded-lg"></img>
            <div className="content-center flex flex-col justify-around">
                <div>
                    <h1 className="text-2xl font-bold mb-2">{props.title}</h1>
                    <p>{props.text[index]}</p>
                </div>
                <div className="flex justify-end gap-3">
                    {mappedTech}
                </div>
            </div>
        </div>
        
    )
}

export default ProjectCard;