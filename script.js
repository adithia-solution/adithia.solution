// Default configuration
const defaultConfig = {
  company_name: 'CV Adithia Solution',
  tagline: 'Solusi Kreatif & Teknologi Terpercaya',
  hero_description: 'Mitra terbaik Anda untuk desain grafis, branding, percetakan berkualitas tinggi, dan dukungan IT profesional. Kami hadir untuk membantu bisnis Anda berkembang dengan solusi yang inovatif dan terpercaya.',
  phone_number: '089524463898',
  email_address: 'adithia.solution@gmail.com',
  company_address: 'Jl. Pertahanan Gg. Lembayung, Patumbak I, Kec. Patumbak, Kab. Deli Serdang - Sumatera Utara, 20361',
  primary_color: '#191d64',
  secondary_color: '#0926c4',
  accent_color: '#32b6d4',
  text_color: '#1f2937',
  surface_color: '#ffffff',
  font_family: 'Plus Jakarta Sans'
};

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('shadow-lg');
  } else {
    header.classList.remove('shadow-lg');
  }
  
  lastScroll = currentScroll;
});

// Initialize Element SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      // Update company name
      const companyName = config.company_name || defaultConfig.company_name;
      document.getElementById('header-company-name').textContent = companyName;
      document.getElementById('hero-company-name').textContent = companyName;
      document.getElementById('footer-company-name').textContent = companyName;
      
      // Update tagline
      document.getElementById('hero-tagline').textContent = config.tagline || defaultConfig.tagline;
      
      // Update hero description
      document.getElementById('hero-description').textContent = config.hero_description || defaultConfig.hero_description;
      
      // Update contact info
      document.getElementById('contact-phone').textContent = config.phone_number || defaultConfig.phone_number;
      document.getElementById('contact-email').textContent = config.email_address || defaultConfig.email_address;
      document.getElementById('contact-address').textContent = config.company_address || defaultConfig.company_address;
      
      // Update colors
      const primaryColor = config.primary_color || defaultConfig.primary_color;
      const secondaryColor = config.secondary_color || defaultConfig.secondary_color;
      const accentColor = config.accent_color || defaultConfig.accent_color;
      
      document.documentElement.style.setProperty('--primary-color', primaryColor);
      document.documentElement.style.setProperty('--secondary-color', secondaryColor);
      document.documentElement.style.setProperty('--accent-color', accentColor);
      
      // Update font
      const fontFamily = config.font_family || defaultConfig.font_family;
      document.body.style.fontFamily = `${fontFamily}, sans-serif`;
    },
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.primary_color || defaultConfig.primary_color,
          set: (value) => {
            config.primary_color = value;
            window.elementSdk.setConfig({ primary_color: value });
          }
        },
        {
          get: () => config.secondary_color || defaultConfig.secondary_color,
          set: (value) => {
            config.secondary_color = value;
            window.elementSdk.setConfig({ secondary_color: value });
          }
        },
        {
          get: () => config.accent_color || defaultConfig.accent_color,
          set: (value) => {
            config.accent_color = value;
            window.elementSdk.setConfig({ accent_color: value });
          }
        },
        {
          get: () => config.surface_color || defaultConfig.surface_color,
          set: (value) => {
            config.surface_color = value;
            window.elementSdk.setConfig({ surface_color: value });
          }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        }
      },
      fontSizeable: undefined
    }),
    mapToEditPanelValues: (config) => new Map([
      ['company_name', config.company_name || defaultConfig.company_name],
      ['tagline', config.tagline || defaultConfig.tagline],
      ['hero_description', config.hero_description || defaultConfig.hero_description],
      ['phone_number', config.phone_number || defaultConfig.phone_number],
      ['email_address', config.email_address || defaultConfig.email_address],
      ['company_address', config.company_address || defaultConfig.company_address]
    ])
  });
}
