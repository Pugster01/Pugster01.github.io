import { useEffect, useMemo, useRef, useState } from "react";

interface ProjectCardProps {
    reverse: boolean;
    images: string[];
    text: string[];
    techStack: string[];
    title: string;
    length: number;
}

function ProjectCard(props: ProjectCardProps) {
    const [index, setIndex] = useState(0);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const containerRef = useRef(null)

    const mappedTech = useMemo(() => props.techStack.map((t, index) => <img src={t} key={index} className="size-10"></img>), [])

    // Effect for animation
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
            if(entry.isIntersecting) observer.disconnect();
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        });
        if(containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [containerRef])
    

    return (
        <div 
            className={"project-card p-10 rounded-xl flex gap-10 flex-wrap justify-center mb-10 " 
                + (props.reverse ? "flex-row-reverse " : "flex-row ") 
                + (isIntersecting ? "animate-card" : "")}
            ref={containerRef}>
            <img src={props.images[index]} className="h-80 rounded-lg object-cover"></img>
            <div className="content-center flex flex-col flex-auto w-64 justify-around gap-4">
                <div>
                    <h1 className="text-2xl font-bold mb-2">{props.title}</h1>
                    <p>{props.text[index]}</p>
                </div>
                <div className="flex justify-end gap-3 flex-wrap">
                    {mappedTech}
                </div>
            </div>
            {props.length > 1? (
                <>
                    <button onClick={() => {setIndex((((index - 1) % props.length) + props.length) % props.length); console.log(index)}} className="arrow left"></button>
                    <button onClick={() => {setIndex((((index + 1) % props.length) + props.length) % props.length); console.log(index)}} className="arrow right"></button>
                </>
            ) : null}
        </div>
    )
}

export default ProjectCard;