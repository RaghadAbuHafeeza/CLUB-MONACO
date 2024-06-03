document.addEventListener("DOMContentLoaded", function () {
  const refineButton = document.getElementById("refineButton");
  const filtersMenu = document.querySelector(".filter-panel5");
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);


  //HIDE FILTERS and expand
  const toggleButton = document.getElementById("toggleFilters");
  const filterCategory = document.querySelector(".filter-category");
  const productsSection = document.querySelector(".products");

  toggleButton.addEventListener("click", function () {
    const isHidden = filterCategory.classList.toggle("hidden");

    if (isHidden) {
      toggleButton.textContent = "SHOW FILTERS";
      productsSection.classList.add("full-width");

      document.querySelectorAll(".expand").forEach((col) => {
        col.classList.remove("col-md-9");
        col.classList.add("col-md-12");
      });
    } else {
      toggleButton.textContent = "HIDE FILTERS";
      productsSection.classList.remove("full-width");

      document.querySelectorAll(".expand").forEach((col) => {
        col.classList.remove("col-md-12");
        col.classList.add("col-md-9");
      });
    }
  });


  // Checkbox event listeners for adding or removing selected items
  document
    .querySelectorAll('input[type="checkbox"][name="type"]')
    .forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        this.checked
          ? addSelectedItem(this.value, this.id)
          : removeSelectedItem(this.value);
      });
    });



  // Function 1
  // Functions to manage selected items in filters
  function addSelectedItem(value, id) {
    const selectedList = document.querySelector(".selected-filters5");
    const newItem = document.createElement("div");
    newItem.className = "selected-item5";
    newItem.innerHTML = `<span>${value}</span> <button onclick="removeFilter(this)">×</button>`;
    newItem.dataset.id = id;
    selectedList.appendChild(newItem);
    selectedList.style.display = "block"; // Ensure the container is visible when items are added
  }

  // Function 2
  function removeSelectedItem(value) {
    const itemsToRemove = document.querySelectorAll(`.selected-item5 span`);
    itemsToRemove.forEach((item) => {
      if (item.textContent === value) {
        item.parentElement.remove();
      }
    });
    if (!document.querySelector(".selected-filters5").children.length) {
      document.querySelector(".selected-filters5").style.display = "none";
    }
  }
});

// Function 3
function toggleFilterPanel() {
    var panel = document.getElementById("filterPanel");
    var overlay = document.querySelector(".overlay");
  
    if (panel !== null) {
      var style = window.getComputedStyle(panel);
      if (style.right === "0px") {
        panel.style.right = "-300px";
        overlay.style.display = "none";
      } else {
        panel.style.right = "0px";
        overlay.style.display = "block";
      }
    } else {
      overlay.style.display = "block";
      overlay.style.display = "block"; 
    }
  }  

// Function 4
function clearFilters() {
  document
    .querySelectorAll('.filter-panel5 input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.checked = false;
    });
  const selectedItems = document.querySelectorAll(".selected-item5");
  selectedItems.forEach((item) => {
    item.style.display = "none";
  });
}

// Function 5
function closeFilters() {
  const filterPanel = document.getElementById("filterPanel");
  const overlay = document.querySelector(".overlay");

  filterPanel.style.right = "-300px";
  filterPanel.style.display = "none";
  overlay.style.display = "none";
}

// Function 6
// Type     -
function toggleTypeOptions() {
  var filterGroup = document.querySelector(".filter-group5");
  if (filterGroup.style.display === "none") {
    filterGroup.style.display = "flex";
    filterGroup.style.flexDirection = "column";
  } else {
    filterGroup.style.display = "none";
  }
}

// Function 7
function removeFilter(button) {
  button.parentElement.remove(); // remove parent(filter-panel5) button
  if (!document.querySelector(".selected-filters5").children.length) {
    document.querySelector(".selected-filters5").style.display = "none";
  }
}

// Hide the Refine button on large screens
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("refineButton");

  // Function 8
  function adjustButtonVisibility() {
    if (window.innerWidth > 1024) {
      button.style.display = "none";
    } else {
      button.style.display = "block";
    }
  }
  // Execute the function when the page loads
  adjustButtonVisibility();
  // Re-execute the function when the window size changes
  window.onresize = adjustButtonVisibility;
});
