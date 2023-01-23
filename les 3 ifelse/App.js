class App
{
    runApplication()
    {
        console.log("Hello world!");
        //code hier
        let title = document.getElementById("newstitle");
        let randomGetal = Math.random();
        console.log(title)
        console.log(randomGetal)
        if (randomGetal == 0)
        {
            title.style.backgroundColor = "96D66A"
        }
        else if (randomGetal < 0.2)
        {
            title.style.backgroundColor = "AA6AD6"
        }
        else if (randomGetal > 0.2, and, randomGetal < 6)
        {
            title.style.backgroundColor = "D66AAB"
        }
        else
        {
            title.style.backgroundColor = "1BB4E5"
        }
    }
}
let app = new App();
app.runApplication(); 