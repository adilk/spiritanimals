#pragma strict 

var deer1 : Transform;
var end : Transform;
var deer2 : Transform;
var end2 : Transform;
var deer3 : Transform;
var end3 : Transform;
var deer4 : Transform;
var end4 : Transform;
var deer5 : Transform;
var end5 : Transform;

var person1 : Transform;
var person2 : Transform;
var person3 : Transform;

var bear : Transform;
var wolf : Transform;
var eagle : Transform;

var isActive : boolean = true;


function Start () {

}

function Update () {
	if(isActive == false)
	{
		MoveObject(deer1, deer1.position, end.position, 4);
		MoveObject(deer2, deer2.position, end2.position, 6);
		MoveObject(deer3, deer3.position, end3.position, 6);
		MoveObject(deer4, deer4.position, end4.position, 5);
		MoveObject(deer5, deer5.position, end5.position, 8);
	}
}

function OnTriggerEnter(other : Collider)
{
	deer1.animation.Play("run");
	deer2.animation.Play("run");
	deer3.animation.Play("run");
	deer4.animation.Play("run");
	deer5.animation.Play("run");
	
	isActive = false;
	
	person1.animation.Play("bow");
	person2.animation.Play("bow");
	person3.animation.Play("bow");
	
	eagle.animation.Play("fly");
	bear.animation.Play("b_walk");
	wolf.animation.Play("howl");
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