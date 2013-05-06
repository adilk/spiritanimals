using UnityEngine;
using System.Collections;

public class moviePlay : MonoBehaviour {
	
	public MovieTexture video;
	private float movieTimer; 

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		movieTimer += Time.deltaTime; 
	}
	
	void OnGUI()
	{
		GUI.DrawTexture(new Rect(0, 0, Screen.width, Screen.height), video);
		video.Play();
		
		if(video.duration < movieTimer)
		{
			video.Stop();
			Application.LoadLevel("forestscene");
		}
	}
}
