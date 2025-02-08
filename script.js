document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".text-slide");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      slides[currentIndex].classList.remove("active");
      slides[currentIndex].style.opacity = "0";

      setTimeout(() => {
        slides[currentIndex].style.display = "none";
        currentIndex++;
        slides[currentIndex].style.display = "block";
        slides[currentIndex].style.opacity = "1";
        slides[currentIndex].classList.add("active");
      }, 600);
    } else {
      window.location.href = "question.html";
    }
  });

  // Playful No Button
  const noButton = document.getElementById("noButton");
  const yesButton = document.getElementById("yesButton");

  if (noButton) {
    noButton.addEventListener("mouseover", () => {
      let randomX = Math.random() * (window.innerWidth - 100);
      let randomY = Math.random() * (window.innerHeight - 100);
      noButton.style.position = "absolute";
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    });

    noButton.addEventListener("click", () => {
      noButton.style.display = "none";
    });
  }

  // Confetti Effect when Clicking Yes
  if (yesButton) {
    yesButton.addEventListener("click", () => {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        window.location.href = "loading.html";
      }, 2000);
    });
  }

  // Loading bar animation
  if (document.querySelector(".progress")) {
    setTimeout(() => {
      document.querySelector(".progress").style.width = "100%";
    }, 100);

    setTimeout(() => {
      window.location.href = "congrats.html";
    }, 7000);
  }
});
