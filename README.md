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

Currently, this project has several features:

Navbar:

* Dropdown menu,
* Button for "experience" modal popup,
* Fully responsive layout.



### <ins>**_Future Features:_**</ins>

    
------------------
## **Technologies Used**


---------------------
## **Testing**
To test this project I first used [W3 Validator](https://validator.w3.org/) to check all HTML, I then checked all of the CSS via the [W3 'Jigsaw' Validator](https://jigsaw.w3.org/css-validator/).

![Testing](assets/readme/testing.jpg)

Adding to these tests, I used dev tools in my browser (Chrome) to see specific areas that I wanted to change. As this project is a front end project, the majority of my testing 
was that of design and the use of dev tools to achieve this.

Using Chrome Dev Tools, I viewed each section of this page on desktop, as well as both portrait and landscape layouts on tablet and mobile to ensure a 100% responsive design.

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
Although most of the content and code in this project are my own, I have also used code snippets from bootstrap, jQuery, and other sources.
Specific code credits are contained within comments in each file.
    
>* 
>* 
>* 
    

### <ins>**_Media:_**</ins>
>**Background Image** - [Pixabay Stock & Royalty Free Image](https://pixabay.com/illustrations/hacker-attack-mask-binary-one-4703109/)
>


### <ins>**_Content:_**</ins>


### <ins>**_Attribution:_**</ins>


### <ins>**_Acknowledgments:_**</ins>
I would like to acknowledge both my mentor <ins>Caleb Mbakwe</ins> for his tips during this project.

## *Previews*:
### Homepage / Welcome Section:
![Portfolio](assets/readme/Preview.jpg)

### About Me Section:
![About](assets/readme/who-is-john.jpg)

### Skills Section:
![Johns skills](assets/readme/skills.jpg)

### Experience Popup:
![Johns experience](assets/readme/experience.jpg)

### Projects Section:
![Johns projects](assets/readme/projects.jpg)

### "What I Offer" Section:
![Johns Services](assets/readme/offer.jpg)

### Contact Form:
![Contact John](assets/readme/contact.jpg)