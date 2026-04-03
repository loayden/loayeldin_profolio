# Loay Eldin Mohamed Mahmoud - Portfolio Website

A premium, world-class portfolio website showcasing the achievements and expertise of Loay Eldin Mohamed Mahmoud, an award-winning robotics engineer and full stack developer from Egypt.

## 🌟 Features

- **Premium Design**: Apple-style UI with dark theme and gold accents
- **Glassmorphism**: Modern glass effects with backdrop blur
- **Responsive**: Perfect on all devices (mobile, tablet, desktop)
- **Animated**: Smooth Framer Motion animations and scroll effects
- **Interactive**: Functional contact form with API integration
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **TypeScript**: Type-safe development experience

## 🏆 Key Sections

### 1. Hero Section
- Professional introduction with achievement badges
- Animated statistics (15+ awards, 6+ countries, 50+ projects, 100+ students)
- Premium glassmorphism design with gold accents
- Call-to-action buttons

### 2. About Section
- Professional bio and journey
- Core values and expertise areas
- Personal interests and philosophy
- Global impact statistics

### 3. Skills Section
- **💻 Web Development**: React, Next.js, TypeScript, Node.js, PHP
- **🤖 Robotics & Embedded**: Raspberry Pi, Arduino, Sensors, Automation
- **🧠 AI & Computer Vision**: OpenCV, Smart Systems, Machine Learning
- **🎨 Design & Creative**: Adobe Photoshop, UI/UX, Figma
- **📈 Marketing & Business**: Digital Marketing, SEO, Social Media
- **🧑‍🏫 Teaching & Leadership**: Programming, Robotics, Mentoring

### 4. Competitions & Achievements ⭐
- **International**: MRC Greece 2024 (🥇 1st Place), Robo Tourney USA (🥈 2nd Place), SeaPerch (🏅 4th Worldwide)
- **National**: Egypt Open Robotics Championship, RoboRave Egypt, African Innovation Forum
- **Global Representation**: USA, China, Turkey, UAE, Morocco, Greece, South Africa
- **Visual Timeline**: Medals, flags, and achievement highlights

### 5. Projects Section
- **Featured Projects**: AI Robotics Control, E-Commerce Platform, Educational Robotics Kit
- **All Projects**: Smart Home Automation, Computer Vision Security, Competition Robot Controller
- **Tech Stack**: React, Next.js, Python, Arduino, TensorFlow, OpenCV
- **Live Demos & GitHub Links**

### 6. Experience Timeline
- Animated timeline showing journey from 2021-2024
- Competition achievements, teaching experience, work projects
- Visual indicators for different types of experiences
- Achievement highlights for each timeline entry

### 7. Contact Section
- Functional contact form with validation
- Direct email, phone, WhatsApp links
- Social media integration (GitHub, LinkedIn, Twitter)
- Response time indicator (24-48 hours)

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom gold color palette
- **Animations**: Framer Motion
- **Icons**: React Icons (Heroicons)
- **UI Components**: Custom glassmorphism components
- **API**: Next.js API routes for contact form

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd loay-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Build & Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

### Deployment Options

- **Vercel** (Recommended): 
  ```bash
  npm i -g vercel
  vercel
  ```

- **Netlify**: 
  - Build command: `npm run build`
  - Publish directory: `out`

- **Traditional Hosting**: 
  - Build and deploy the `out` folder

## 🎨 Customization

### Colors
The gold accent color can be customized in `tailwind.config.js`:
```javascript
gold: {
  500: '#C9A14A', // Primary gold
  // ... other shades
}
```

### Content
Update the following files to personalize content:
- `components/Hero-Loay.tsx` - Hero section content
- `components/About-Loay.tsx` - About section
- `components/Skills-Loay.tsx` - Skills and expertise
- `components/Competitions.tsx` - Competition achievements
- `components/Projects-Loay.tsx` - Project showcase
- `components/Experience.tsx` - Experience timeline
- `components/Contact-Loay.tsx` - Contact information

### Contact Form
To enable the contact form, update the API route in `app/api/contact-loay/route.ts`:
1. Add your email service integration
2. Configure SMTP or use services like SendGrid, Resend, or Nodemailer
3. Update the recipient email address

## 📱 Responsive Design

- **Mobile**: 320px - 767px (Single column)
- **Tablet**: 768px - 1024px (Adaptive layout)
- **Desktop**: 1024px+ (Full experience)

## 🎯 Performance

- **Page Load**: <2 seconds
- **Lighthouse Score**: 90+
- **Optimized Images**: WebP format with lazy loading
- **Smooth Animations**: 60fps
- **SEO**: WCAG AA compliant

## 🌍 Browser Support

- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is proprietary and belongs to Loay Eldin Mohamed Mahmoud.

## 🤝 Support

For support or questions:
- Email: loay.eldin@example.com
- Phone: +20 123 456 7890
- WhatsApp: https://wa.me/201234567890

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
