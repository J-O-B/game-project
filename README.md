# Milestone Project Two

## JavaScript Game
![Blocks Away](assets/readme/main-menu.jpg)

Welcome to my second milestone project! As I feel very confident with business style web design, I wanted to undertake a project 
that is very different from anything I have coded before and would test my JavaScript skills, this is why I chose to create a game 
for this project. 

Based on the style of the gaming classic Tetris, Blocks Away is a browser based JavaScript game packed with features. For this project, 
I wanted to try and recreate the 8-bit era, which you will notice in the audio and styling of the page. 

Further specific information on this project can be found below:

### Table of contents:
1. [Description](#Description),
2. [UX](#UX)
    1. [Logo](#Logo)
    2. [Wireframes](#Wireframes)
    3. [User Stories](#User-Stories) 
    4. [Information Architectures](#Information-Architectures)
    5. [Responsive Design](#Responsive-Design)
    6. [Frameworks](#Frameworks)
    7. [Typography](#Typography)
    8. [Colors](#Colors)
    9. [Icons](#Icons)
3. [Features](#Features)
    1. [Existing Features](#Existing-Features)
    2. [Future Features](#Future-Features)
4. [Technologies Used](#Technologies-Used)
5. [Testing](#Testing)
6. [Deployment](#Deployment)
    1. [Local Deployment](#Local-Deployment)
    2. [Remote Deployment](#Remote-Deployment)
7. [Credits](#Credits)
    1. [Media](#Media)
    2. [Content](#Content)
    3. [Attribution](#Attribution)
    4. [Acknowledgments](#Acknowledgments)

## **Description**
This JavaScript game is based on the retro classic Tetris. A player needs to fill rows with blocks in order to clear the line, and score points. 
For each line that is cleared, a player will earn 10 points. A simple local storage addition means that players will have their top score saved 
for any future games (*unless they delete their cookies).

---------------
## **UX**


#### 5 Planes of UX:
1. Strategy:
>   ([User Stories](#User-Stories) Below)

2. Scope:

*Functional Requirements:*
> A player must be able to fully control the blocks within the game.
> Game logic must limit the movement of blocks to the area within the game 'board'.
> Game logic must recognize when a row is complete, then delete this row.
> Game logic must recognize when a block lands on the bottom of the board, or another block, when this happens we must merge these objects.
> A player must be able to start or stop music & sound effects.
> Finally the game must offer different difficulties to make the game fun for players of all abilities.

*Content Requirements:*
> Details of how to play the game, such as controls (to include the difference for desktop and mobile).
> Information on the optimal devices to play the game.
> Attribution for media and sounds as per their usage agreements.
> Feedback areas to notify users and give feedback, such as clicking the sound button should then have text "sound selected off".

3. Structure:
> * A user interface that functions like a game menu.
>
> * Each screen should provide a limited ammount, but quality information to a user.
>
> * A game screen should be sized to allow mobile users see the entire board and controls on one screen (wireframe for this is added in wireframes pdf)

4. Skeleton:
>  You can view the wireframes for this project [here](#Wireframes)


5. Surface:
>  In an attempt to recreate an 8-bit era, use a font that looks like an 8-bit font.
>  Build a main screen whereby a user can simply access a sub section, before returning to the main screen.
>  Allow user inputs to change the state of the code, for example turning audio on or off, selecting difficulty etc.


### <ins>**_Logo_**</ins>
Although there is no logo for this game, the welcome video starts off using the logo of John O'Brien (me).

### <ins>**_Wireframes_**</ins>
You can view the wireframe designs [here](assets/readme/wireframe_design.pdf)


### <ins>**_User Stories_**</ins>

Being a web game the following user stories specific to this project are: 

| **As the creator I want to:** |
| ------------------------------------------------------- |
|1. *Have fun playing the game.* |
|2. *Create a program I have never created before.* |
|3. *Expand my JavaScript and jQuery skills.* |
|4. *Allow players to contact me with feedback* |

| **As a user I want to:** |
| ------------------------------------------------------- |
|1. *Play a fun game.* |
|2. *See instructions on how to play the game.* |
|3. *Be capable of changing settings to my liking.* |
|4. *See who created the game.* |
|5. *Contact the creator.* |


### <ins>**_Information Architectures_**</ins>
For this project I wanted to use a design that meets UX design goals as well as functioning in a similar way to what 
users would expect. 
A lot of users have probably played a video game with a basic navigation menu, so I chose to follow a similar structure to allow users 
see this menu as something that is easy for them to navigate through and eaily access the information they choose (click) to see.

The main menu buttons follow a hierarchical structure, with PLAY being the highest authority button, followed by INSTRUCTIONS etc.

The page with the most content is the instructions page, in order not to overwhelm the user I have split this page into sections. 
By doing this a user can view the individual section of information or read through as much information as they wish before navigating 
back to the main menu.

All but one links on this project will only navigate from the main menu into a section, or back to the main menu. The only exception to 
this rule is the "email" button on the social page, which will navigate to the "contact form". 

### <ins>**_Responsive Design:_**</ins>
This project is fully responsive and has been tested on screen widths between 375px up to 3800px.

### <ins>**_Typography_**</ins>
This project uses "Press Start 2P" (Google Fonts), this font is an 8-bit style font to help the design of the project.

### <ins>**_Colors_**</ins>
The main color used in this project is rgb(0, 201, 10) which is the green color seen throughout this project.

### <ins>**_Icons:_**</ins>
Although this project does not use too many icons, they do play a very important role for the game. The button controls which allow 
tablet and mobile users control the blocks to make this game function on their device. 

--------------------
## **Features**

### <ins>**_Existing Features:_**</ins>

Currently, this project has several features which include:

Sound Effects:

* Sound effect features are scattered around this project and contained within the game itself. If the sound is selected on, menu selections to enter a section will 
play a specific noise, once in an area, if a user selects to return to the main menu a different noise is played.

* Within the game, if the sound is selected ON, the main menu audio will change to the game song, a 'thud' noise is played each time a block lands, and a zap noise 
is played when a line break is detected. When a user has lost the game, the game song will pause, and game over music will play. On returning to a new game the game song 
will play again. 

Popup Intro:

* A popup window which holds an into video, as well as a description of the game means a user can tell what this page is before even moving past this screen.

Main Menu:

* The main menu of this project is interactive, with hover events and event listeners for mouse or touchscreen inputs.

Settings Screen:

* The settings screen is interactive, and supplies feedback to a user. For example on clicking the "Sound: ON" a user will see the change of text, they will also see the global 
sound button (top right) change to the selected setting, and will hear music starting. 

High Score:

* On starting this game, the game will check for a stored high score. If a high score exists in a users browser, then that score will be displayed. If no high score is 
found, then a 0 is placed here. When a user loses a game, the current score will be compared to see if a new high score has been achieved, if the score is higher than the 
saved high score, then the game will automatically replace the old high score with the new high score.

Background Animation:

* In the background (behind the card, and ontop of the background image) there are animated shapes flying.

Social Card:

* A 3D social card is contained in the SOCIAL page. This card reacts to a users mouse position and reacts according to the X & Y values of the mouse position. Due to 
styling, this animation is only available on screens larger than 769px (anything larger than an iPad).

#### *Implemented but removed:*

Speech Recognition:

* This project originally contained speech recognition which allowed a user to navigate, press buttons, fill out the contact form, and play (move blocks) using their 
voice. This feature however only worked on Chrome, and was causing bugs when viewed on differnt browsers, so the decision was made to remove this feature.


### <ins>**_Future Features:_**</ins>

One feature I did really want with this project was a global high score sheet, where users (if good enough) would have their score and a username pinned to a 'global' 
scoreboard. Unfortunately at this time I do not have the knowledge to implement this, so I chose to wait until I fully understand this process before implementing it 
in this game.
    
------------------
## **Technologies Used**

Blocks Away uses HTML, CSS and JavaScript with the addition of Bootstrap and jQuery. To allow for functionality of the contact form, an email API from EmailJS has been 
used.

---------------------
## **Testing**

This project has passed through several phases of testing, these phases include:

[W3 Validator](https://validator.w3.org/) to check all HTML. 

[W3 'Jigsaw' Validator](https://jigsaw.w3.org/css-validator/) to check all CSS.

*Console.Log*: During the creation of this code, logging the results of each function was key. As this project relies on ALL functions to operate correctly, without fail 
it was imperative that all functions supply a correct answer or value in a timely manner.

Dev Tools: While creating this game, I took note of all function names, variables and objects. With this sheet, I was able to open a game and check different parameters 
at different times of a game. This also allowed me to force in parameters to check certain results. For example halfway through a game when a user would normally be "alive" 
I would give "alive" a value of "false", with this variable set, I know the outcome should be that the game essentially "pauses". 

Testing through playing: Knowing the outcome I wanted, I tested certain scenarios whilst "playing" the game. This included aspects such as trying to position a block off the 
board. 

Testing through test.html: As I ran into errors with Jasmine (due to canvas), I created a test.html file and imported the blocks-away JavaScript file. I then added input 
fields to enable custom testing. 
One example of this was the testing of the "shapes(shape)" function. To test this function I had an input box where I could type in a letter which would 
then insert this letter into the function and then paste the result string into a paragraph element to view the corresponding string and if the resulting string matched the string 
contained within blocks-away.js. Knowing that only A-I are the accepted inputs I first tried using numbers or letter that are not A-I, this showed a result of FAIL, which is what 
I was expecting, then on entering A, B, C, D, E, F, G, H, or I a "TEST PASSED" note was shown. This testing paired with visual cues from playing the game formed just part of 
the regimented testing carried out from the start of this project.

--------------------
## **Deployment**

### <ins>**_Remote Deployment:_**</ins>
To deploy this project remotely, you can follow these steps:
>1. Log Into GitHub.
>2. Navigate to my GitHub repository for this project which can be found [here](https://github.com/J-O-B/game-project).
>    
>   (Close to the top of the page, there is a navigation bar, the first item here is "<>Code", the last item is "Settings".)
>
>3. Click on settings
>4. Scroll down the page until you find the section labeled "GitHub Pages"
>5. The first item in GitHub Pages is "Source", click the associated dropdown button labeled "None". 
>6. You will now have to select "master branch" as the source.
>7. Once you have selected "master" click the "Save" button. 
>8. The page should now refresh so you may have to scroll back down to "GitHub Pages".
>9. Now you will see a link presented which should look like this https://j-o-b.github.io/game-project/.

### <ins>**_Cloning This Project:_**</ins>
>1. On GitHub, navigate to the main page of the repository.
>2. Above the list of files, click download Code icon. (a down arrow with a line under it)
>3. To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon. To clone the repository using an SSH key, 
> including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clipboard icon. 
> To clone a repository using GitHub CLI, click Use GitHub CLI, then click the clipboard icon.
>4. Open Git Bash.
>5. Change the current working directory to the location where you want the cloned directory.
>6. Type git clone, and then paste the URL you copied earlier.
>7. Press Enter to create your local clone.

(Further information on cloning can be found at [GitHub Docs](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

----------------------
## **Credits**
This project, although peiced together by myself, incorporates images, video, sound and code from multiple sources. These include:
    

### <ins>**_Media:_**</ins>
>**Background Image** - [Pixabay Stock & Royalty Free Image](https://pixabay.com/)
>**Intro Video** - [Video Snippets From Pixabay](https://pixabay.com/)
>**Sound Effects** - [ZapSplat.com](https://ZapSplat.com)
* Background Music : "New Hope",
* Game Music : "SawSquareNoise",
* Click Sound: General game sounds,
* Back Sound: General game sounds.


### <ins>**_Content:_**</ins>
All text content is my own.

### <ins>**Code:_**</ins>
>**Social Card** - ["Dev Ed" YouTube](https://www.youtube.com/watch?v=XK7T3mY1V-w&t=1855s)
>**Animated Background** - [Free Frontend](https://freefrontend.com/css-animated-backgrounds)

*I have used W3 Schools and StackOverflow when I did not achieve a result, references to some of these codes are also contained in notes in my scripts.*

### <ins>**_Acknowledgments:_**</ins>
I would like to acknowledge my mentor <ins>Caleb Mbakwe</ins> for his tips during this project.

## *Previews*:
### Main Menu:
![Main Menu](assets/readme/main-menu.jpg)

### Settings Screen:
![Settings](assets/readme/settings.jpg)

### Social Screen:
![Social](assets/readme/social.jpg)

### Game Screen:
![Game Screen](assets/readme/game-screen.jpg)
