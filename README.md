EfficaCSS
=========

A set of SASS &amp; Bourbon mixins to power up your stylesheets And to provide you the best OVCSS system.

Effica{CSS}
Home
Download
Effica{CSS}

A set of SASS & Bourbon mixins to power up your stylesheets
And to provide you the best OVCSS system.
Summary
Require
Variables
Mixins
Naming Conventions
Examples
Download
Require
BourbonSASSOVCSS
Variables
Paths
Fonts
Colors
The framework use different variables, such as color variables or even font-names, path, or anything that needs to be used more than one time. And in order to make the CSS developement easier !

Path
To make the maintenance easy, you can declare your assets path in a separate .scss file, called _variables.scss

Keep this file at the top of your sass file, to make the path variable accessible to any OVCSS components.

Keep everything clean
To easily track your files and ressources, you can custom your own path like the following :

$root: '../';

$path-css: $root + 'css/';
$path-js: $root + 'js/';
$path-fonts: $root + 'fonts/';
$path-img: $root + 'images/';
Usecase
Let's say you have your own icons set, and you put them in you images path, into a svg folder.

1 Add a new variable to _variables.scss

$path-svg: $path-image + 'svg/'
2 Add an @each function to your _icons.scss

$icons: "phone", "twitter", "email";

@each $icon in $icons {
  .ico{
    &[class*="ico-#{($icon)}"]{
      &:before{
        @include icon-background('#{$path-svg}#{($icon)}.svg');
      }
    }
  }
}
Fonts
The framework use a smart font system, that requires a minimum setting. on the same _variables.scss, you can set 3 different parameters.

$font-name: "ProximaNova";
$font-fallback: "Helvetica";

$font-directory: $path-fonts + "ProximaNova/";
Colors
To keep the whole design easy to maintain, EfficaCSS use colors variables, and shorten colors variables.
Here is a sample of the _color.scss file this page is using.

$purple: #663399;
$text-purple: #4B5184;
$dark-purple: #363953;
$light-purple: #C8C9DA;

$grey: #EFF0F2;
$light-grey: #FAFBFB;
$dark-grey: #9295A4;

$blue: #1393D5;
$white: #F3F3F5;
$yellow: #EEBD2B;
$green: #83BC49;

/* Shortcuts
--------------------------------------------------------------------------------------------------*/
$p: $purple;
$dp: $dark-purple;
$lp: $light-purple;
$tp: $text-purple;

$ge: $grey;
$lg: $light-grey;
$dg: $dark-grey;

$b: $blue;
$w: $white;
$y: $yellow;
$g: $green;

/* Theme
--------------------------------------------------------------------------------------------------*/
$color-theme: $b;
$ct: $color-theme;
Mixins
In adition of all the mixins brougth to you by Bourbon, the framework provides some other useful mixins to make your developement easy !
From the font, to the background, you can use many mixins to save your time !

