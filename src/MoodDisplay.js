import React from "react"; 

function MoodDisplay({ mood }){

    const moods ={
        Happy: "Keep Smiling! 😊",
        Sad: "It's okay to be sad somtimes 😒",
        excited: "Let's Celebrate! 🤩",
        Angry: "Tack a deep breath 😡",
    };
    return ( <div>{console.log(moods[mood])}
    {mood ?<p>{moods[mood]}</p> : <p>Select your mood above</p>}
    </div>
     );
}
export default MoodDisplay;