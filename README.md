# slideshow
create slideshow and rotates images with transitions

You have not set up any pictures in your HTML Code. You init the Slideshow with a picture array.
When you start the Slideshow, it will be check if the picture is in the DOM tree, if not it will create a new image element and insert it in the DOM tree.

add fadeIn and fadeOut effect for smooth transistion.

<script>
  var pictures = [	new Picture('hochzeitsauto-jaguar-hamburg-lueneburg-mieten-121404.jpg', 'here is my alt and title Text'),
                    new Picture('hochzeitsauto-jaguar-hamburg-lueneburg-mieten-5749.jpg', 'Hochzeitsauto Hamburg Jaguar XKR X100 mieten'),
                    new Picture('hochzeitsauto-jaguar-hamburg-lueneburg-mieten-5777.jpg', 'Hochzeitsauto Hamburg Lüneburg Jaguar XJ308 mieten'),
                   .... ];
  var slider = new Slideshow('slideshow', pictures, 4000);
  slider.autoplay();
</script>
