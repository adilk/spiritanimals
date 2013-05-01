#pragma strict

var triggerSound : AudioSource;
var waypoint :Transform[];
var log : Transform;
var startPos : Transform;

function Start () {

}

function Update () {

}

function MoveObject (thisTransform : Transform, startPos : Vector3, endPos : Vector3, time : float) {
    var i = 0.0;
    var rate = 1.0/time;
    while (i < 1.0) {
        i += Time.deltaTime * rate;
        thisTransform.position = Vector3.Lerp(startPos, endPos, i);
        yield; 
    }
}

function OnTriggerEnter (victim : Collider) {

	if ( victim.collider.tag == "Player") {
		var element : int = Random.Range(0, waypoint.length);
		victim.transform.position = waypoint[element].position;
		if (triggerSound != null)
		{
			triggerSound.Play();
		}
		if (log != null && startPos != null) {
			yield MoveObject(log, log.position, startPos.position, 1.0);
		}
	}
	else {
		//any other object is destroyed
		Destroy(victim.gameObject);
	}
}