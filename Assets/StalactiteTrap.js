#pragma strict
/**
 * Script for a shaking stalactite.
 * GameObject must have :
 *		- Ridgidboy w/ gravity = false
 *		- Collider w/ trigger = true
 */

// The amount of time the stalactice will shake
var shakeTime : int = 2;
// Controls how fast the shake is
var shakeMultiplier : int = 5;
// The size of the sprite, used to set the rotate pivot and collider
var spriteDimensions : Vector3;
// The point at which a player hit by this will respawn
var respawn : Transform[];

private var shake : boolean = false;
private var dropped : boolean = false;
// Timer
private var time : float = 0.0f;
private var rot : float = 0.0f;
// Rotation pivot
private var pivot : Vector3;

function Start() {
	if ( rigidbody.useGravity == true )
		Debug.LogError("Stalactites should not have gravity enabled.");
	if ( collider.isTrigger == false )
		Debug.LogError("stalactites must have colliders set as triggers.");
		
	pivot = Vector3( transform.position.x, transform.position.y + spriteDimensions.y/2,
		transform.position.z );
}

function Update() {
	if ( shake )
	{
		if ( time < shakeTime )
		{	// Shake the stalactite
			transform.RotateAround( pivot, Vector3.right, 
				shakeMultiplier * Mathf.Cos( rot ) / ( 2 * Mathf.PI ) );
			time += Time.deltaTime;
			rot += Time.deltaTime * shakeMultiplier;
		}
		else
		{
			// Delete the trigger and add a physics collider
			if ( !dropped )
			{	collider.isTrigger = false;
				var boxCollider = GetComponent(BoxCollider) as BoxCollider;
				boxCollider.center = Vector3.zero;
				boxCollider.size = spriteDimensions;
				
				// drop the stalactite
				rigidbody.isKinematic = false;
				rigidbody.useGravity = true;
				dropped = true;
			}
		}
	}
}

function OnTriggerEnter(collision : Collider) {
	if ( collision.collider.gameObject.tag == "Player" )
	{
		shake = true;
	}
}

function OnCollisionEnter ( hit : Collision ) {
	if ( hit.collider.tag == "Player") {
		// Play the fade effect
		var camera = GameObject.FindGameObjectWithTag("MainCamera");
		camera.SendMessage("RespawnFade");
		// Respawn the player
		var element : int = Random.Range(0, respawn.length);
		hit.transform.position = respawn[element].position;
	}
	else {
		gameObject.SetActive(false);
	}
}

@script RequireComponent (BoxCollider)
@script RequireComponent (Rigidbody)