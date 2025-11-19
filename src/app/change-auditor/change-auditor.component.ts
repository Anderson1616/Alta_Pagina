import { Component } from "@angular/core";

@Component({
  selector: "app-change-auditor",
  templateUrl: "./change-auditor.component.html",
  styleUrls: ["./change-auditor.component.scss"],
  standalone: false,
})
export class ChangeAuditorComponent {
  readonly resources = [
    {
      title: "ChangeAuditor for Active Directory",
      image:
        "https://static.wixstatic.com/media/4ec771_2a473fdd90fe44458d0d0ab176d910be~mv2.png/v1/fill/w_157,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_2a473fdd90fe44458d0d0ab176d910be~mv2.png",
      href: "https://www.quest.com/documents/change-auditor-for-active-directory-spanish-datasheet-69130.pdf",
    },
    {
      title: "Administración de la amenaza interna con la seguridad de Active Directory",
      image:
        "https://static.wixstatic.com/media/4ec771_d5c82c6942e24dafa000ad9a568361e2~mv2.png/v1/fill/w_183,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_d5c82c6942e24dafa000ad9a568361e2~mv2.png",
      href: "https://www.alta-tecnologia.com/_files/ugd/4ec771_dcdd10d89faa4ee5b5e5d8cf6575c003.pdf",
    },
    {
      title: "Cómo optimizar su AD para Windows Server 2016",
      image:
        "https://static.wixstatic.com/media/4ec771_6c6756a687eb4248bb964ceb6f302a2a~mv2.png/v1/fill/w_169,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_6c6756a687eb4248bb964ceb6f302a2a~mv2.png",
      href: "https://www.alta-tecnologia.com/_files/ugd/4ec771_6615829934f24882a9e9da83fe839eb9.pdf",
    },
    {
      title: "Modernización de Active Directory para Azure y Office 365",
      image:
        "https://static.wixstatic.com/media/4ec771_b304de398eb24260b0bd109b1a088274~mv2.png/v1/fill/w_169,h_161,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_b304de398eb24260b0bd109b1a088274~mv2.png",
      href: "https://www.alta-tecnologia.com/_files/ugd/4ec771_9068c26ebbb14ed4ae9b1bef162c3014.pdf",
    },
    {
      title: "Azure Active Directory y Seguridad de Office 365",
      image:
        "https://static.wixstatic.com/media/4ec771_849f45ce61664afa8fb0b87211073ce1~mv2.png/v1/fill/w_169,h_161,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4ec771_849f45ce61664afa8fb0b87211073ce1~mv2.png",
      href: "https://www.alta-tecnologia.com/_files/ugd/4ec771_8c9083da55454e18a337442fab1bd087.pdf",
    },
  ];

  scrollToContact(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const el = document.getElementById('contacto-final');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update the hash after scrolling so back-button behavior is preserved.
      setTimeout(() => {
        try { history.replaceState(null, '', '#contacto-final'); } catch (e) {}
      }, 600);
    }
  }
}
