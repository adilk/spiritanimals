#pragma strict

var turtle : Transform;
var end1 : Transform;
var isActive : boolean = true;

function Start () {

}

function Update () {
	if(isActive == false)
	{
		MoveObject(turtle, turtle.position, end1.position, 4);
		
	}
}

function OnTriggerEnter(other : Collider)
{
	turtle.animation.Play("move");
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