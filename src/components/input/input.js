
const MyInput=({...props})=>{
    console.log(props)

    return(
        <input {...props}  />                  
    )
  
}
export { MyInput }