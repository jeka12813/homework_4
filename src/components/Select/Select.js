import React from "react";
function Select({options,defaultValue,value,sortPost}){
    return(
        <div>
            <select value={value} onChange={(e)=>sortPost(e.target.value)}>
                <option disabled value="value" >{defaultValue}</option>
                {options.map(option=>
                    <option key={option.value}
                     value={option.value}>{option.name}</option>)}
            </select>

        </div>
    )
}
export {Select}