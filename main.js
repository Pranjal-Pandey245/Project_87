var canvas= new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;
player_object="";

image_width=50;
image_height=50;
image_object="";

function update_player(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top:player_y, left:player_x});
        canvas.add(player_object);
    });}

    function new_image(get_image){
        fabric.Image.fromURL(get_image, function(Img){
            image_object=Img;
            image_object.scaleToWidth(image_width);
            image_object.scaleToHeight(image_height);
            image_object.set({top:player_y, left:player_x});
            canvas.add(image_object);
        });
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e){
        keypressed= e.keyCode;
        console.log(keypressed);


        if(keypressed=="80" && e.shiftKey==true){
            console.log("p and shift");
            image_width= image_width+10;
            image_height= image_height+10;
            document.getElementById("current_width").innerHTML=image_width;
            document.getElementById("current_height").innerHTML=image_height;
        }
    
        if(keypressed=="77" && e.shiftKey==true){
            console.log("m and shift");
            image_width= image_width-10;
            image_height= image_height-10;
            document.getElementById("current_width").innerHTML=image_width;
            document.getElementById("current_height").innerHTML=image_height;
        }



        if(keypressed=="70"){
            console.log("face");
            new_image("hulk_face.png");
        }

        if(keypressed=="66"){
            console.log("body");
            new_image("ironman_body.png");
        }

        if(keypressed=="76"){
            console.log("legs");
            new_image("spiderman_legs.png");
        }

        if(keypressed=="82"){
            console.log("r hand");
            new_image("captain_america_left_hand.png");
        }

        if(keypressed=="72"){
            console.log("l hand");
            new_image("thor_right_hand.png");
        }


        if(keypressed=="38"){
            console.log("up");
            up();
        }
    
        if(keypressed=="40"){
            console.log("down");
            down();
        }
    
        if(keypressed=="37"){
            console.log("left");
            left();
        }
    
        if(keypressed=="39"){
            console.log("right");
            right();
        }
    }

