const main1 = document.querySelector(".main1");
const main2 = document.querySelector(".main2");
const button = document.querySelector("button");

let flag = false;
button.addEventListener("click", function () {
  if (!flag) {
    main1.style.backgroundImage = `url(https://images.unsplash.com/photo-1751209978666-c1007795154e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
    main2.style.backgroundImage = `url(https://images.unsplash.com/photo-1751076547514-e647a5dd3ef7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;

    flag = true;
  } else {
    main1.style.backgroundImage = `url(https://images.unsplash.com/photo-1751076547514-e647a5dd3ef7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
    main2.style.backgroundImage = `url(https://images.unsplash.com/photo-1751209978666-c1007795154e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;

    flag = false;
  }
});
