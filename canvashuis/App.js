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
        g.moveTo(415,600);
        g.lineTo(415,500);
        g.lineTo(485,500);
        g.lineTo(485,600);
        g.closePath();
        g.stroke();
        g.fill();
        //kerstboom
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(300,500);
        g.lineTo(400,500);
        g.lineTo(600,500);
        g.lineTo(450,300);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(325,425);
        g.lineTo(400,425);
        g.lineTo(575,425);
        g.lineTo(450,250);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(350,350);
        g.lineTo(350,350);
        g.lineTo(550,350);
        g.lineTo(450,200);
        g.closePath();
        g.stroke();
        g.fill();

        //ball 1
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(400,400);
        g.arc(400,400,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //slinger
        g.beginPath();
        g.fillStyle = "pink";
        g.moveTo(300,500)
        g.lineTo(557,400)
        g.lineTo(552,392)
        g.lineTo(312,485)
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath();
        g.fillStyle = "pink";
        g.moveTo(543,380);
        g.lineTo(377,310);
        g.lineTo(370,320);
        g.lineTo(552,392)
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "pink";
        g.moveTo(377,310);
        g.lineTo(500,275);
        g.lineTo(493,265);
        g.lineTo(387,295);
        g.closePath();
        g.stroke();
        g.fill();



        
        //ball 2
        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(500,325);
        g.arc(500,325,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 3
        g.beginPath();
        g.fillStyle = "gold";
        g.moveTo(490,465);
        g.arc(490,465,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 4
        g.beginPath();
        g.fillStyle = "silver";
        g.moveTo(425,300);
        g.arc(425,300,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 5
        g.beginPath();
        g.fillStyle = "purple";
        g.moveTo(475,390);
        g.arc(475,390,20,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ster
        g.beginPath();
        g.fillStyle = "gold";
        g.moveTo(425,198);
        g.lineTo(405,220);
        g.lineTo(435,215);
        g.lineTo(450,245);
        g.lineTo(465,215);
        g.lineTo(495,220);
        g.lineTo(475,198);
        g.lineTo(495,172);
        g.lineTo(462,182);
        g.lineTo(450,145);
        g.lineTo(438,182)
        g.lineTo(405,172)
        g.closePath();
        g.stroke();
        g.fill();

        //ball 6
        g.beginPath();
        g.fillStyle = "purple";
        g.moveTo(460,255);
        g.arc(460,255,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 7
        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(420,480);
        g.arc(420,480,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 8
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(560,480);
        g.arc(560,480,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 9
        g.beginPath();
        g.fillStyle = "silver";
        g.moveTo(370,440);
        g.arc(370,440,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 10
        g.beginPath();
        g.fillStyle = "gold";
        g.moveTo(440,365);
        g.arc(440,365,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 11
        g.beginPath();
        g.fillStyle = "fuchsia";
        g.moveTo(465,300);
        g.arc(465,300,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 12
        g.beginPath();
        g.fillStyle = "aqua";
        g.moveTo(360,400);
        g.arc(360,400,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 13
        g.beginPath();
        g.fillStyle = "honeydew";
        g.moveTo(445,410);
        g.arc(445,410,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        //ball 14
        g.beginPath();
        g.fillStyle = "lightseagreen";
        g.moveTo(525,440);
        g.arc(525,440,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

    }
    tekenhuis()
    {

        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        document.getElementById("canvasId");
        console.log(g);
        
        g.beginPath();
        g.fillStyle = "red"
        g.moveTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();
        g.beginPath();
        g.fillStyle = "white"
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
        console.log(canvas);


        
    }
    runApplication()
    {
        this.Kerst()
    }
}
let app = new App();
app.runApplication(); 