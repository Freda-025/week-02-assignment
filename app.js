//ToDO: Create thumbnail images,so the user an click on them and see them in fullscreen format

//STEP 1: store image data in an array

const imagesData = [
  {
    imageName: "value",
    imageSRC: "value",
    imageAlt: "value",
  },

  {
    imageName: "value",
    imageSRC: "value",
    imageAlt: "value",
  },

  {
    imageName: "value",
    imageSRC: "value",
    imageAlt: "value",
  },
];

//STEP 2: create thumbnails images
function createThumbnails() {}
// select the DOM element(thumbnail container) to contain our thumbnails
//this is a repetitive task --> for loop (for, forEach ...)
//loop task:
//create img element
//update the src and alt attributes (properties) of the img element to match those in the array(parameters)
//give each img a className (img.className)
// - add an event listener to each imgage --> the event handler of this event is the function you write to create fullscreen images
// append  the created imgages to the thumbnail-container

//STEP 3: create fullscreen images
//function createFullscreenImage() {
//this is the event handler
// select fullscreen container
//delete the current fullscreen image
//fullscreenContainer.innerHTML = "" or null;
// create image
// update its values (properties)
//add className for styling (making the image fullscreen)
// append  the image to the container
//}

//add the createFullscreenImages funtion as the event handler of the event above
//call the createthumbnails function
