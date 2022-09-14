import './Graidentbutton.css'

const Index = (props) =>{
    const doNothing=()=>{}// it will do nothing just an empty function
    return <button className={'gradient-btn'} onClick={props?.onClick ? props?.onClick : doNothing}>{props.buttonText}</button>
    //in the return checking the onclick property from props if we got onclick from props then we will run onClick and 
    // if not it will do nothing
}

export default Index