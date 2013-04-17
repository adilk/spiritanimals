#pragma strict
private var currentPlayer : GameObject;
private var touchingUnmovable : boolean;

function Start() {
   currentPlayer = GameObject.FindWithTag("Player");
   touchingUnmovable = false;
}

function Update () {

}

function OnCollisionEnter(collision : Collision) {
	  if (collision.gameObject.tag == "Unmovable")
	  {
//	  		currentPlayer.SendMessage("HitUnmovable", this.gameObject);
			touchingUnmovable = true;
	  }
}

function OnCollisionExit(collision : Collision) {
	  if (collision.gameObject.tag == "Unmovable")
	  {
//	  		currentPlayer.SendMessage("ExitHitUnmovable", this.gameObject);
			touchingUnmovable = false;
	  }
}


function isTouchingUnmovable(){
	return touchingUnmovable;
}