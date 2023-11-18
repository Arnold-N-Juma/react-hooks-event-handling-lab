// Code Keypad Component Here

function Keypad (){
    function fired(){
        return console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" placeholder="Enter your Password" onChange={fired}/>
        </div>
    )
}

export default Keypad;