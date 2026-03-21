import { Component, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PORTFOLIO_DATA } from "../../models/portfolio.model";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.scss",
})
export class HeroComponent implements OnInit, OnDestroy {
  data = PORTFOLIO_DATA;
  displayText = "";
  private words = ["Angular", "TypeScript"];
  private wordIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    this.type();
  }

  private type() {
    const word = this.words[this.wordIndex];
    this.displayText = this.deleting
      ? word.slice(0, --this.charIndex)
      : word.slice(0, ++this.charIndex);

    if (!this.deleting && this.charIndex === word.length) {
      this.timer = setTimeout(() => {
        this.deleting = true;
        this.type();
      }, 1800);
      return;
    }
    if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
    }
    this.timer = setTimeout(() => this.type(), this.deleting ? 55 : 110);
  }

  scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }
}
