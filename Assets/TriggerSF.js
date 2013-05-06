#pragma strict

var sf : Transform;
var sf2 : Transform;
var time : float = 0.0;

function Start () {

}

function Update () {
}

function OnTriggerEnter(other : Collider)
{
	sf.animation.Play("raise");
	sf2.animation.Play("raise");
	yield WaitForSeconds(time);
	sf.animation.Stop();
	sf2.animation.Stop();
}
