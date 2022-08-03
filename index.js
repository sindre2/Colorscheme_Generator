/* --- Constants and variables section --- */

const hexOne = document.getElementById("hex-1");
const hexTwo = document.getElementById("hex-2");
const hexThree = document.getElementById("hex-3");
const hexFour = document.getElementById("hex-4");
const hexFive = document.getElementById("hex-5");

const banan = document.querySelector("main");
const eple = document.querySelector("footer");

let colors = false;

/* --- END --- */

document.getElementById("getColor-Btn").addEventListener("click", decider);


/* --- Function for clearing out existing color schemes and adding new schemes --- */

function decider()
{
    if (colors)
    {
    banan.innerHTML = "";
    eple.innerHTML = "";
    schemeSelector();
    } else
    {
        schemeSelector();
    }
}

/* --- END --- */

/* --- Selecting the newly generated schemes --- */

function schemeSelector ()
{
    const tree = document.getElementById("getThis").value.replace("#", "");
    const flower = document.getElementById("generator").value;


    const end = `hex=${tree}&format=JSON&mode=${flower}&count=5`;
    
    getColorScheme(end);
};

/* --- END --- */

/* --- Fetch function for new schemes --- */

function getColorScheme (end)
{

    fetch("https://www.thecolorapi.com/scheme?" + end)
        .then (response => response.json())
        .then (data => 
        {
            
            let temp = data;

            for (let x = 0; x < temp.colors.length; x++)
            {
                banan.innerHTML += 
                `<div class="col" style="background-color: ${temp.colors[x].hex.value}">
                </div>`;

                document.getElementById("hex-" + x).textContent +=  `${temp.colors[x].hex.value}`;
                 
            };

            return colors = true, copy = true;
        }
    )
};

/* --- END --- */



// short.addEventListener("click", function()
// {

// })

hexOne.addEventListener("click", function()
    {
        navigator.clipboard.writeText(hexOne.textContent);
        alert("Copied the text: " + hexOne.textContent);
    });

hexTwo.addEventListener("click", function()
    {
        navigator.clipboard.writeText(hexTwo.textContent);
        alert("Copied the text: " + hexTwo.textContent);
    });

hexThree.addEventListener("click", function()
    {
        navigator.clipboard.writeText(hexThree.textContent);
        alert("Copied the text: " + hexThree.textContent);
    });

hexFour.addEventListener("click", function()
    {
        navigator.clipboard.writeText(hexFour.textContent);
        alert("Copied the text: " + hexFour.textContent);
    });

hexFive.addEventListener("click", function()
    {
        navigator.clipboard.writeText(hexFive.textContent);
        alert("Copied the text: " + hexFive.textContent);
    });

