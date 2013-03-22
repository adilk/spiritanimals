using UnityEngine;
using System.Collections;

/*
 * Defines a main menu consisting of an image which fades
 * to white and loads the first level on mouse click.
 */
[RequireComponent (typeof (Camera))]
[RequireComponent (typeof(AudioSource))]
public class Menu : MonoBehaviour {
	public Texture menuTexture;
	public Texture whiteTexture;
	private bool fade = false;
	private float alphaFadeValue = 0.0f;

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {
	}
	
	void OnGUI() {
		if (!menuTexture)
		{
			Debug.LogError("Menu: Assign a Texture in the inspector.");
			return;
		}
		if (!this.camera)
		{
			Debug.LogError("Menu: Script not placed on a camera object.");
			return;
		}
		GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height), 
			menuTexture, ScaleMode.ScaleToFit, true, camera.aspect);
		
		if (Input.GetMouseButton(0))
		{
			fade = true;
			audio.Play();
		}
		
		if ( fade )
		{
			alphaFadeValue += Mathf.Clamp01(Time.deltaTime / 8);
    		GUI.color = new Color(1, 1, 1, alphaFadeValue);
    		GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), whiteTexture );
		}
		
		if ( alphaFadeValue >= 0.85 )
		{
			Application.LoadLevel("forestscene");
		}
	}
}
