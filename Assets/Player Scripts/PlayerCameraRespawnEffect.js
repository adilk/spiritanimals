#pragma strict

var whiteTexture : Texture;
private var fade : boolean = false;
private var alphaFadeValue : float = 1.0f;

function Start() {
	if (!this.camera)
	{
		Debug.LogError("PlayerCameraRespawnEffect: Script not placed on a camera object.");
		return;
	}
}

function OnGUI() {
	if ( fade )
	{
		alphaFadeValue -= Mathf.Clamp01(Time.deltaTime * 2);
		GUI.color = new Color(1, 1, 1, alphaFadeValue);
		GUI.DrawTexture( new Rect(0, 0, Screen.width, Screen.height ), whiteTexture );
	}
	
	if ( alphaFadeValue <= 0.15 )
	{
		fade = false;
		alphaFadeValue = 1.0f;
	}
}

function RespawnFade() {
	fade = true;
	alphaFadeValue = 1.0f;
}