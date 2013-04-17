#pragma strict

var camTarget : Transform;

function Start () {

}

function Update () {

	transform.LookAt(camTarget);

}