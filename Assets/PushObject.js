// pushes rigid bodies that character touches
var pushPower = 5.0;
function OnControllerColliderHit (hit : ControllerColliderHit)
{
	var body : Rigidbody = hit.collider.attachedRigidbody;
	// no collisions occurred
	if(body == null || body.isKinematic)
		return;
	
	// objects don't move below character
	if(hit.moveDirection.y < -0.3)
		return;
		
	// calculate push direction from move direction
	// objects are only pushed from the sides, never up and down
	var pushDir : Vector3 = Vector3 (hit.moveDirection.x, 0, hit.moveDirection.z);
	body.velocity = pushDir * pushPower;
}