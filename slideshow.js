'use strict';


/**
*		@namespace Slideshow
*/

/**
 * @copyright 2017
 * @author Sebastian Conrad <http://www.sebcon.de/>
 * @version 1.1 - 20. July 2017
 * @see http://www.github.com/sebcon
 * @license Available under MIT license <https://mths.be/mit>
 * @fileoverview create Slideshow, insert images in DOM tree if there doesnt exist it, autoplay function
 */


/**
*		@class Slideshow
*
*		@constructor
*		@param {string}	id - id of the wrapper element
*		@param {Picture} [arraySize = Unlimited] - array length
*		@param {time} [time = 2000] - time between transistions
**/


var Slideshow = function(id, pictures, time) {
	if (id) {
		this.id = id;
	} else {
		console.warn('need element ID for creating slideshow');
	}

	if (pictures) {
		this.pictures = pictures;
	} else {
		console.warn('need pictures for creating slideshow');
	}

	// get any random number between min and max
	var getRandomInt = function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	this.time = (time || 2000);
	var len = (pictures.length || 0);
	var index = ( getRandomInt(0, len) || 0 );
	var interval = null;


	// fade out transistion
	var fadeOut = function() {
		var element = document.getElementById(id + '' + getPrevious());
		if (element) {
			element.className = 'fadeOut';
			element.style.opacity = '0';
		}
	};


	// fade in transistion
	var fadeIn = function() {
		var element = document.getElementById(id + '' + index);
		if (element) {
			element.className = 'fadeIn';
			element.style.opacity = '1';
		}
	};


	/**
	*		@function start slideshow interval
	**/
	var autoplay = function() {
		interval = setInterval(next, time);
	};


  // create new Image element and insert it into the wrapper element
	var createImage = function() {
		var element = document.getElementById(id);
		if (element && pictures[index]) {
			var newImg = new Image();
			newImg.id = id + '' + index;
			newImg.src = pictures[index].src;
			newImg.title = pictures[index].title;
			newImg.alt = pictures[index].title;
			element.appendChild(newImg);
		} else {
			console.warn('cannot find element: ' + id);
		}
	};


	// check if image already exists in wrapper element
	var existsImage = function() {
		var back = false;
		var element = document.getElementById(id);
		if (element) {
			var childs = element.getElementsByTagName('img');
			if (childs) {
				var i=0;
				while (i < childs.length && !back) {
					back = (childs[i] && childs[i].src && childs[i].src.toLowerCase().indexOf(pictures[index].src.toLowerCase()) >= 0);
					i++;
				}
			}
		}

		return back;
	};


	// set the new image
	var setNewImage = function() {
		if (pictures && pictures[index]) {
			if (!existsImage()) {
				createImage();
			}

		} else {
			console.warn('cannot set next image!');
		}
	};


	/**
	*		@function increment picture index and set the next image
	**/
	var next = function() {
		index++;
		if (index >= len) {
			index = 0;
		}
		//fadeOut();
		setNewImage();
		fadeOut();
		fadeIn();

	};


	/**
	*		@function decrement picture index and set the previous image
	**/
	var previous = function() {
		index--;
		if (index < 0) {
			index = (len-1);
		}
		fadeOut();
		setNewImage();
		fadeIn();
	};


	// get the previous picture index
	var getPrevious = function() {
		var prev = (index -1 );
		if (prev < 0) {
			prev = (len-1);
		}

		return prev;
	};


	/**
	*		@function stop the slideshow interval
	**/
	var stop = function() {
		clearInterval(interval);
	};


	return {
		autoplay : autoplay,
		next : next,
		previous : previous,
		stop : stop
	};

};


/**
*		@class Picture
*
*		@constructor
*		@type {{src : String, title : String}} Picture

*		@param {string}	src - image source
*		@param {string} title - image title and alt tag

*		@return {Picture}
**/
var Picture = function(src, title) {
	return {src : src, title : title};
};
