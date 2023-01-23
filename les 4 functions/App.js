class App
{
    Mario()
    {
        console.log("MARIO!!");
    }
    
    Bwahahaha()
    {
        console.log("BWAHAHA!!!");
        return;
    }
    
    optellen(x,y)
    {
        console.log(x,y)
        x = 2
        y = 120
        let answer = x+y;
        console.log(answer)
        return;
        
    }

    runApplication()
    {
        this.Mario();
        this.Bwahahaha();
        this.optellen();
    }
}
let app = new App();
app.runApplication(); 