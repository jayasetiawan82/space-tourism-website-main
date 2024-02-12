const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', changeTabsFocus)

tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel)
})


let tabFocus = 0;

function changeTabsFocus(e) {
    const keyDownLeft = 37;
    const keyDownRight = 39;

 // change the tabindex of the current tab to -1
    if(e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1)
    }

// if the right key is pushed, move to the next tab on the right
    if(e.keyCode === keyDownRight) {
        tabFocus++
        if(tabFocus >= tabs.length) {
            tabFocus = 0
        }
    } 

// if the left key is pushed, move to the next tab on the left
    if(e.keyCode === keyDownLeft) {
        tabFocus--
       if(tabFocus < 0) {
        tabFocus = tabs.length -1
       }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus()
}

// change the article or the information

function changeTabPanel(e) {
    const targetTab = e.target
    const targetPanel = targetTab.getAttribute("aria-controls")
    const targetImage = targetTab.getAttribute("data-image");

    const tabContainer = targetTab.parentNode
    const mainContainer = tabContainer.parentNode

    // underline/highlight change 
    tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false)

    targetTab.setAttribute("aria-selected", true)
    

    mainContainer.querySelectorAll("[role=tabpanel]").forEach((panel) => panel.setAttribute("hidden", true))

    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
    
    // hiding the images 
    mainContainer.querySelectorAll("picture").forEach((picture) => picture.setAttribute("hidden", true))
    mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

}