@mixin	Parameters	Effect
Settings		
@mixin reset()	0	Small reset, set an element ready for content, used essentially with html,body
@mixin high()	0	This mixin apply high quality proprieties to the page content. used essentially with html, body
@mixin font()	$url, $name	Use it to create a complete font-face call, You don't need to specify the extension of the file.
@mixin font-family()	$font, $fallback, $serif	Use this mixin to create a font-family properiety
Headers		
@mixin header-weight()	$value	Apply a font-weight to every headers from h1 to h6
@mixin header-color()	$value	Apply a color to every headers from h1 to h6
@mixin header-padding()	$value	Apply a padding to every headers from h1 to h6 Do not apply em unit if you want a regular effect
Borders		
@mixin border-top-radius()	$radius	Helper radius class to apply a border-radius only on top
@mixin border-bottom-radius()	$radius	Helper radius class to apply a border-radius only on bottom
@mixin border-left-radius()	$radius	Helper radius class to apply a border-radius only on left
@mixin border-right-radius()	$radius	Helper radius class to apply a border-radius only on right
@mixin border-not()	$size, $color, $type, $not	Apply borders but not on one side. The $not parameter can be : top, bottom, left, right
Graphic		
@mixin square()	$size, $color	create a square by adding its dimensions and colors.
@mixin square-gradient()	$size, $angle, $color-1, $color-2	create a square by adding its dimensions and you have to specify a rotation angle for the gradient.
@mixin circle()	$size, $color	create a circle by adding its dimensions and colors.
@mixin circle-gradient()	$size, $angle, $color-1, $color-2	create a circle by adding its dimensions and you have to specify a rotation angle for the gradient.
Backgrounds		
@mixin full-background()	$fallback-color, $url	Create a full centered cover background even on resize, you need to specify a fallback color.
@mixin contain-background()	$fallback-color, $url	Create a centered and contain background, you need to specify a fallback color
@mixin icon-background()	$url	A straight to the point way to add an icon as a background.
Box shadows		
@mixin inset-shadow()	$size-1, $color-1, $size-2, $color-2	Add to a an element to create an inset effect, you have to define the size and colors.
@mixin outset-shadow()	$size-1, $color-1, $size-2, $color-2	Add to a an element to create an outset effect, you have to define the size and colors.
@mixin inset-shadow-simple()	0	Add to a an element to create an inset effect, simple effect, no parameters needed.
@mixin outset-shadow-simple()	0	Add to a an element to create an outset effect, simple effect, no parameters needed.
Text shadows		
@mixin shadow-text-b()	$color-background, $color-shadow	This mixin create a bottom text shadow. The $color-background attribute may have the same color value as the container
@mixin shadow-text-t()	$color-background, $color-shadow	This mixin create a top text shadow. The $color-background attribute may have the same color value as the container
@mixin shadow-text-r()	$color-background, $color-shadow	This mixin create a right text shadow. The $color-background attribute may have the same color value as the container
@mixin shadow-text-l()	$color-background, $color-shadow	This mixin create a left text shadow. The $color-background attribute may have the same color value as the container
@mixin shadow-text-br()	$color-background, $color-shadow	This mixin create a bottom right text shadow. The $color-background attribute may have the same color value as the container
@mixin shadow-text-bl()	$color-background, $color-shadow	This mixin create a bottom left text shadow. The $color-background attribute may have the same color value as the container
@mixin shadow-text-tr()	$color-background, $color-shadow	This mixin create a top right text shadow. The $color-background attribute may have the same color value as the container
@mixin shadow-text-tl()	$color-background, $color-shadow	This mixin create a top left text shadow. The $color-background attribute may have the same color value as the container
Other		
@mixin single-element()	0	Basic setting to use with a :before/:after pseudo class to extend a basic element
Usage
To use a mixin simply call it with its parameters :

