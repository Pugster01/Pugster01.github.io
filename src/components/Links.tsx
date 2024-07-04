import githubUrl from '../assets/tech-icons/github-mark-white.svg'
import mailUrl from '../assets/tech-icons/mail-icon.png'

function Links() {
    return (
        <div className="w-full h-20 bg-black/60 flex flex-row justify-center items-center gap-4">
            <a href="https://github.com/Pugster01"><img className='h-9' src={githubUrl}></img></a>
            <a href='mailto:rubpuga@gmail.com'><img className='h-9' src={mailUrl}></img></a>
        </div>
    )
}

export default Links