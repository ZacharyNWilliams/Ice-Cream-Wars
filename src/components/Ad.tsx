


// export function Ad(props:AdProperties){
//     let className = "Ad " + (props.isLight ? "Ad--light" : "Ad--dark");
 
//     return (
//        <div className={className}>
//         <p>Vote for:</p>
//         <p style = {{fontSize: props.fontSize}}>{props.flavor}</p>
//        </div>
//     )
// }

import '../css/Ad.css'

interface AdProperties{
    flavor:string,
    fontSize:number
    darkTheme:boolean
}



export function Ad(props:AdProperties){
    // let className = "Ad " + (props.isLight ? "Ad--light" : "Ad--dark");
 
    return (
        <div>
       <div /*className*/>
        <p>Vote For</p>
        <p style = {{fontSize: props.fontSize}}>{props.flavor}</p>
       </div>
</div>
    )
    
}