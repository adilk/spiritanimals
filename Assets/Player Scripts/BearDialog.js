#pragma strict

var bear_text_prefab : Transform;
var bear_water : Transform;
var bear : Transform;
var text_offset : Vector3;
private var has_stone : boolean = false;
var bear_rocks : Transform;
var player : Transform;
private var first_time : boolean = true;
var deathzone : Transform;

private var script : GameLogicScript;

function Start () {
	if (!first_time && has_stone) {
		GameObject.Destroy(bear_water.gameObject);
		GameObject.Destroy(deathzone.gameObject);
		GameObject.Destroy(bear_rocks.gameObject);
	}
}

function OnTriggerEnter (other : Collider) {
	if (!has_stone && first_time) {
		player.GetComponent(CharacterMotor).canControl = false;
		var text_instance : Transform = Instantiate(bear_text_prefab, bear.position + text_offset, Quaternion.identity);
		yield WaitForSeconds(5);
		Destroy(text_instance.gameObject);
		player.GetComponent(CharacterMotor).canControl = true;
		GameObject.Destroy(bear_water.gameObject);
		GameObject.Destroy(deathzone.gameObject);
		first_time = false;
	}
}

function OnLevelWasLoaded (level : int) {
    script = GameObject.Find("GameLogic").GetComponent("GameLogicScript");
    has_stone = script.has_stone;
    first_time = script.first_time; 
}