import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");
const delLi = commentList.querySelector("li");
const delSpan = document.getElementById("jsSpan");
const delBtn = document.getElementById("delBtn");

const handleDelete = (event) => {
  event.preventDefault();
  commentList.removeChild(delLi);
  commentList.appendChild(delLi);

  console.log(event.target);
};

function init() {
  commentList.addEventListener("click", handleDelete);
}

if (addCommentForm) {
  init();
}
