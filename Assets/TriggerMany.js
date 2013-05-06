#pragma strict

var deer1 : Transform;
var end1 : Transform;
var deer2 : Transform;
var end2 : Transform;
var deer3 : Transform;
var end3 : Transform;
var isActive : boolean = true;

var time1 : float = 0.0;
var time2 : float = 0.0;
var time3 : float = 0.0;

function Start () {

}

function Update () {
	if(isActive == false)
	{
		MoveObject(deer1, deer1.position, end1.position, time1);
		MoveObject(deer2, deer2.position, end2.position, time2);
		MoveObject(deer3, deer3.position, end3.position, time3);
	}
}

function OnTriggerEnter(other : Collider)
{
	deer1.animation.Play("run");
	deer2.animation.Play("run");
	deer3.animation.Play("run");
	isActive = false;
	
	yield WaitForSeconds(10);
	deer1.animation.Stop();
	deer2.animation.Stop();
	deer3.animation.Stop();
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