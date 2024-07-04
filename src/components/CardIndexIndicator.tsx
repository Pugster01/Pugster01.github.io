function CardIndexIndicator({index, lenght, dotClick} : {index: number, lenght: number, dotClick: (index: number) => void}) {
    index; lenght;
    const dots = [];

    for(let i = 0; i < lenght; i++) {
        dots.push((<button key={i} onClick={() => {dotClick(i)}} className={"dot h-2 p-1 rounded transition-colors " + (i == index ? "bg-white/80":"bg-white/20")}></button>))
    }

    return (
        <div className="index-indicator flex flex-row h-4 absolute bottom-3 bg-white/15 p-1 gap-1 rounded-lg opacity-20 hover:opacity-100 transition-opacity">
            {dots}
        </div>
    )
}

export default CardIndexIndicator