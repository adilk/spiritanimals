var runSpeed:float;
var runAnimation:float;
var idleAnimation:float;
var gravity: float;
var jumpSpeed: float;
var front:Transform;
var back:Transform;

var upRange : float = 1.0;
var downRange : float = 1.0;
var waveOffset : float = 0.0;

internal var yStartPos: float;
internal var upPos : float;
internal var downPos : float;

var speed : float = 0.2;

private var moveDirection : Vector3 = Vector3.zero;
private var charController:CharacterController;
private var walking:boolean;
private var jumpNow:boolean;
private var jumpTime:float;


function Start(){
	charController = GetComponent(CharacterController);
	idleAnimation = 1;
	
	yStartPost = transform.position.y;
}

function Update() {
	if(Input.GetAxis("Horizontal") > 0){
		transform.LookAt(front);
		walk();
		walking = true;
	}
	else if(Input.GetAxis("Horizontal") < 0)
	{
		transform.LookAt(back);
		walk();
		walking = true;
	}
	else
	{
		walking = false;
	}
	
	if(!walking)
	{
		animation["idle"].speed = idleAnimation;
		animation.CrossFade("idle");
	}
	
	// jump
	if((Input.GetButton("Jump") || Input.GetKeyUp("space")) && charController.isGrounded){
		jumpNow = true;
		jumpTime = 0;
		jumpSpeed = 50;
	}
	if(jumpNow){
		jump();
	}
	
	// gravity
	if(!charController.isGrounded)
	{
		charController.Move(transform.up * -gravity * Time.deltaTime);
	}
}

function jump()
{
	animation.CrossFade("jump");
	jumpTime += 1 * Time.deltaTime;
	if(jumpTime < 0.6)
	{
		moveDirection.y = jumpSpeed;
		charController.Move(transform.up * jumpSpeed * Time.deltaTime);
	}
	if(jumpSpeed > 0)
	{
		moveDirection.y -= gravity * Time.deltaTime;
		charController.Move(moveDirection * Time.deltaTime);
	}
	
	yield WaitForSeconds(0.15);
	jumpNow = false;
	
	
}

function walk(){
	charController.Move(transform.forward * runSpeed * Time.deltaTime);
	animation["run"].speed = runAnimation;
	animation.CrossFade("run");
}
