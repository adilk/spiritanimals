#pragma strict

var endMove : Transform;
private var startPos : Vector3;
var logObj : Transform;
 
function Start () {
	startPos = transform.position;
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

function OnTriggerEnter(other : Collider) {
	var pointB = endMove.position;
	var pointA = startPos;
	yield MoveObject(logObj, pointA, pointB, 7.0);
	
	
}
