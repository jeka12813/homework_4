
function Navi({setPost,data,setselecedSort}){
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
      
    
   return(
    <div className="parameters">
    <div onClick={(e)=>sortPost("id")} >№</div>
     <div onClick={(e)=>sortPost("name")}>name</div>
     <div onClick={(e)=>sortPost("username")}>userName(Nik)</div>
     <div onClick={(e)=>sortPost("email")}>email</div>
     <div onClick={(e)=>sortPost("city")}>adress</div>
    </div>

    )






    
    
    

}
export {Navi}
