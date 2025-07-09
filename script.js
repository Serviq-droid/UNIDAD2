// Tab functionality
document.addEventListener("DOMContentLoaded", () => {
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabContents = document.querySelectorAll(".tab-content")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")

      // Remove active class from all triggers and contents
      tabTriggers.forEach((t) => t.classList.remove("active"))
      tabContents.forEach((c) => c.classList.remove("active"))

      // Add active class to clicked trigger and corresponding content
      this.classList.add("active")
      document.getElementById(targetTab).classList.add("active")
    })
  })

  // PDF viewer functionality
  const pdfButtons = document.querySelectorAll(".btn")

  pdfButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.textContent.trim()

      if (buttonText.includes("Ver PDF") || buttonText.includes("Previsualizar")) {
        // Simulate PDF viewing
        console.log("Abriendo visor de PDF...")
        // Here you could implement actual PDF viewing functionality
      } else if (buttonText.includes("Descargar")) {
        // Simulate PDF download
        console.log("Descargando PDF...")
        // Here you could implement actual PDF download functionality
      } else if (buttonText.includes("Reproducir")) {
        // Simulate video playback
        console.log("Reproduciendo video...")
        // Here you could implement actual video playback functionality
      }
    })
  })

  // Add smooth scrolling for better UX
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add loading animation for buttons
  function addLoadingState(button) {
    const originalText = button.innerHTML
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...'
    button.disabled = true

    setTimeout(() => {
      button.innerHTML = originalText
      button.disabled = false
    }, 2000)
  }

  // Enhanced button interactions
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const buttonText = this.textContent.trim()

      if (buttonText.includes("Ver PDF") || buttonText.includes("Descargar")) {
        addLoadingState(this)
      }
    })
  })

  // Add hover effects for cards
  document.querySelectorAll(".video-card, .stat-card, .result-item").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.transition = "transform 0.2s ease"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Initialize tooltips (if needed)
  function initTooltips() {
    const tooltipElements = document.querySelectorAll("[data-tooltip]")

    tooltipElements.forEach((element) => {
      element.addEventListener("mouseenter", function () {
        const tooltipText = this.getAttribute("data-tooltip")
        const tooltip = document.createElement("div")
        tooltip.className = "tooltip"
        tooltip.textContent = tooltipText
        document.body.appendChild(tooltip)

        const rect = this.getBoundingClientRect()
        tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px"
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px"
      })

      element.addEventListener("mouseleave", () => {
        const tooltip = document.querySelector(".tooltip")
        if (tooltip) {
          tooltip.remove()
        }
      })
    })
  }

  initTooltips()
})

// Utility functions
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.textContent = message

  // Add notification styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      notification.remove()
    }, 300)
  }, 3000)
}

// Export functions for potential external use
window.ProjectUtils = {
  showNotification,
  switchTab: (tabId) => {
    const trigger = document.querySelector(`[data-tab="${tabId}"]`)
    if (trigger) {
      trigger.click()
    }
  },
}
