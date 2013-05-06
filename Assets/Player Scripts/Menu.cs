using UnityEngine;
using System.Collections;

/*
 * Defines a main menu consisting of an image which fades
 * to white and loads the first level on mouse click.
 */
[RequireComponent (typeof (Camera))]
[RequireComponent (typeof(AudioSource))]
[RequireComponent (typeof(AudioSource))]
public class Menu : MonoBehaviour {
	
	public MovieTexture theMovie;
	public AudioSource audio;
	public AudioSource introVid; 
	public AudioSource startMusic;
	public Texture menuTexture;
	public Texture whiteTexture;
	private float movieTimer;
	private bool fade = false;
	private float alphaFadeValue = 0.0f;
	private bool isPlaying = false; 

	// Use this for initialization
	void Start () {
		startMusic.Play();
	}
	
	// Update is called once per frame
	void Update () {
		if(theMovie.isPlaying)
		{
			movieTimer += Time.deltaTime; 
		}
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
		
		if (Input.GetMouseButton(0) && isPlaying == false)
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
			startMusic.Stop();
			GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), theMovie);
			
			if(isPlaying == false)
			{
				isPlaying = true;
				introVid.Play();
				theMovie.Play();
			}
				
			if(theMovie.duration < movieTimer)
			{
				theMovie.Stop();
				Application.LoadLevel("forestscene");
			}
		}
	}
}
