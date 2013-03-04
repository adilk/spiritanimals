#pragma strict

var spriteManager : GameObject; //reference to the SpriteManager gameObject
var spriteWorldWidth : float = 1.0f;
var spriteWorldHeight : float = 1.0f;
var position : Vector2 = Vector2(0,0); //The uv coodinates of the base sprite when unanimated
var dimensions : Vector2 = Vector2(0,0); //The dimensions of the sprite, which applies to all frames
var animationInfo : SpriteAnimation[];

protected var sprite : Sprite; //Reference to the sprite that is created

class SpriteAnimation
{
	var name : String = "newAnimation"; //The name of the animation
	var loopNumber : int = 0; //-1 to loop infinitely
	var loopReverse : boolean = false; //if true, the animation will play normally, and then immediatly after in reverse
	
	var start : Vector2 = Vector2(0,0); //The uv coordinates of the lower-left corner of the start sprite
	var rows : int = 0;
	var cols : int = 0;
	var totalCells : int = 0;
	var fps : float = 30.0f;
}

function DebugAnim()
{
	Debug.Log("Anim Done");
}

function Start () {
	//get the actual SpriteManager component
	var mySpriteManager:SpriteManager = spriteManager.GetComponent("LinkedSpriteManager") as SpriteManager;
	//initialize the sprite
	sprite = mySpriteManager.AddSprite(this.gameObject, spriteWorldWidth, spriteWorldHeight, 
		position.x, position.y, dimensions.x, dimensions.y, false);
		
	for (var anim : SpriteAnimation in animationInfo)
	{
		var uvAnim : UVAnimation = new UVAnimation();
		
		uvAnim.name = anim.name;
		uvAnim.loopCycles = anim.loopNumber;
		uvAnim.loopReverse = anim.loopReverse;
		uvAnim.framerate = anim.fps;
		
		uvAnim.BuildUVAnim(anim.start, dimensions, anim.cols, anim.rows, anim.totalCells, anim.fps);
		sprite.AddAnimation(uvAnim);
	}
	sprite.SetAnimCompleteDelegate(DebugAnim);
}

function Update () {
	//Animation Testing code
	if ( Input.GetKey(KeyCode.UpArrow) )
		this.SendMessage("PlayAnimation", "testAnimation");
}

function PlayAnimation(animationName : String)
{
	if ( animationName == "" )
	{
		Debug.Log(sprite.index + " : PlayAnimation: You must pass the name of the animation to play.");
		return;
	}
	sprite.PlayAnim(animationName);
}