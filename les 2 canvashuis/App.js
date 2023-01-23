class App
{
    
    Kerst()
    {
        
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);

        //stam
        g.beginPath();
        g.fillStyle = "saddlebrown";
        g.moveTo(420,600);
        g.lineTo(420,500);
        g.lineTo(460,500);
        g.lineTo(460,600);
        g.closePath();
        g.stroke();
        g.fill();
        //kerstboom
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(350,540);
        g.lineTo(350,540);
        g.lineTo(525,540);
        g.lineTo(450,400);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(350,485);
        g.lineTo(400,485);
        g.lineTo(525,485);
        g.lineTo(450,350);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(370,430);
        g.lineTo(370,430);
        g.lineTo(510,430);
        g.lineTo(450,320);
        g.closePath();
        g.stroke();
        g.fill();

    

    }
    tekenhuis()
    {

        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);
        let randomGetal = Math.random();
        console.log(randomGetal)
        
        g.beginPath();
        g.fillStyle = "tomato"
        g.moveTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "lightgrey"
        g.moveTo(600,600);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "darkgrey";
        g.moveTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.lineTo(600,600);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "grey";
        g.moveTo(600,400);
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "saddlebrown"
        g.moveTo(325,532);
        g.lineTo(400,550);
        g.lineTo(400,418);
        g.lineTo(325,400);
        g.lineTo(325,532);
        g.closePath();
        g.stroke();
        g.fill();

        //deurknop
        g.beginPath();
        g.fillStyle = "black";
        g.moveTo(390,485);
        g.arc(390,485,5,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();


        //raam
        g.beginPath();
        if (randomGetal == 0)
        {
            g.fillStyle = "green"
        }
        else if (randomGetal < 0.1)
        {
            g.fillStyle = "lightgreen"
        }
        else if( randomGetal > 0.2 , randomGetal < 0.6)
        {
            g.fillStyle = "teal"
        }
        else
        {
            g.fillStyle = "Darkolivegreen"
        }
        g.moveTo(498,518);
        g.lineTo(425,500);
        g.lineTo(425,432);
        g.lineTo(500,450);
        g.lineTo(498,518);
        g.closePath();
        g.stroke();
        g.fill();
        
        console.log(canvas)
        
        
    }
    runApplication()
    {
        this.Kerst();
    }
}
let app = new App();
app.runApplication(); 