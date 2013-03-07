enum Plane { XY, XZ, YZ }

var runSpeed : float = 1.0;
var runLeftAnimation : String;
var runRightAnimation : String;
var idleAnimation : String;
var jumpAnimation : String;
var plane : Plane;

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;

private var moveDirection : Vector3 = Vector3.zero;
private var controller : CharacterController;
private var lastAnim : String;
private var currentAnim : String;

function Start(){
	controller = GetComponent(CharacterController);
	lastAnim = "";
	currentAnim = idleAnimation; 
}

function Update() {
    if (controller.isGrounded) {
        // We are grounded, so recalculate
        // move direction directly from axes
        
        if (plane == Plane.XY || plane == Plane.XZ) 
        {
			moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,
            	Input.GetAxis("Vertical"));
	    }
	    else
	    {
			moveDirection = Vector3(0, Input.GetAxis("Vertical"),
            	Input.GetAxis("Horizontal"));
	    }
	    
	    // Set run animation if moving
	    if ( Input.GetAxis("Horizontal") != 0 )
	    {
	        if ( Input.GetAxis("Horizontal") < 1 )
            	currentAnim = runLeftAnimation;
            else
            	currentAnim = runRightAnimation;
        }
       
        moveDirection = transform.TransformDirection(moveDirection);
        moveDirection *= speed;
        
        if (Input.GetButton ("Jump"))
        {
            moveDirection.y = jumpSpeed;
            currentAnim = jumpAnimation;
        }
    }

    // Apply gravity when not on the ground
    if ( !(controller.collisionFlags && CollisionFlags.Below) )
    	moveDirection.y -= gravity * Time.deltaTime;
    
    // Move the controller
    if ( moveDirection != Vector3.zero )
    	controller.Move(moveDirection * Time.deltaTime);
    else
    	currentAnim = idleAnimation;
    
    // Animate the Sprite
    if ( lastAnim != currentAnim )
    {
    	SendMessage("PlayAnimation", currentAnim);
    }
    lastAnim = currentAnim;
}