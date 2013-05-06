using UnityEngine;
using System.Collections;

/*
 * Defines a main menu consisting of an image which fades
 * to white and loads the first level on mouse click.
 */
public class Cave2Secret : MonoBehaviour {
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
		if ( fade )
		{
			alphaFadeValue += Mathf.Clamp01(Time.deltaTime / 8);
    		GUI.color = new Color(1, 1, 1, alphaFadeValue);
    		GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), whiteTexture );
		}
		
		if ( alphaFadeValue >= 0.85 )
		{
			Application.LoadLevel("secretscene");
		}
	}
	
	void OnTriggerEnter( Collider c )
	{
		fade = true;
	}
}
