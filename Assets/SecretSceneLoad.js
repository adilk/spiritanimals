#pragma strict

function Start () {

}

function Update () {

}

function OnLevelWasLoaded (level : int) {
    var script : GameLogicScript = GameObject.Find("GameLogic").GetComponent("GameLogicScript");
    script.has_stone = true;
}