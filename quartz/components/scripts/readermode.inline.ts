let isReaderMode = localStorage.getItem("readerMode") === "on"

const emitReaderModeChangeEvent = (mode: "on" | "off") => {
  const event: CustomEventMap["readermodechange"] = new CustomEvent("readermodechange", {
    detail: { mode },
  })
  document.dispatchEvent(event)
}

// Create floating exit button on document.body (outside sidebar)
const exitBtn = document.createElement("button")
exitBtn.className = "reader-exit"
exitBtn.setAttribute("aria-label", "Exit reader mode")
exitBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 3h12v1H2zm0 4h12v1H2zm0 4h12v1H2z"/></svg>'
document.body.appendChild(exitBtn)

document.addEventListener("nav", () => {
  const switchReaderMode = () => {
    isReaderMode = !isReaderMode
    const newMode = isReaderMode ? "on" : "off"
    document.documentElement.setAttribute("reader-mode", newMode)
    localStorage.setItem("readerMode", newMode)
    emitReaderModeChangeEvent(newMode)
  }

  // Sidebar button (book icon)
  for (const readerModeButton of document.getElementsByClassName("readermode")) {
    readerModeButton.addEventListener("click", switchReaderMode)
    window.addCleanup(() => readerModeButton.removeEventListener("click", switchReaderMode))
  }

  // Floating exit button
  exitBtn.addEventListener("click", switchReaderMode)
  window.addCleanup(() => exitBtn.removeEventListener("click", switchReaderMode))

  // Keyboard shortcut: F key
  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "f" && !e.ctrlKey && !e.metaKey && !e.altKey &&
        e.target instanceof HTMLElement &&
        e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      switchReaderMode()
    }
  }
  document.addEventListener("keydown", handleKey)
  window.addCleanup(() => document.removeEventListener("keydown", handleKey))

  // Set initial state from localStorage
  document.documentElement.setAttribute("reader-mode", isReaderMode ? "on" : "off")
})
