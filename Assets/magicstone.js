#pragma strict
var song : AudioSource;
var songObj : Transform;  

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider)
{
	songObj.audio.Play();
	transform.active = false; 
}