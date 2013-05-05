using UnityEngine;
using System.Collections;

[RequireComponent (typeof(AudioSource))]
public class TransitionSound : MonoBehaviour {
	
	public int spawn_distance = 1;
	public Transform spawn1;
	public Transform player;
	private bool startSound = true;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (startSound && Vector3.Distance(player.transform.position, spawn1.position) < spawn_distance) 
		{
			audio.Play ();
			startSound = false;
		}
	}
}
