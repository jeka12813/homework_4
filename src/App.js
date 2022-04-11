import axios from "axios"
import {useState,useEffect, useMemo} from "react"

import {Select} from "./components/Select/Select"
import {Form} from "./components/form/form"
import{Modal} from "./components/Modal/Modal"
import {Checkbox} from "./components/Checkbox/Checkbox"
import {MyInput} from "./components/input/input"
import {Navi} from "./components/Navi/Navi"

import './App.css';

function App() {
  const [data, setPost] =useState([])
  const[selecedSort,setselecedSort]=useState("")
  const [isModalActive, setIsModalActive] =useState(false)
  let [checkedEmail, setCheckedEmail]=useState("")
  let [sort, mySort]=useState("")


  useEffect(()=>{
    fetchData()
    },[])


  async function fetchData(){
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response)
    setPost(response.data)
  }

  let booook=useMemo(()=>{
    let otSor=data.filter(item=>item.name.toLowerCase().includes(sort))
    return otSor

  },[data,sort])
  
 
  function deletePost(event){
    let {target}=event
    const result = data.filter(item =>{ 
      return target.id!=item.id})
     
    setPost(result)
  }
  function addPost(post){
    setPost([...data,post])   
    setIsModalActive(false)
  }


  const showChekedEmail=(content)=>{  
    setCheckedEmail(content)  
  }


  let box=booook.map((item)=>(
    <div className="parameters" key={item.email}>
      <button  id ={item.id} type="submit"  onClick={deletePost}>удалить</button>
      <Checkbox item={item} showChekedEmail={showChekedEmail}/>  
      <div>{item.id}</div>
      <div>{item.name}</div>
      <div>{item.username}</div>
      <div>{item.email}</div>
     </div>
  )
)

  
function sortPost(sortValue){
  console.log(sortValue)
    setselecedSort(sortValue)
    if(sortValue=="city"){
      let newPosts=[...data].sort((a,b)=>a.address[sortValue].localeCompare([sortValue]))
      setPost(newPosts)

    }else{
      let newPosts=[...data].sort((a,b)=>a[sortValue].localeCompare([sortValue]))
      setPost(newPosts)
    }
  }


  return (
    <div className="App" >
      <button onClick={()=>setIsModalActive(true)}>Create Post</button> 
      <MyInput value={sort} placeholder="сортировка" onChange={(e)=>mySort(e.target.value)}></MyInput>
        
      <Modal visible={isModalActive} setVisible={setIsModalActive}> 
        <Form setData={addPost} deletePost={deletePost} data={data}/>   
       </Modal>
       <Select defaultValue="сортировка по" 
       options={[
         {value:"name",name:"по названию"},
         {value:"email",name:"по описанию"}
         ]}
         value={selecedSort}
         sortPost={sortPost} 
         />
          <div className="parameters">
    <div onClick={(e)=>sortPost("id")} >№</div>
     <div onClick={(e)=>sortPost("name")}>name</div>
     <div onClick={(e)=>sortPost("username")}>userName(Nik)</div>
     <div onClick={(e)=>sortPost("email")}>email</div>
     <div onClick={(e)=>sortPost("city")}>adress</div>
    </div>
         {/* <Navi setPost={setPost} data={data} setselecedSort={setselecedSort}></Navi> */}
        
         
      
      <div>{box}</div>
      <div>{checkedEmail}</div>
    </div>
  );
}

export default App;
