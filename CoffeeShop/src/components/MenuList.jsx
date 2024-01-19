import React from 'react' 
import { FaShoppingCart } from "react-icons/fa";

const MenuList = (props) => {
    return (

        <div className=" w-full lg:w-1/4 bg-white p-3 rounded-lg">
        <div>
          <img className=" rounded-xl" src={props.img} alt="img1" />
        </div>
        <div className=" p-2 mt-5">
          <div className=" flex flex-row justify-between">
            <h3 className=" font-semibold text-xl">{props.title}</h3>
            <h3 className=" font-semibold text-xl">{props.value}</h3>
          </div>
                    
                    <div>
                        <button>Cold</button>
                        <button>Hot</button>
                    </div>
                <span>
                    <FaShoppingCart size={20}/>
                </span>
                
                
         
        
                </div>
            </div>
            
        
            
    
        </div>
    )
    }
