#pragma strict
var obj : Transform;
function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider)
{
	obj.audio.Play();
}