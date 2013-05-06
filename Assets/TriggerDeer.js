#pragma strict

var deer : Transform;
var end1 : Transform;
var time : float = 0.0;
var isActive : boolean = true;

function Start () {

}

function Update () {
	if(isActive == false)
	{
		MoveObject(deer, deer.position, end1.position, time);
		
	}
}

function OnTriggerEnter(other : Collider)
{
	deer.animation.Play("run");
	isActive = false;
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