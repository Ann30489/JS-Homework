let stylesArr = [
  { color: 'green', },
  { fontSize: 30, },
  { textAlign: 'center', },
  { textDecoration: 'underline' },
]


function textChange(text) {
  let textContainer = document.getElementById("text-container");
  textContainer.insertAdjacentHTML("beforeend", `<p style='color:${stylesArr[0].color}; font-size:${stylesArr[1].fontSize}px; text-align:${stylesArr[2].textAlign}; text-decoration:${stylesArr[3].textDecoration}'>${text}</p>`);
}


let outputBtn = document.getElementById('output-btn');

outputBtn.addEventListener("click", () => {
  let myText = document.getElementById('textArea').value;
  textChange(myText);
});