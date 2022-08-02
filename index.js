document.getElementById("getColor-Btn").addEventListener("click", schemeSelector);

function schemeSelector ()
{
    const tree = document.getElementById("gaynator").value.replace("#", "");
    const flower = document.getElementById("generator").value;

    console.log(tree);
    console.log(flower);

    const end = `hex=${tree}&format=JSON&mode=${flower}&count=5`;
    
    getColorScheme(end);
};


function getColorScheme (end)
{
    console.log("https://www.thecolorapi.com/scheme?" + end);

    fetch("https://www.thecolorapi.com/scheme?" + end)
        .then (response => response.json())
        .then (data => 
        {
            
            let temp = data
            console.log(temp.colors[2].hex.value);
            for (x = 0; x < temp.colors.length; x++)
            {
                document.getElementById("addHere").innerhtml += 
                `<div style="background-color: ${temp.colors[x].hex.value}">
                <p> LOL THIS WAS ADDED </p>
                </div>`
            };
        }
    )
};



