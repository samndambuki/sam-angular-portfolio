import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PORTFOLIO_DATA } from "../../models/portfolio.model";

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent {
  data = PORTFOLIO_DATA;
  activeCategory = signal("All");

  categories = ["All", "Frontend", "Language", "DevOps"];

  get filteredSkills() {
    const cat = this.activeCategory();
    return cat === "All"
      ? this.data.skills
      : this.data.skills.filter((s) => s.category === cat);
  }

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}
