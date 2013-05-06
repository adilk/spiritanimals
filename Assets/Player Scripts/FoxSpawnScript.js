#pragma strict

var timer : float = 0.0;
var spawning : boolean = true;
var player : Transform;
var prefab : Transform;
var spawn1 : Transform;
var spawn_distance : int = 1;
var end : Transform;
private var foxInstance : Transform;
private var started : boolean = false;
//var fox_text_prefab : Transform;
//var text_offset : Vector3;

function Start() {
if (player == null) {
Debug.LogError("Player is null");
}
}
 
function Update () {
if (spawning == false && started == false) {
	started = true;
		MoveObject(foxInstance, foxInstance.position, end.position, 3.0);
	}
}
 
function OnTriggerEnter (other : Collider) {
	if (spawning)
	{
		Spawn();
	}
}
function Spawn(){
 

 //set spawning to true, to stop timer counting in the Update function
 
 //create the object at point of the location variable
 foxInstance = Instantiate(prefab, spawn1.position, Quaternion.identity);
 
 // Disable player movement
 player.GetComponent(CharacterMotor).canControl = false;
 
 audio.Play();
 
 // Fox Dialouge
 //var text_instance : Transform = Instantiate(fox_text_prefab, spawn1.position - text_offset, Quaternion.identity);
 yield WaitForSeconds(1);
 foxInstance.transform.Rotate(Vector3.up * 180);
 spawning = false;
 //Destroy(text_instance.gameObject);
 // Fox Movement

}

function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) {
    var i = 0.0;
    var rate = 1.0/time;
    while (i < 1.0) {
        i += Time.deltaTime * rate;
        thisTransform.position = Vector3.Lerp(startPos, endPos, i);
        yield; 
    }
    Destroy(foxInstance.gameObject);
     // Re-enable player movement
 	player.GetComponent(CharacterMotor).canControl = true;
}