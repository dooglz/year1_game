# Year 1 Game side-Project
Build a simple Web Game using [PhaserJs](https://phaser.io/)


## Getting started

1. [Create a Github Repo for your project](#s1)
0. [Clone your repo](#s2)
0. [Add PhaserJS source files](#s3)
0. [Step 4 - Create a simple html page](#s4)
0. [Running a simple webserver](#s5)
0. [Pushing to your repo](#s6)
0. [Enabling github pages](#s7)
0. [Add collaborators](#s8)

---
### Step 1 - Create a Github Repo for your project<a name="s1"></a>

If you have not already created a github account, create one and sign in.

(As a student you get some cool swag from github: [check it out](https://education.github.com/pack))

![](img/i1.png)

![](img/i2.png)
Give your repo a simple name and descriptive description

Check - Initialize with a readme

Choose an open source license, so people cant legally steal your work without crediting you. The inbuilt guide from github covers this neatly, when in doubt: choose MIT license.

After this stage Github will create the repo for you and you should see something like the following image, now it's time to **clone** the repo down so you can start to work within it. Click the green clone button and copy the link within the box

![](img/i3.png)

---
### Step 2 - Clone your repo<a name="s2"></a>

If you haven't installed Git on your pc yet, [do so now](https://git-scm.com/downloads)

Open a cmd (or git-bash) window somewhere (desktop is best). Now clone your repo down
```bash
git clone https://github.com/you/year1_game
```
This will create a folder named year1_game (or whatever you called you repo). Let's move into that folder in the terminal
```bash
cd year1_game
```
Now if you run
```bash
git status
```
you should see something similar to 
```bash
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean
```
Now we can Start to get to work properly.

---
### Step 3 - Add PhaserJS source files<a name="s3"></a>
You can integrate phaser into a project in 2 ways
1. Link to the phaser code, hosted on the web.
    This way you don't have the phaser code in your repo, but if you ever want to work offline or the phaser site goes down, your game will break. Whenever a browser goes to your game page it will fetch the phaser code from the phaser webserver.

0. Download the phaser code manually, add it into your repo.
    This means you've always got the phaser library code for use. Downside is that it makes your repo bigger, and you're locked to that version until you update it yourself.

We're going to go with option 2. Navigate yourself to the phaser downloads site: https://phaser.io/download/stable

From here you want to download the "**min.js**" file, and save it in your game folder, under a new folder called "js".

---
### Step 4 - Create a simple html page<a name="s34"></a>
All websites start with html, so let's get to writing some

**Create a file named "index.html"** in your game folder

```html
<!doctype html> 
<html lang="en"> 
<head> 
	<meta charset="UTF-8" />
	<title>Year 1 Game</title>
	<script type="text/javascript" src="js/phaser.min.js"></script>
</head>
<body>
    <script type="text/javascript" src="js/game.js"></script>
</body>
</html>
```

---
### Step 5- Running a simple webserver<a name="s5"></a>

---
### Step 6 - Pushing to your repo<a name="s6"></a>

---
### Step 7 - Enabling github pages<a name="s7"></a>

---
### Step 8 - Add collaborators<a name="s8"></a>





