/* --- Constants and variables section --- */

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

                document.getElementById("hex-" + x).textContent =  `${temp.colors[x].hex.value}`;
                 
            };

            return colors = true, copy = true;
        }
    )
};

/* --- END --- */

document.querySelectorAll('.hexCode').forEach(item => {
    item.addEventListener('click', event => 
    {
        navigator.clipboard.writeText(item.textContent);
        alert("Copied the text: " + item.textContent);
    })});
