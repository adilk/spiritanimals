using UnityEngine;
using System.Collections;

public class CaveStart : MonoBehaviour {
	public Texture whiteTexture;
	private bool fade = true;
	private float alphaFadeValue = 1.0f;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	
	void OnGUI() {		
		if ( fade )
		{
			alphaFadeValue -= Mathf.Clamp01(Time.deltaTime / 5);
    		GUI.color = new Color(1, 1, 1, alphaFadeValue);
    		GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), whiteTexture );
		}
		if (alphaFadeValue == 0)
		{
			fade = false;	
		}
	}
}
