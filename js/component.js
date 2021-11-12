const template = document.createElement('template');

template.innerHTML = `
<style>
h1,h2,h3{color: #c3a047;}
hr {
	width:auto;
	height:1.5px;
	background-color:#484848;
	border:none;
	margin-left: 5px;
	margin-right: 5px;
}
.mastery-level , .upgrade-level {
	text-transform: uppercase;
	display: flex;
	vertical-align: middle;
	justify-content: start;
	align-items: center;
	display: grid;
}
.mastery-level {grid-template-columns: 8% 20% 62% 10%;}
.upgrade-level {grid-template-columns: 8% 46% 36% 10%;}
.mastery-level::before , .upgrade-level::before{
	width: 30px; 
	height: 30px;
}
.mastery-level::before{content: url('img/allied-star.svg');}
.upgrade-level::before{content: url('img/regeneration.svg');}

</style>
<div>
<h3 class="skill-name"></h3>
<h4><slot name="skillDescription"/><h4>
</div>
<div class="mastery-level">
<h4><slot name="masteryLevel"/></h4><hr>
<h4><slot name="masteryNumber"/></h4>
</div>
<div class="upgrade-level">
<h4><slot name="upgradeLevel"/></h4><hr>
<h4><slot name="upgradeNumber"/></h4>
</div>
`;

class MyCom extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector('.skill-name').innerText = this.getAttribute('name');
	}
}


window.customElements.define('my-com', MyCom);
