<!DOCTYPE html>
<html>
<head>
    <title>Rock Paper Scissors</title>
<link rel="stylesheet" type="text/css" href="css/style.css"></link>
</head>

<body>

<div class="buttons">
    <button class="btns" id="rock"><img src="rock.png"/></button>
    <button class="btns" id="paper"><img src="paper.png"/></button>
    <button class="btns" id="scissors"><img src="scissors.png"/></button>
</div>

<div id="selections">
    <div class="selectionResult" id="player"><h4>YOU</h4><img id="playerImg" src = ""></div> 
    <div class="selectionResult" id="computer"><h4>COMPUTER</h4><img id="computerImg" src= ""></div> 
</div>

<div id="roundResult">
</div>

<div id="scoreBox">
    <div id="youScore">
        <div class="score" id="playerScoreBox"></div>
    </div>
    <div id="computerScore">
        <div class="score" id="computerScoreBox"></div>
    </div>
</div>


<script src='js/script.js'></script>
</body>