#pragma strict

var tunnel : Transform;

private var script : GameLogicScript;

function Start () {

}

function Update () {

}

 function OnLevelWasLoaded (level : int) {
    script = GameObject.Find("GameLogic").GetComponent("GameLogicScript");
    var hasStone : boolean = script.has_stone;
    if (hasStone) {
        this.transform.position = tunnel.position;
        Camera.mainCamera.transform.position.y = this.transform.position.y + 8.7950641;
    }
}