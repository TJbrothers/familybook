var images = ["https://images-na.ssl-images-amazon.com/images/I/51KNpAKei-L.jpg",
"https://webstockreview.net/images/father-clipart-10.jpg", 
"https://webstockreview.net/images/clipart-mom-cartoon-3.jpg",
"https://thumbs.dreamstime.com/b/happy-cute-kid-boy-pose-as-model-vector-164555488.jpg",
"https://lh3.googleusercontent.com/proxy/jZh7boZpL_qCblJVD1_g4dIrhi0TKPGLi6fBJPuHl4KjrIO7xeXH9zVTlUssujFS4STjkkDlZnMZAyxfNQWaWbc"
];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
