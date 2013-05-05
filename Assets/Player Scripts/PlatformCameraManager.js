#pragma strict

var camTarget : Transform;
private var offset : float = 0;

function Awake () {
	offset = camTarget.position.y - transform.position.y;
}

function Update () {
	camTarget.position.y = transform.position.y + offset;
	camTarget.position.z = transform.position.z;
}