import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name", "username", "document", "favcolor" ]

  connect() {
    console.log("Stimulus is working!")
  }

  usernameSuggestion() {
    this.username.value = this.toUsername(this.name.value)
  }

  toUpper() {
    this.name.value = this.name.value.toUpperCase()
  }

  paste(event) {
    event.preventDefault()
    alert("You cannot paste here.")
  }

  color() {
    this.favcolor.style.backgroundColor = this.favcolor.value
  }

  toUsername(name) {
    return name.toLowerCase().replace(/\s+/g,"") +  "00" + this.rand()
  }

  rand() {
    return Math.floor(Math.random() * 10) + 1
  }

  get name() {
    return this.nameTarget
  }

  get username() {
    return this.usernameTarget
  }

  get favcolor() {
    return this.favcolorTarget
  }

}
