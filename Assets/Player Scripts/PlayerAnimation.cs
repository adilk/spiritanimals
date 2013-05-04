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
	public string grabAnimName = "";
	
	private bool idle = false;
	private bool isGrounded = false;
	
	
	
	void OnFall () {
		animation.Play(fallAnimName);
	}
	
	void OnGrab() {
		animation.Play (grabAnimName);
	}
	
	void OnLand () {
		animation.Play(runAnimName);
		isGrounded = true;
	}
	
	void GetGrounded (bool grounded) {
		isGrounded = grounded;
	}
	
	void GetVelocity (Vector3 velocity) {
		if ( velocity.magnitude < 0.1 && !idle )
		{
			animation.Play(idleAnimName);
			idle = true;
			audio.Stop();
		}
		else if ( velocity.magnitude > 0.1 && idle && isGrounded )
		{
			animation.Play(runAnimName);
			idle = false;
			audio.Play();
			
		}
	}
	
	void OnJump () {
		animation.Play(jumpAnimName);
		audio.Stop();
		isGrounded = false;
	}
	
	void OnExternalVelocity () {
		
	}
	
}