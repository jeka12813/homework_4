import { useState} from "react"
import React from "react"
import  "./form.css"


 function Form({setData}){
    
  let[email,setEmail]=useState("")
  let[paswword,setPaswword]=useState("")
  let[name,setName]=useState("")
  let[tr,setTr]=useState(false)
  let[trr,setTrr]=useState(false)
  let[classEmail,setclassEmail]=useState("")
  let[classPaswword,setclassPaswword]=useState("")
  

  function onChangekEmail(event){
  setEmail(event.target.value)
  let pattern = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  if (pattern.test(event.target.value)){
    setTr(true)
    setclassEmail("ok")
  }else{
    setTr(false)
    setclassEmail("error")
  }                 
  }
  function onChangekName(event){
    setName(event.target.value)

  }

  function onChangePaswword(event){
  if(event.target.value.length<9){
    setPaswword(event.target.value)
    let patternn = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/i
    if(patternn.test(event.target.value)){
      setTrr(true)
      setPaswword(event.target.value)
      setclassPaswword("ok")
    }else{
      setTrr(false)
      setclassPaswword("error")}
    }
  }

  
      
  function rede(event){
  event.preventDefault()
    if(tr&&trr){
      let obj={
        email:email,
          id:Date.now(), 
          email:email,
          name:name,
          
    }
    console.log(obj)
      setData(obj)
      setPaswword("") 
      setEmail("")
      setTrr(false)
      setTrr(false)
  }}
      
       
  return(
    <div>
      <div >
        <form>
            <div>
              <input onChange={onChangekName} className={classEmail} value={name}  type="text" placeholder="введите name "/>
            </div>
            <div>
              <input onChange={onChangekEmail} className={classEmail} value={email}  type="text" placeholder="введите email "/>
            </div>
            <div>
              <input onChange={onChangePaswword} className={classPaswword}  value={paswword} type="text" placeholder="введите paswword "/>
            </div>
          <button type="submit" onClick={rede} >Отправить</button>
          
          
        </form>
                   
      </div>  
    </div>
  )
      
  }
  
 
  
export {Form}


