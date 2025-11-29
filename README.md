# AETHER Automation - Web Estàtica

Web frontend estàtica per a AETHER Automation, deployable en GitHub Pages.

## 🚀 Característiques

- **Diseño moderno y responsive** adaptat a tots els dispositius
- **Animacions suaus** amb JavaScript vanilla
- **Formulari de contacte** preparat per EmailJS o Formspree
- **Enllaç directe a WhatsApp**
- **Optimitzat per SEO**

## 📁 Estructura de Fitxers

```
web AETHER/
├── index.html          # Pàgina principal
├── serveis.html        # Pàgina de serveis
├── contacte.html       # Pàgina de contacte
├── styles.css          # Estils personalitzats
├── script.js           # JavaScript per animacions i funcionalitats
└── README.md           # Aquest fitxer
```

## 🎨 Paleta de Colors

- **Principal**: #0066FF
- **Secundari**: #00E5FF
- **Text**: #1a1a1a
- **Fons**: #FFFFFF

## 🔤 Tipografia

- **Headings**: Inter Bold
- **Body**: Inter Regular

## 📦 Tecnologies Utilitzades

- HTML5
- CSS3
- JavaScript (Vanilla)
- TailwindCSS (via CDN)
- Google Fonts (Inter)

## 🚀 Deploy a GitHub Pages

### Opció 1: Via GitHub Web Interface

1. Crea un repositori nou a GitHub
2. Puja tots els fitxers al repositori
3. Vés a **Settings** > **Pages**
4. Selecciona la branca `main` (o `master`)
5. Selecciona la carpeta `/root`
6. Guarda els canvis
7. La teva web estarà disponible a `https://[tu-usuari].github.io/[nom-repositori]`

### Opció 2: Via Git Command Line

```bash
# Inicialitza el repositori
git init

# Afegeix tots els fitxers
git add .

# Fes commit
git commit -m "Initial commit: AETHER Automation website"

# Afegeix el remote de GitHub (substituïu amb el vostre URL)
git remote add origin https://github.com/[tu-usuari]/[nom-repositori].git

# Puja els fitxers
git push -u origin main

# Després, activa GitHub Pages des del web de GitHub
```

## ⚙️ Configuració del Formulari de Contacte

### Opció 1: EmailJS

1. Crea un compte a [EmailJS](https://www.emailjs.com/)
2. Configura un servei d'email
3. Crea una plantilla
4. Obre `script.js` i descomenta la secció d'EmailJS
5. Substitueix `YOUR_SERVICE_ID` i `YOUR_TEMPLATE_ID` amb els teus valors
6. Afegeix el script d'EmailJS al `<head>` de `contacte.html`:
   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script type="text/javascript">
      emailjs.init("YOUR_PUBLIC_KEY");
   </script>
   ```

### Opció 2: Formspree

1. Crea un compte a [Formspree](https://formspree.io/)
2. Crea un formulari nou
3. Obre `script.js` i descomenta la secció de Formspree
4. Substitueix `YOUR_FORM_ID` amb el teu Form ID
5. Afegeix l'atribut `action` al formulari a `contacte.html`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 📱 Personalització

### Canviar Informació de Contacte

Edita `contacte.html` i canvia:
- Email: `info@aetherautomation.com`
- WhatsApp: `+34 600 000 000` (enllaç i número)

### Canviar Preus

Edita `serveis.html` i modifica els preus als títols de cada servei.

### Canviar Colors

Edita `styles.css` i modifica les variables CSS a la secció `:root`.

## 🎯 Funcionalitats JavaScript

- **Smooth Scroll**: Desplaçament suau per enllaços d'ancoratge
- **Fade-in on Scroll**: Animació d'aparició quan els elements entren a la vista
- **Menú Hamburguesa**: Menú mòbil per a dispositius petits
- **Validació de Formulari**: Validació client-side abans d'enviar
- **Efecte Navbar**: Canvi d'estil de la barra de navegació en fer scroll

## 📄 Llicència

Aquest projecte és propietat de AETHER Automation.

## 📞 Suport

Per a qualsevol pregunta o suport, contacta amb nosaltres a través de la pàgina de contacte.

---

**AETHER Automation** - Automatitza. Creix. Domina.

