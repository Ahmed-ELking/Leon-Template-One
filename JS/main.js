/* ========================================================== */

// Global Variables
const links = document.querySelector(".links");
const anchors = document.querySelectorAll(".links ul li a");
const sections = document.querySelectorAll("section");
const button = document.querySelector(".up");
//End global Variables

//Start Navigator bar Function
const navBar = (event) => {
  //Show Navigator bar
  document.querySelector(".links ul").style.display = "block";
  setTimeout(() => {
    //Hide Navigator bar
    document.querySelector(".links ul").style.display = "none";
  }, 5000);
  // Scroll To Sections
  event.preventDefault();
  anchors.forEach((a) => {
    a.addEventListener("click", (eve) => {
      document
        .querySelector(`${eve.target.hash}`)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
};
//End Navigator bar Function

//Adding Events To Navigator bar
links.addEventListener("click", navBar);
//End Events To Navigator bar

// Show and Hide button
window.onscroll = () => {
  scrollY >= 700
    ? button.classList.add("show")
    : button.classList.remove("show");
};

//Scrolling UP button to Top

button.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//Start Intersection Observer Function

const toggleActiveClass = () => {
  const observer = new IntersectionObserver(
    (entires) => {
      entires.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("your-active-class");
        } else {
          entry.target.classList.remove("your-active-class");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  sections.forEach((section) => {
    observer.observe(section);
  });
};
//Add Event To Active Sections when Scrolling

window.addEventListener("scroll", toggleActiveClass);

// The End
/* ========================================================== */
