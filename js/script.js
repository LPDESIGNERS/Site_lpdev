function toggleDropdown(event) {
	event.preventDefault();
	const dropdownContent = event.target.nextElementSibling;
	dropdownContent.style.display =
		dropdownContent.style.display === "block" ? "none" : "block";
}

function filterProducts(category) {
	const products = document.querySelectorAll(".product");
	products.forEach((product) => {
		if (category === "all") {
			product.style.display = "block";
		} else {
			if (product.classList.contains(category)) {
				product.style.display = "block";
			} else {
				product.style.display = "none";
			}
		}
	});
}
function toggleSubmenu(event) {
	event.preventDefault();
	const submenuContent = event.target.nextElementSibling;
	submenuContent.style.display =
		submenuContent.style.display === "block" ? "none" : "block";
}

function filterProducts(category) {
	const products = document.querySelectorAll(".product");
	products.forEach((product) => {
		if (category === "all") {
			product.style.display = "block";
		} else {
			if (product.classList.contains(category)) {
				product.style.display = "block";
			} else {
				product.style.display = "none";
			}
		}
	});
}
function toggleDropdown(event) {
	event.preventDefault();
	const dropdownContent = event.target.nextElementSibling;
	dropdownContent.style.display =
		dropdownContent.style.display === "block" ? "none" : "block";
}

function toggleSubmenu(event) {
	event.preventDefault();
	const submenuContent = event.target.nextElementSibling;
	submenuContent.style.display =
		submenuContent.style.display === "block" ? "none" : "block";
}

function filterProducts(category) {
	const products = document.querySelectorAll(".product");
	products.forEach((product) => {
		if (category === "all") {
			product.style.display = "block";
		} else {
			if (product.classList.contains(category)) {
				product.style.display = "block";
			} else {
				product.style.display = "none";
			}
		}
	});
}