div{
  @include square(5em, red);
  @include outset-shadow-simple();
  @include shadow-text-b($bg-color, black);
  @include border-right-radius(30px);
  @include transition(all .3s ease);

  &:hover{
    @include square-gradient(5em, 45deg, #663399, $color-theme);
    @include inset-shadow-simple();
    @include border-right-radius(0px);
    @include border-left-radius(30px);
  }
}
Result
Naming Conventions
For :
Variables
Typography
Images
Icons
The framework use different variables, such as color variables or even font-names, path, or anything that needs to be used more than one time. And in order to make the CSS developement easier !

Variables
The variables names have to be clear, and to describe things clearly, to ensure clarity and efficacity.

For example, you want to use a red color, so proceed like the following :

$red: #f00;
Well, now you want some different tints of your color :

$red: #f00;
$dark-red: darken($red, 10%);
$light-red: lighten($red, 10%);
Pretty logic and simple, and in a last effort, we want to minify them, to make the variables available as shortcuts :

$red: #f00;
$dark-red: darken($red, 10%);
$light-red: lighten($red, 10%);

//Shortcuts
$r: $red;
$dr: $dark-red;
$lr: $light-red
And thats it ! Follow this naming conventions rules, and you will use EfficaCSS at its climax !

Typography
If you are using custom fonts, make sure to properly name your folder, and your fonts.

You may have different versions of your font, like the Light, Regular, Semibold and Bold versions. 
Good news ! Because with EfficaCSS we've made it simple to manage ! And it's located in the _typography.scss file.

$versions: 'Regular','Light','Bold','Semibold';
@each $version in $versions{
  @include font($font-directory, $font-name+'-'+$version);
}
As you can see, to import a font into your website, you just have to write these lines, and the framework handle everything else.

How to name a font
To make a font properly working, the project organisation is important, and the names are too.

Let's say you want to use your own font called MyFont, you have to :

Name it properly
So You have a font called MyFont, and you have all the font versions, give them the same name and add -<version>.

For a basic example, you want to use these versions : Light, Regular, Semibold and Bold

/Myfont/
  |
  | MyFont-Light.ttf[.woff, .eot, .otf, .svg]
  |
  | MyFont-Regular.ttf[.woff, .eot, .otf, .svg]
  |
  | MyFont-Bold.ttf[.woff, .eot, .otf, .svg]
  |
  | MyFont-Semibold.ttf[.woff, .eot, .otf, .svg]
Add it to the framework
1 : Create a folder called MyFont in assets/fonts/

2 : Place your .ttf, .woff, .eot, .otf, .svg font files in assets/fonts/MyFont

3 : Open _variables.scss

4 : Add a new variable $MyFont-name

5 : Create a new path $MyFont-directory: $path-fonts + $MyFont-name + "/";

6 : And finally, open your _typography.scss file and add the following code :

$versions: 'Regular','Light','Bold','Semibold';
@each $version in $versions{
  @include font($MyFont-directory, $MyFont-name+'-'+$version);
}
And your font is now imported.

Images
You may want to use a set of images, maybe extracted from a png (or any other images extension) gallery, As the font, everything is managed by a proper name setting.

Create an image gallery
You have a folder with, all your holiday pictures, and you want to show some on your website, name your folder my_holidays_2014, go to the folder assets/images, and add your my_holidays_2014 folder in it.

In this folder, add all your pictures and give them a prefix holidays_2014_ for example.

images/my_holidays_2014/
              |
              | holidays_2014_The_beach.png
              |
              | holidays_2014_The_hotel.png
              |
              | holidays_2014_Sunset.png
              |
              | holidays_2014_Safari.png
              |
              | holidays_2014_Mountain.png
Its time to create a path for this gallery, go to assets/css/base/ open _variables.scss and add

$path-gallery-2014: $path-img + 'my_holidays/';
so your file will look like this :

$root: '../';

$path-css: $root + 'css/';
$path-js: $root + 'js/';
$path-fonts: $root + 'fonts/';
$path-img: $root + 'images/';

$path-gallery-2014: $path-img + 'my_holidays/';
After that, you just have to open your _images.scss file, and add your gallery :

.gallery-item{
  display: block;
  @include square(6em, transparent);
}

$prefix-gallery: 'holidays_2014_';
$extension-image: '.png';
$scenes: "The_beach", "The_hotel", "Sunset","Safari", "Mountain";

@each $scene in $scenes {
  .gallery-item{
    &[class*="gallery-#{($scene)}"]{
        @include full-background(#ccc, '#{($path-gallery-2014)} + #{($prefix-gallery)} + #{($scene)} + #{($extension-image)}');
    }
  }
}
Icons
You have some cool icons and you want to use them on your website, EfficaCSS can help you !

Create a custom icons set with EfficaCSS
If your SVG gallery have a name like svg_iconset, go to the folder assets/images, and add a new folder and name it svg and in this folder, create an other folder svg_iconset

In this folder, you will upload all your icons, with the same exact prefix icon_.

images/svg/svg_iconset/
              |
              | icon_check.svg
              |
              | icon_user.svg
              |
              | icon_home.svg
              |
              | icon_cancel.svg
              |
              | icon_share.svg
Now create a path of your new icon set, go to assets/css/base/ and open _variables.scss and add

$path-svg: $path-images + 'svg/';
$path-icons: $path-svg + 'svg_iconset/';
so your file will look like this :

$root: '../';

$path-css: $root + 'css/';
$path-js: $root + 'js/';
$path-fonts: $root + 'fonts/';
$path-img: $root + 'images/';

$path-svg: $path-img + 'svg/';
$path-icons: $path-svg + 'svg_iconset/';
Once you've done with it, go to assets/css/base/ and open _icons.scss.

Then add :

.ico{
  display: block;
  &:before{
    @include single-element();
    @include square(1.2em, transaprent);
  }
}

$prefix-icon: 'icon_';
$extension-icon: '.svg';
$icons: "check", "user", "home","cancel", "share";

@each $icon in $icons {
  .ico{
    &[class*="ico-#{($icon)}"]{
      &:before{
        @include icon-background('#{($path-icons)} + #{($prefix-icon)} + #{($icon)} + #{($extension-icon)}');
      }
    }
  }
}
Download on GitHub 
2014 - @LukyVj

