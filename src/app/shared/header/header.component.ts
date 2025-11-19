import { Component, HostListener } from "@angular/core";
import { CartService, CartItem } from "../services/cart.service";
import { Observable } from "rxjs";

import { NavigationService } from "../navigation.service";

@Component({
  selector: "app-shared-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  standalone: false,
})
export class HeaderComponent {
  isLoginOpen = false;
  isRegisterOpen = false;
  registerError = "";
  loginError = "";
  toastMessage = "";
  toastVisible = false;
  currentUserEmail: string | null = null;
  isProfileMenuOpen = false;
  isCartOpen = false;

  cartItems$: Observable<CartItem[]>;

  constructor(
    private readonly navigationService: NavigationService,
    private readonly cartService: CartService,
  ) {
    this.cartItems$ = this.cartService.items$;
  }

  navigateTo(fragment: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    this.navigationService.navigateTo(fragment);
  }

  openLogin(): void {
    this.isLoginOpen = true;
    this.isRegisterOpen = false;
    this.loginError = "";
  }

  closeLogin(): void {
    this.isLoginOpen = false;
    this.isRegisterOpen = false;
  }

  openRegister(): void {
    this.registerError = "";
    this.isRegisterOpen = true;
    this.isLoginOpen = false;
  }

  @HostListener("document:keydown.escape")
  handleEscape(): void {
    if (this.isLoginOpen || this.isRegisterOpen) {
      this.closeLogin();
    }
  }

  async handleRegisterSubmit(event: Event): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const fullName = (data.get("fullName") ?? "").toString();
    const email = (data.get("email") ?? "").toString().toLowerCase();
    const password = (data.get("password") ?? "").toString();
    const confirmPassword = (data.get("confirmPassword") ?? "").toString();

    if (!fullName || !email || !password || !confirmPassword) {
      this.registerError = "Todos los campos son obligatorios.";
      return;
    }

    const passwordHash = await this.hashText(password);
    const confirmHash = await this.hashText(confirmPassword);

    if (passwordHash !== confirmHash) {
      this.registerError = "Las contraseñas no coinciden.";
      return;
    }

    this.registerError = "";
    const record = { fullName, email, passwordHash };
    localStorage.setItem("altaUser", JSON.stringify(record));
    this.showToast("Registro exitoso. Ahora puedes iniciar sesión.");
    this.openLogin();
    form.reset();
  }

  handleLoginSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const email = (data.get("loginEmail") ?? "").toString().toLowerCase();
    const password = (data.get("loginPassword") ?? "").toString();

    if (!email || !password) {
      this.loginError = "Debes ingresar correo y contraseña.";
      return;
    }

    const saved = localStorage.getItem("altaUser");
    if (!saved) {
      this.loginError = "No hay usuarios registrados.";
      return;
    }

    const record = JSON.parse(saved) as { email: string; passwordHash: string };
    if (record.email !== email) {
      this.loginError = "Este correo no está registrado.";
      return;
    }

    this.hashText(password).then((hash) => {
      if (hash !== record.passwordHash) {
        this.loginError = "Contraseña incorrecta.";
        return;
      }

      this.loginError = "";
      this.currentUserEmail = email;
      this.closeLogin();
      this.showToast("Inicio de sesión exitoso.");
      form.reset();
    });
  }

  toggleProfileMenu(): void {
    if (!this.currentUserEmail) {
      this.openLogin();
      return;
    }
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
    this.isCartOpen = false;
  }

  logout(): void {
    this.currentUserEmail = null;
    this.isProfileMenuOpen = false;
    this.showToast("Cerraste sesión.");
  }

  private async hashText(value: string): Promise<string> {
    if (typeof crypto === "undefined" || !crypto.subtle) {
      return btoa(value);
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(value);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  private showToast(message: string): void {
    this.toastMessage = message;
    this.toastVisible = true;
    setTimeout(() => {
      this.toastVisible = false;
    }, 3000);
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
    this.isProfileMenuOpen = false;
  }

  cartHasItems(items: CartItem[]): boolean {
    return items.length > 0;
  }

  cartItemCount(items: CartItem[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  removeCartItem(id: string): void {
    this.cartService.removeItem(id);
  }
}
