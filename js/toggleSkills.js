function toggleSkillLegendary() {
	document.querySelector('#legendary-skill').style.display = 'block';
	document.querySelector('#incredible-skill').style.display = 'none';
	document.querySelector('#superior-skill').style.display = 'none';

	document.querySelector('#legendary-skill-btn').setAttribute('disabled', '');
	document.querySelector('#incredible-skill-btn').removeAttribute('disabled', '');
	document.querySelector('#superior-skill-btn').removeAttribute('disabled', '');
}
function toggleSkillIncredible() {
	document.querySelector('#incredible-skill').style.display = 'block';
	document.querySelector('#superior-skill').style.display = 'none';
	document.querySelector('#legendary-skill').style.display = 'none';

	document.querySelector('#incredible-skill-btn').setAttribute('disabled', '');
	document.querySelector('#superior-skill-btn').removeAttribute('disabled', '');
	document.querySelector('#legendary-skill-btn').removeAttribute('disabled', '');
}
function toggleSkillSuperior() {
	document.querySelector('#superior-skill').style.display = 'block';
	document.querySelector('#incredible-skill').style.display = 'none';
	document.querySelector('#legendary-skill').style.display = 'none';

	document.querySelector('#superior-skill-btn').setAttribute('disabled', '');
	document.querySelector('#incredible-skill-btn').removeAttribute('disabled', '');
	document.querySelector('#legendary-skill-btn').removeAttribute('disabled', '');
}