enum Plane { XY, XZ, YZ }

var runSpeed:float;
var runAnimation:String;
var idleAnimation:String;
var jumpAnimation:String;
var plane:Plane;

var speed : float = 6.0;
var jumpSpeed : float = 8.0;
var gravity : float = 20.0;

private var moveDirection : Vector3 = Vector3.zero;
private var charController:CharacterController;
private var lastAnim : String;

function Start(){
	charController = GetComponent(CharacterController);
}

function Update() {
	var controller : CharacterController = GetComponent(CharacterController);
	var currentAnim : String = idleAnimation; 
    if (controller.isGrounded) {
        // We are grounded, so recalculate
        // move direction directly from axes
        
        if (plane == Plane.XY || plane == Plane.XZ) 
        {
			moveDirection = Vector3(Input.GetAxis("Horizontal"), 0,
                                Input.GetAxis("Vertical"));
            currentAnim = runAnimation;
	    } else {
			moveDirection = Vector3(0, Input.GetAxis("Vertical"),
                                Input.GetAxis("Horizontal"));
            currentAnim = runAnimation;
	    }
       
        moveDirection = transform.TransformDirection(moveDirection);
        moveDirection *= speed;
        
        if (Input.GetButton ("Jump")) {
            moveDirection.y = jumpSpeed;
            currentAnim = jumpAnimation;
        }
    }

    // Apply gravity
    moveDirection.y -= gravity * Time.deltaTime;
    
    // Move the controller
    controller.Move(moveDirection * Time.deltaTime);
    // Animate the Sprite
    if ( lastAnim != currentAnim )
    {
    	SendMessage("PlayAnimation", currentAnim);
    }
    lastAnim = currentAnim;
}