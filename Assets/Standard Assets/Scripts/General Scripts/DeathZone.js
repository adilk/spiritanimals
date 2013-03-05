#pragma strict

var waypoint :Transform[];


function Start () {

}

function Update () {

}

function OnTriggerEnter (victim : Collider) {

	if ( victim.collider.tag == "Player") {
		var element : int = Random.Range(0, waypoint.length);
		victim.transform.position = waypoint[element].position;
	}
	else {
		//any other object is destroyed
		Destroy(victim.gameObject);
	}
}