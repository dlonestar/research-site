let isReaderMode = localStorage.getItem("readerMode") === "on"

// Apply immediately to prevent flash
if (isReaderMode) {
  document.documentElement.classList.add("focus")
}

document.addEventListener("nav", () => {
  // Create floating exit button if not exists
  if (!document.getElementById("focus-exit")) {
    const btn = document.createElement("button")
    btn.id = "focus-exit"
    btn.innerHTML = "☰"
    btn.title = "사이드바 표시"
    document.body.appendChild(btn)
  }

  const toggle = () => {
    isReaderMode = !isReaderMode
    document.documentElement.classList.toggle("focus", isReaderMode)
    localStorage.setItem("readerMode", isReaderMode ? "on" : "off")
  }

  // Sidebar readermode button (book icon)
  for (const btn of document.getElementsByClassName("readermode")) {
    btn.addEventListener("click", toggle)
    window.addCleanup(() => btn.removeEventListener("click", toggle))
  }

  // Floating exit button
  const exitBtn = document.getElementById("focus-exit")
  if (exitBtn) {
    exitBtn.addEventListener("click", toggle)
    window.addCleanup(() => exitBtn.removeEventListener("click", toggle))
  }

  // F key
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "f" && !e.ctrlKey && !e.metaKey && !e.altKey &&
        e.target instanceof HTMLElement &&
        e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      toggle()
    }
  }
  document.addEventListener("keydown", onKey)
  window.addCleanup(() => document.removeEventListener("keydown", onKey))

  // Sync
  document.documentElement.classList.toggle("focus", isReaderMode)
})
