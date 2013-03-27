using UnityEngine;
using System.Collections;

/*
 * Recieves messages sent from a CharacterMotor script on the
 * attached object and sends the corresponding animation message 
 * to an AnimatedSprite script on the attached object.
 */
[RequireComponent (typeof(AudioSource))]
public class PlayerAnimation : MonoBehaviour {
	public string idleAnimName = "";
	public string runAnimName = "";
	public string jumpAnimName = "";
	public string fallAnimName = "";
	
	private bool idle = false;
	private bool isGrounded = false;
	
	
	
	void OnFall () {
		SendMessage("PlayAnimation", fallAnimName);
	}
	
	void OnLand () {
		SendMessage("PlayAnimationInReverse", jumpAnimName);
		isGrounded = true;
	}
	
	void GetGrounded (bool grounded) {
		isGrounded = grounded;
	}
	
	void GetVelocity (Vector3 velocity) {
		if ( velocity.magnitude < 0.1 && !idle )
		{
			SendMessage("PlayAnimation", idleAnimName);
			idle = true;
			audio.Stop();
		}
		else if ( velocity.magnitude > 0.1 && idle && isGrounded )
		{
			SendMessage("PlayAnimation", runAnimName);
			idle = false;
			audio.Play();
			
		}
	}
	
	void OnJump () {
		SendMessage("PlayAnimation", jumpAnimName);
		audio.Stop();
		isGrounded = false;
	}
	
	void OnExternalVelocity () {
		
	}
	
}