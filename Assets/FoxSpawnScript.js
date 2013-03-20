#pragma strict

var timer : float = 0.0;
var spawning : boolean = true;
var player : Transform;
var prefab : Transform;
var spawn1 : Transform;
var spawn_distance : int = 1;

function Start() {
if (player == null) {
Debug.LogError("Player is null");
}
}
 
function Update () {
	if (spawning && Vector3.Distance(player.transform.position, spawn1.position) < spawn_distance) {
		Spawn();
	}
}
 
function Spawn(){
 

 //set spawning to true, to stop timer counting in the Update function
 spawning = false;
 
 //create the object at point of the location variable
 var thingToMake : Transform = Instantiate(prefab, spawn1.position, Quaternion.identity);
 

}