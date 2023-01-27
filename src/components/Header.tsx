// import 'src/css/header.css'
import '../css/header.css'

// export function Header(){
//     return(
//         <header><h2>Ice Cream Wars</h2></header>
//     )
// }
interface Prop {
    user:string;
}

function Header({user}: Prop){
    return (
        <div className = "Header">
            <header>
                <h2>Ice Cream Wars</h2>
                <span>Welcome:{user}</span>
            </header>

        </div>
    )
}

export default Header