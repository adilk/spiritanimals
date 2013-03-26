#pragma strict

var timer : float = 0.0;
var spawning : boolean = true;
var player : Transform;
var prefab : Transform;
var spawn1 : Transform;
var spawn_distance : int = 1;
var fox_text_prefab : Transform;
var text_offset : Vector3;

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
 var foxInstance : Transform = Instantiate(prefab, spawn1.position, Quaternion.identity);
 
 // Disable player movement
 player.GetComponent(CharacterMotor).canControl = false;
 
 // Fox Dialouge
 var text_instance : Transform = Instantiate(fox_text_prefab, spawn1.position - text_offset, Quaternion.identity);
 yield WaitForSeconds(3);
 Destroy(text_instance.gameObject);
 // Fox Movement
 
 // Delete the fox
 
 Destroy(foxInstance.gameObject);
 
 
 // Re-enable player movement
 player.GetComponent(CharacterMotor).canControl = true;

}