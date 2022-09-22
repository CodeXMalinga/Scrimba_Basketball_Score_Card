let plusOneBtns  = document.getElementsByClassName('plusOne');
let plusTwoBtns  = document.getElementsByClassName('plusTwo');
let plusThreeBtns  = document.getElementsByClassName('plusThree');

for (const plusOne of  plusOneBtns){
  plusOne.addEventListener('click', () => {
    let prevSibling = plusOne.parentNode.previousElementSibling;
    let firstChild = prevSibling.children;
    let homeScore = Number(firstChild[0].textContent);
    firstChild[0].textContent = homeScore + 1;
  })
};

for (const plusTwo of  plusTwoBtns){
  plusTwo.addEventListener('click', () => {
    let prevSibling = plusTwo.parentNode.previousElementSibling;
    let firstChild = prevSibling.children;
    let homeScore = Number(firstChild[0].textContent);
    firstChild[0].textContent = homeScore + 2;
  })
};

for (const plusThree of  plusThreeBtns){
  plusThree.addEventListener('click', () => {
    let prevSibling = plusThree.parentNode.previousElementSibling;
    let firstChild = prevSibling.children;
    let homeScore = Number(firstChild[0].textContent);
    firstChild[0].textContent = homeScore + 3;
  })
};