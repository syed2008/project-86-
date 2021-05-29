var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
superhero_image_width = 30;
superhero_image_height = 30;
var superhero = "";
var superhero_image = "";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        superhero_object = Img;
        superhero.scaleToWidth(150);
        superhero.scaleToHeight(140);
        superhero.set({
            top: player_y,
            left:player_x
        });
        canvas.add(superhero);

    
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        superhero_image = Img;
        superhero_image.scaleToWidth(superhero_image_width);
        superhero_image.scaleToHeight(superhero_image_height);
        superhero_image.set({
            top: player_y,
            left:player_x
        });
        canvas.add(superhero_image);

    
    });
}