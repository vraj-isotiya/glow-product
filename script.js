const markersContainer = document.getElementById("markerContainer");
const cardStack = document.getElementById("cardStack");
const vehicleButtons = document.querySelectorAll(".vehicle-selector button");

const vehicleOrder = ["jeep", "truck", "car", "bike", "cybertruck"];
let currentVehicleIndex = 0;

const carousel = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");

function changeVehicle(offset) {
  currentVehicleIndex =
    (currentVehicleIndex + offset + vehicleOrder.length) % vehicleOrder.length;

  const nextVehicle = vehicleOrder[currentVehicleIndex];

  // Move the carousel to the correct image
  const imageWidth = images[0].clientWidth;
  carousel.style.transform = `translateX(-${
    currentVehicleIndex * imageWidth
  }px)`;

  // Highlight active vehicle button if buttons exist
  vehicleButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.vehicle === nextVehicle);
  });

  // Call your custom render function
  renderVehicle(nextVehicle);
}

// Handle prev/next button clicks
document.querySelector(".prev-btn").addEventListener("click", () => {
  changeVehicle(-1);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  changeVehicle(1);
});
const buttons = document.querySelectorAll(".vehicle-selector button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Optional logic
    const vehicleType = button.dataset.vehicle;
    console.log("Selected vehicle:", vehicleType);
  });
});

const vehicleData = {
  jeep: [
    {
      title:
        "XKmax LED Headlight Kit for Jeep | RGBW Chasing Halo & App Control | For Wrangler & Gladiator",
      price: "$755.99",
      img: "images/jeep variant 1.jpg",
      pos: ["30%", "13%"],
    },
    {
      title:
        "XKmax RGBW LED Rock Light Kit with Color Chasing | App-controlled",
      price: "$287.99",
      img: "images/jeep variant 2.jpg",
      pos: ["82%", "26%"],
    },
    {
      title:
        "XKmax RGB + Amber Fender Vent LED Light for Jeep | App control | For Wrangler & Gladiator",
      price: "$287.99",
      img: "images/jeep variant 3.jpg",
      pos: ["35%", "55%"],
    },
    {
      title:
        "XKmax Atomix Body Panel LED Light Strip for Jeep | RGB Color Chasing & App | XKGLOW Add to Wishlist",
      price: "$191.99",
      img: "images/jeep variant 4.jpg",
      pos: ["60%", "63%"],
    },
    {
      title:
        "5th Wheel Light with Sequential Turn / Brake / Reverse for Jeep & Bronco",
      price: "$179.99",
      img: "images/jeep variant 5.jpg",
      pos: ["37%", "76%"],
    },
    {
      title:
        "XKmax RGBW LED Whip Lights w/ COB LED strip & app control | For ATV, UTV & Truck",
      price: "$249.99",
      img: "images/jeep variant 6.jpg",
      pos: ["25%", "90%"],
    },
    {
      title: "2pc LED Truck Bed Light Kit",
      price: "$167.99",
      img: "images/jeep variant 7.jpg",
      pos: ["51%", "89%"],
    },
  ],
  truck: [
    {
      title:
        "XKmax LED Wheel Ring Lights with RGBW Color Chasing | App-controlled",
      price: "$551.99",
      img: "images/truck variant 1.jpg",
      pos: ["60%", "18%"],
    },
    {
      title:
        "XKmax RGB LED Grill Light Bar w/ DRL & App Control | For Truck, Car, & UTVs | XKGLOW",
      price: "$179.99",
      img: "images/truck variant 2.jpg",
      pos: ["25%", "23%"],
    },
    {
      title:
        "XKmax Dual-Mode LED Light Bar w/ RGBW Chasing DRL Strip For Trucks, Jeeps, & UTVs | XKGLOW",
      price: "$191.99",
      img: "images/truck variant 3.jpg",
      pos: ["12%", "42%"],
    },
    {
      title:
        "XKmax RGBW LED Rock Light Kit with Color Chasing | App-controlled",
      price: "$287.99",
      img: "images/truck variant 4.jpg",
      pos: ["67%", "63%"],
    },
    {
      title: "2pc LED Truck Bed Light Kit",
      price: "$167.99",
      img: "images/truck variant 5.jpg",
      pos: ["29%", "73%"],
    },
    {
      title: "48/60inch Truck Tailgate LED Light Bar w/ Sequential Turn Signal",
      price: "$155.99",
      img: "images/truck variant 6.jpg",
      pos: ["40%", "84%"],
    },
  ],
  car: [
    {
      title:
        "XKmax LED Underglow Light Kit with RGBW Color Chasing | App-controlled",
      price: "$179.99",
      img: "images/car variant 1.jpg",
      pos: ["67%", "13%"],
    },
    {
      title:
        "2 in1 LED Bulb with Multi-color Devil Eye | XKchrome Smartphone App",
      price: "$214.99",
      img: "images/car variant 2.jpg",
      pos: ["43%", "30%"],
    },
    {
      title: "LED Dome Light Bulb Kit | XKchrome Smartphone App Controlled",
      price: "$42.89",
      img: "images/car variant 3.jpg",
      pos: ["14%", "48%"],
    },
    {
      title:
        "XKmax RGB Fiber Optic LED Interior Ambient Light Kit for Car & Truck | Color Chasing | App-controlled",
      price: "$191.99",
      img: "images/car variant 4.jpg",
      pos: ["28%", "62%"],
    },
    {
      title:
        "XKmax LED Wheel Ring Lights with RGBW Color Chasing | App-controlled",
      price: "$551.99",
      img: "images/car variant 5.jpg",
      pos: ["48%", "80%"],
    },
  ],
  bike: [
    {
      title: `7" LED Headlight for Motorcycle | XKchrome Smartphone App`,
      price: "$362.99",
      img: "images/motorcycle variant 1.jpg",
      pos: ["28%", "21%"],
    },
    {
      title:
        "Front MotoTurnz Pro Series LED Turn Signal Inserts for Harley Davidson Motorcycle",
      price: "$167.99",
      img: "images/motorcycle variant 2.jpg",
      pos: ["45%", "30%"],
    },
    {
      title:
        "XKmax LED Motorcycle Underglow Light Kit w/ RGBW Color Chasing | App-controlled",
      price: "$233.99",
      img: "images/motorcycle variant 3.jpg",
      pos: ["59%", "49%"],
    },
    {
      title:
        "Rear MotoTurnz Pro Series LED Turn Signal Inserts for Harley Davidson Motorcycle",
      price: "$179.99",
      img: "images/motorcycle variant 4.jpg",
      pos: ["56%", "78%"],
    },
    {
      title: "Motorcycle LED License Plate Frame w/ White LED",
      price: "$47.99",
      img: "images/motorcycle variant 5.jpg",
      pos: ["69%", "88%"],
    },
  ],
  cybertruck: [
    {
      title:
        "XKmax LED Underglow Light Kit with RGBW Chasing Lights for Tesla Cybertruck | App-controlled",
      price: "$1299.99",
      img: "images/cybertruck variant 1.jpg",
      pos: ["80%", "10%"],
    },
    {
      title:
        "XKcommand Switch Panel for Cybertruck | Off-road Light Controller | App-controlled",
      price: "$527.99",
      img: "images/cybertruck variant 2.jpg",
      pos: ["45%", "16%"],
    },
    {
      title:
        "XKmax Roof LED Off-road Light Bar for Tesla Cybertruck RGBW Chasing DRL & App Control",
      price: "$1199.99",
      img: "images/cybertruck variant 3.jpg",
      pos: ["12%", "34%"],
    },
    {
      title:
        "XKmax Atomix Profile LED Strip Light Kit for Tesla Cybertruck | RGB Chasing & App",
      price: "$635.99",
      img: "images/cybertruck variant 4.jpg",
      pos: ["70%", "63%"],
    },
    {
      title:
        "XKmax Roof LED Off-road Light Bar for Tesla Cybertruck RGBW Chasing DRL & App Control",
      price: "$1199.99",
      img: "images/cybertruck variant 5.jpg",
      pos: ["23%", "84%"],
    },
  ],
};

