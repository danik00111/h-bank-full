// thanks to fellow stackoverflower @epascarello
const likeButtonArray = document.querySelectorAll('.S_likes-wrap');
likeButtonArray.forEach(button => {
  // add the click event to the button
  button.addEventListener("click", () => {
    // toggle the class
    button.classList.toggle("active");
    // Determine if active or not to do the calculation
    const dir = button.classList.contains("active") ? 1 : -1;
    // find the count holder in the buttoт
    const countElem = button.querySelector(".S_likes");
    // update the count
    const likes = +countElem.textContent + dir;
    countElem.textContent = likes;
  });
});