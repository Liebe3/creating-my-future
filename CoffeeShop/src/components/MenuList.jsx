import React from 'react' 
Import {FaShoppingCart} from 'react-icons/fa-shopping-cart'

const MenuList = (props) => {
    return (

        <div>
            <div>
                <img src={props.img} alt="img"/>
            </div>
            <div>
                <div>
                    <h3> {props.title} </h3>
                    <h3> {props.value} </h3>
                </div>
                <div>
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