function renderVehicle(vehicle) {
  markersContainer.innerHTML = "";
  cardStack.innerHTML = "";
  const parts = vehicleData[vehicle];

  parts.forEach((part, index) => {
    const marker = document.createElement("div");
    marker.className = "marker";
    marker.style.top = part.pos[0];
    marker.style.left = part.pos[1];
    marker.textContent = index + 1;
    marker.dataset.index = index;
    markersContainer.appendChild(marker);

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.index = index;
    card.innerHTML = `<img src="${part.img}" alt="${part.title}" />
          <div class="card-body">
            <h4>${part.title}</h4>
            <p>${part.price}</p>
          </div>`;
    cardStack.appendChild(card);

    marker.addEventListener("click", () => {
      document
        .querySelectorAll(".marker, .card")
        .forEach((el) => el.classList.remove("active"));
      marker.classList.add("active");
      card.classList.add("active");
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
    });

    card.addEventListener("click", () => {
      document
        .querySelectorAll(".marker, .card")
        .forEach((el) => el.classList.remove("active"));
      card.classList.add("active");
      marker.classList.add("active");
    });

    card.addEventListener("mouseover", () => {
      marker.classList.add("active");
    });

    card.addEventListener("mouseout", () => {
      // Only remove if not clicked
      if (!card.classList.contains("active")) {
        marker.classList.remove("active");
      }
    });
  });
}

vehicleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    vehicleButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderVehicle(button.dataset.vehicle);
  });
});

renderVehicle("jeep");

let isDown = false;
let startX;
let scrollLeft;

cardStack.addEventListener("mousedown", (e) => {
  isDown = true;
  cardStack.classList.add("active");
  startX = e.pageX - cardStack.offsetLeft;
  scrollLeft = cardStack.scrollLeft;
});

cardStack.addEventListener("mouseleave", () => {
  isDown = false;
  cardStack.classList.remove("active");
});

cardStack.addEventListener("mouseup", () => {
  isDown = false;
  cardStack.classList.remove("active");
});

cardStack.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardStack.offsetLeft;
  const walk = (x - startX) * 2;
  cardStack.scrollLeft = scrollLeft - walk;
});

// Deselect marker and card on outside click
document.addEventListener("click", (e) => {
  const isMarker = e.target.classList.contains("marker");
  const isCard = e.target.closest(".card");

  if (!isMarker && !isCard) {
    document.querySelectorAll(".marker, .card").forEach((el) => {
      el.classList.remove("active");
    });
  }
});
