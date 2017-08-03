# Slideshow

create slideshow and rotates images with transitions

You have not set up any pictures in your HTML Code. You init the Slideshow with a picture array.
When you start the Slideshow, it will be check if the picture is in the DOM tree, if not it will create a new image element and insert it in the DOM tree.

add fadeIn and fadeOut effect for smooth transistion.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Download the two files: slideshow.css and slideshow.js and link them in your project like:
<link rel="stylesheet" href="slideshow.css">
<script src="slideshow.js"></script>


### Starting slideshow

#### creating picture array
var pictures = [	new Picture('hochzeitsauto-jaguar-hamburg-lueneburg-mieten-121404.jpg', 'here is my alt and title Text'), new Picture('hochzeitsauto-jaguar-hamburg-lueneburg-mieten-5749.jpg', 'Hochzeitsauto Hamburg Jaguar XKR X100 mieten'),  new Picture('hochzeitsauto-jaguar-hamburg-lueneburg-mieten-5777.jpg', 'Hochzeitsauto Hamburg Lüneburg Jaguar XJ308 mieten'),.... ];
									 
#### create instance
var slider = new Slideshow('slideshow', pictures, 4000);

#### start slideshow
slider.autoplay();


## Authors

* **Sebastian Conrad** - *Initial work* - [sebcon](http://www.sebcon.de)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


