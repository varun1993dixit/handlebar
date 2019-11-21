
fetch(`https://raw.githubusercontent.com/mustkem/angulardemo1/master/data.json`)
    .then((res) => { return res.json() })
    .then((data) => {
        console.log(data)
        var characterTemplate = document.getElementById("character-template").innerHTML;
        var compliled = Handlebars.compile(characterTemplate)   
        document.getElementById("x").innerHTML = compliled(data)
    });