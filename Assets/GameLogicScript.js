#pragma strict

var has_stone : boolean;
var first_time : boolean;

function Start () {
	has_stone = false;
	first_time = true;
}

function SetFirstTime() {
	first_time = !first_time;
}

function Update () {

}

function Awake () {
   DontDestroyOnLoad (transform.gameObject);
}