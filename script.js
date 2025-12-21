document.addEventListener("DOMContentLoaded",()=>{
    const words = [
        "The one and only!", 
        "The Official Website", 
        "Wasuuuuuuup!",
        "Still a potato!",
        "i need a raise",
        "Segmentation Fault (Core Dumped)",
        "Website v2",
        "Wow.... that's a LOT of CSS!",
        "Welcome, [object Object]!",
        "Spaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaace",
        "BETTER than GOOOOOGLE!",
        "GIF or JIF?",
        "Charlie was here.... duh!",
        "Made in the big '25",
        "Node.JS RUINS LIVES!",
        "^ Smarty Pants ^",
        "Padding vs. Margin",
        "Does whatever a spider can.."
    ]
    document.getElementById("undertitle").textContent = words[Math.floor(Math.random() * words.length)];
})

document.addEventListener("DOMContentLoaded",()=>{
    const words = [
        "Uh Oh!",
        "Aww Shucks!",
        "Snap!",
        "Woops!",
        "Nooooo!",
        "Geepers!",
        "Good golly!",
        "Oooof!",
        "Oopsies!",
        "Oh Dear..",
        "Game Over!",
        ":(",
        "D:",
        ":O",
        "😥",
        "(╯°□°)╯︵ ┻━┻",
        "( ͡° ʖ̯ ͡°)",
        "¯\\_(⊙_ʖ⊙)_/¯"
    ]
    try {
        document.getElementById("sad").textContent = words[Math.floor(Math.random() * words.length)];
    } catch (error) {
        console.log(error);
    }
})