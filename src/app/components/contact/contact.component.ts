import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelope,
  faPhone,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { PORTFOLIO_DATA } from "../../models/portfolio.model";

interface ContactItem {
  icon: IconDefinition;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  data = PORTFOLIO_DATA;

  contactItems: ContactItem[] = [
    {
      icon: faEnvelope,
      label: "Email",
      value: "sam.ndambuki08@gmail.com",
      href: "mailto:sam.ndambuki08@gmail.com",
      external: false,
    },
    {
      icon: faPhone,
      label: "Phone",
      value: "+254 797 334 258",
      href: "tel:+254797334258",
      external: false,
    },
    {
      icon: faLinkedin,
      label: "LinkedIn",
      value: "samuel-ndambuki-40026b1a0",
      href: "https://www.linkedin.com/in/samuel-ndambuki-40026b1a0/",
      external: true,
    },
    {
      icon: faGithub,
      label: "GitHub",
      value: "github.com/samndambuki",
      href: "https://github.com/samndambuki",
      external: true,
    },
  ];

  readonly arrowIcon = faArrowUpRightFromSquare;
}
