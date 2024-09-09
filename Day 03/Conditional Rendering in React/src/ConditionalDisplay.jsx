import react, {useState} from 'react';

function ConditionalDisplay() {
    const [isVisible, setisVisible] = useState(true)
    
    return (
        <div>
            <button onClick={()=> setisVisible(!isVisible)}>{isVisible ? 'Hide' : 'show'} Message</button>
            {isVisible && <p>This is a Conditional Message</p>}
        </div>
    )
}

export default ConditionalDisplay