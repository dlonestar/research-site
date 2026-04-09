let isReaderMode = localStorage.getItem("readerMode") === "on"

const emitReaderModeChangeEvent = (mode: "on" | "off") => {
  const event: CustomEventMap["readermodechange"] = new CustomEvent("readermodechange", {
    detail: { mode },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchReaderMode = () => {
    isReaderMode = !isReaderMode
    const newMode = isReaderMode ? "on" : "off"
    document.documentElement.setAttribute("reader-mode", newMode)
    localStorage.setItem("readerMode", newMode)
    emitReaderModeChangeEvent(newMode)
  }

  for (const readerModeButton of document.getElementsByClassName("readermode")) {
    readerModeButton.addEventListener("click", switchReaderMode)
    window.addCleanup(() => readerModeButton.removeEventListener("click", switchReaderMode))
  }

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
