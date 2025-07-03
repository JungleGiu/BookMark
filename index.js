"use strict";

const openCloseMenu = () => {
  const menu = document.querySelector(".burger__menu");
  menu.classList.toggle("open");
};


const feature1 = document.querySelector("#tab-1");
const feature2 = document.querySelector("#tab-2");
const feature3 = document.querySelector("#tab-3");
const select1= document.querySelector("#sel-1");
const select2= document.querySelector("#sel-2");
const select3= document.querySelector("#sel-3");

const selectFeature1 =() => {
  select1.classList.add("selected");
  select2.classList.remove("selected");
  select3.classList.remove("selected");
  feature1.classList.remove("closed");
  feature2.classList.add("closed");
  feature3.classList.add("closed");
}
const selectFeature2 =() => {
  select1.classList.remove("selected");
  select2.classList.add("selected");
  select3.classList.remove("selected");
  feature1.classList.add("closed");
  feature2.classList.remove("closed");
  feature3.classList.add("closed");
}
const selectFeature3 =() => {
  select1.classList.remove("selected");
  select2.classList.remove("selected");
  select3.classList.add("selected");
  feature1.classList.add("closed");
  feature2.classList.add("closed");
  feature3.classList.remove("closed");
}

const emailValidation = () => {
  const input = document.getElementById('email')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const img = document.getElementById('img-error')
  const msg = document.getElementById('msg-error')
  if (emailRegex.test(input.value)) {
    img.classList.add('valid');
    msg.classList.add('valid');
   
  } else {
    img.classList.remove('error');
    msg.classList.remove('error');
  }
}