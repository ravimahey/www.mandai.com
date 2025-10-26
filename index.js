# TEST 4
const addAnimation = (ids, inAni, outAni) => {
	const element_ids = ids.split(" ");
	console.log(element_ids);
	let elements = [];
	element_ids.forEach((id, key) => {
		elements = [...elements, document.querySelector("#" + id)];
	});
	console.log({ ...elements });
	// const element = document.querySelector("#" + e);

	elements.forEach((element, index) => {
		element.classList.remove(inAni);
		element.classList.add(outAni);
	});
};

const toggleElement = (e, open) => {
	const element = document.querySelector("#" + e);
	if (!open) {
		element.classList.remove("hidden");
	} else {
		setTimeout(() => {
			console.log("Colling hidden");
			element.classList.add("hidden");
		}, 1000);
	}
};

let menuIsOpen = false;
const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
mobileMenuBtn.addEventListener("click", () => {
	if (menuIsOpen) {
		addAnimation(
			"side-nav-menu-1 side-nav-menu-2",
			"animate-lr",
			"animate-rl"
		);
		toggleElement("side-nav-mobile", menuIsOpen);
		menuIsOpen = false;
	} else {
		addAnimation(
			"side-nav-menu-1 side-nav-menu-2",
			"animate-rl",
			"animate-lr"
		);
		toggleElement("side-nav-mobile", menuIsOpen);

		menuIsOpen = true;
	}
});

let birdParadiseViewAllOpen = false;
const birdParadiseViewAll = document.querySelector("#bird-paradise-view-all");

birdParadiseViewAll.addEventListener("click", () => {
	console.log(birdParadiseViewAllOpen);
	if (birdParadiseViewAllOpen) {
		addAnimation("bird-paradise-4", "animate-down", "animate-up");
		toggleElement("bird-paradise-4", birdParadiseViewAllOpen);
		birdParadiseViewAllOpen = false;
	} else {
		addAnimation("bird-paradise-4", "animate-up", "animate-down");
		toggleElement("bird-paradise-4", birdParadiseViewAllOpen);
		birdParadiseViewAllOpen = true;
	}
});

let activeListId = false;
const toogleFooterLists = async (listId) => {
	if (activeListId != false && (activeListId != activeListId) != listId) {
		const list = document.querySelector("#" + activeListId);
		addAnimation(activeListId, "animate-down", "animate-up");

		await setTimeout(() => {
			list.classList.remove("flex");
			list.classList.add("hidden");
		}, 1000);
	}
	activeListId = listId;
	const list = document.querySelector("#" + listId);
	if (list.classList.contains("hidden")) {
		list.classList.remove("hidden");
		list.classList.add("flex");
		addAnimation(listId, "animate-up", "animate-down");
	} else {
		addAnimation(listId, "animate-down", "animate-up");
		setTimeout(() => {
			list.classList.remove("flex");
			list.classList.add("hidden");
		}, 1000);
	}
};

const footerMenu = document.querySelectorAll(".footer-menu");
console.log(footerMenu);
footerMenu.forEach((element) => {
	element.addEventListener("click", (e) => {
		toogleFooterLists("footer-list-" + element.id);
	});
});

const toggleDropDown = (elementId) => {
	const element = document.querySelector('#'+elementId);
	if(element.classList.contains('hidden')){
		element.classList.remove('hidden');
		element.classList.add('flex');
	}else{
		setTimeout(() => {
			if (!onPlane){
				element.classList.remove('flex');
				element.classList.add('hidden');
			}
				
		}, 1000);
	}
};

const navDropDown = document.querySelectorAll(".nav-dropdown-item");

navDropDown.forEach((element) => {
	element.addEventListener("mouseover", () => {
		toggleDropDown('nav-dropdown-1');
	});
	element.addEventListener("mouseout", () => {
		console.log("OUT");
		toggleDropDown('nav-dropdown-1');
	});
});

const navDropDownPanel = document.querySelectorAll("#nav-dropdown-1");
let onPlane = false; 
navDropDownPanel.forEach((element) => {
	element.addEventListener("mouseover", () => {
		toggleDropDown('nav-dropdown-1');
		onPlane=true;
	});
	element.addEventListener("mouseout", () => {
		console.log("OUT");
		onPlane= false;
		toggleDropDown('nav-dropdown-1');

	});
});
