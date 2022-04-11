import React from 'react'
import { useState } from 'react'

export  function Checkbox({item, showChekedEmail}) {
    
    const [checked, setChecked] = useState(false);
    const [name, setEmail] =useState ('Выбран name :' + item.name)
    
  
    const changeCheckbox =()=>{    
      setChecked(!checked);
      showMessage()
      
    }
  
    const showMessage=()=>{
      if(checked){          
        setEmail('Выбран name :' + item.name)
        
      }else{
        setEmail('')
      }
      showChekedEmail(name)
    }
    
    return (
        <div key={item.id}>
                <input type="checkbox" id={item.id} checked={checked} onChange={changeCheckbox} />        
        </div>  
    )
}