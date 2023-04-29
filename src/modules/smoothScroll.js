"use strict"

const smoothScrollFunc = (links, scrollButton, testDriveButton) => {
  const headerLinks = document.querySelectorAll(links)
  const scrollDownBtn = document.querySelector(scrollButton)
  const testDriveBtn = document.querySelector(testDriveButton)
  const linksToScroll = [...headerLinks, scrollDownBtn, testDriveBtn]

  console.log(seamless)

  linksToScroll.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()

      const ID = event.target.getAttribute('href').substring(1)

      seamless.scrollIntoView(document.getElementById(ID), {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    })
  })
}

export default smoothScrollFunc