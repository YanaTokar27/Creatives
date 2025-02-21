const createAdChoice = () => {
    const element = document.createElement("div");
    element.classList.add("ad_choice_container");
    const templateHTML = `<div class="ad_choice_icon"></div>
      <div class="ad_choice_click">
          <a class="ad_choice_link" href="https://info.evidon.com/more_info/78051" target="_blank"></a>
      </div>
  `;
    element.insertAdjacentHTML("beforeend", templateHTML);
    return element;
  };