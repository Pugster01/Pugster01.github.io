import angularUrl from '../assets/tech-icons/Angular.svg';
import firebaseUrl from '../assets/tech-icons/Firebase.svg';
import nodeUrl from '../assets/tech-icons/Node.js.svg';
import typescriptUrl from '../assets/tech-icons/TypeScript.svg';
import cSharpUrl from '../assets/tech-icons/CSharp.svg';
import cppUrl from '../assets/tech-icons/C++ (CPlusPlus).svg';
import reactUrl from '../assets/tech-icons/React.svg';
import rubyUrl from '../assets/tech-icons/Ruby.svg';
import sqliteUrl from '../assets/tech-icons/SQLite.svg';
import viteUrl from '../assets/tech-icons/Vite.js.svg';
import htmlUrl from '../assets/tech-icons/HTML5.svg';
import cssUrl from '../assets/tech-icons/CSS3.svg';

function Skills() {
    return (
        <div className='skills-bar flex flex-row flex-wrap gap-8 mb-12 justify-center'>
            <div>
                <img className='size-20' src={angularUrl}></img>
                Angular
            </div>
            <div>
                <img className='size-20' src={reactUrl}></img>
                React
            </div>
            <div>
                <img className='size-20' src={firebaseUrl}></img>
                Firebase
            </div>
            <div>
                <img className='size-20' src={nodeUrl}></img>
                NodeJS
            </div>
            <div>
                <img className='size-20' src={viteUrl}></img>
                Vite
            </div>
            <div>
                <img className='size-20' src={typescriptUrl}></img>
                TypeScript
            </div>
            <div>
                <img className='size-20' src={htmlUrl}></img>
                HTML
            </div>
            <div>
                <img className='size-20' src={cssUrl}></img>
                CSS
            </div>
            <div>
                <img className='size-20' src={cppUrl}></img>
                C++
            </div>
            <div>
                <img className='size-20' src={cSharpUrl}></img>
                C#
            </div>
            <div>
                <img className='size-20' src={rubyUrl}></img>
                Ruby
            </div>
            <div>
                <img className='size-20' src={sqliteUrl}></img>
                Sqlite
            </div>
        </div>
    )
}

export default Skills;