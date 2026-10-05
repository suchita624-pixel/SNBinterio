/**
 * SNB Interio - Interactive Logic & UI Controller
 * Designer: Shwetaa Nandan | Official YouTube: @snbInterrio | Pune & PCMC
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobile Navigation Toggle
  initMobileNav();

  // 3. Navbar Scroll Behavior & Active Links
  initNavbarScroll();

  // 4. Portfolio Filter System & Lightbox
  initPortfolio();

  // 5. Before / After Comparison Slider
  initBeforeAfterSlider();

  // 6. Interactive Budget & Cost Estimator
  initCostEstimator();

  // 7. Testimonials Carousel / Navigation
  initTestimonials();

  // 8. FAQ Accordion
  initFaqAccordion();

  // 9. Lead Consultation Form & WhatsApp Integration
  initContactForm();
});

/* ==========================================================================
   1. MOBILE NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileBackdrop = document.getElementById('mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (!mobileDrawer || !mobileBackdrop) return;
    mobileDrawer.classList.remove('translate-x-full');
    mobileBackdrop.classList.remove('opacity-0', 'pointer-events-none');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!mobileDrawer || !mobileBackdrop) return;
    mobileDrawer.classList.add('translate-x-full');
    mobileBackdrop.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   2. NAVBAR SCROLL EFFECT & ACTIVE STATE
   ========================================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('main-navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar shadow elevation on scroll
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add('shadow-md', 'bg-opacity-95');
      } else {
        navbar.classList.remove('shadow-md', 'bg-opacity-95');
      }
    }

    // Active navigation highlight
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-[#C86D51]', 'font-semibold');
      link.classList.add('text-[#6E655F]');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.remove('text-[#6E655F]');
        link.classList.add('text-[#C86D51]', 'font-semibold');
      }
    });
  });
}

/* ==========================================================================
   3. PORTFOLIO FILTER & LIGHTBOX MODAL (WITH REAL YOUTUBE TOURS)
   ========================================================================== */
const portfolioData = [
  {
    id: 1,
    category: 'living',
    title: '₹18 Lakh Wellington Residence',
    location: 'Pride World City, Charholi, Pune',
    scope: '2BHK Turnkey Interior (800 sq.ft)',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'An open-concept living and dining space blending warm oak fluted panels, tactile linen upholstery, custom floating console, and soft architectural coves for a tranquil Pune family sanctuary.',
    budgetTier: 'Luxury Turnkey (₹18 Lakhs)',
    duration: '40 Working Days',
    youtubeUrl: 'http://www.youtube.com/watch?v=j7bYomKWvTM'
  },
  {
    id: 2,
    category: 'kitchen',
    title: 'Warm Ashwood & Quartz Modular Kitchen',
    location: 'Shlok, Moshi, Pune',
    scope: 'Parallel Modular Kitchen & Storage',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    description: 'Ergonomic parallel modular layout featuring anti-scratch matte acrylic shutters, concealed pantry pull-outs, warm under-cabinet task lighting, and seamless quartz waterfall counter.',
    budgetTier: 'Custom Kitchen (₹11L Full 2BHK Package)',
    duration: '21 Working Days',
    youtubeUrl: 'http://www.youtube.com/watch?v=-BWtbbuWl7c'
  },
  {
    id: 3,
    category: 'bedroom',
    title: 'Zen Minimalist Master Suite',
    location: 'Baner, Pune',
    scope: 'Master Bedroom & Wardrobe',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    description: 'Designed for peaceful sleep with custom low-height platform bed, warm beige fabric headboard wall, integrated profile warm LED lighting, and floor-to-ceiling tinted glass wardrobes.',
    budgetTier: 'Under ₹14 Lakh 2BHK Scope',
    duration: '25 Working Days',
    youtubeUrl: 'http://www.youtube.com/watch?v=bgUuL2OwBCQ'
  },
  {
    id: 4,
    category: 'refurbishment',
    title: 'Complete 3BHK Transformation',
    location: 'Pune & PCMC',
    scope: 'Full 3BHK Home Makeover & Living Revamp',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=80',
    description: 'Our viral 110K+ viewed project! Replaced outdated bulky woodwork with sleek space-saving storage, opened up the balcony partition, and refreshed with warm neutral palettes.',
    budgetTier: '3BHK Complete Turnkey (₹18 Lakhs)',
    duration: '45 Working Days',
    youtubeUrl: 'http://www.youtube.com/watch?v=5UrCVwT3ia8'
  },
  {
    id: 5,
    category: 'living',
    title: 'Sunlit Earth-Toned Dining & Lounge',
    location: 'Kingsbury, Pride World City',
    scope: '2BHK Complete Interior',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    description: 'Seamless integration of solid cane dining chairs, curved arch display niche, and custom terracotta accent wall creating a cozy, welcoming ambiance for family gatherings.',
    budgetTier: 'Essential Warmth (₹11 Lakhs)',
    duration: '32 Working Days',
    youtubeUrl: 'http://www.youtube.com/watch?v=-BWtbbuWl7c'
  },
  {
    id: 6,
    category: 'bedroom',
    title: 'Cozy Guest Bedroom & Work Nook',
    location: 'Wakad, PCMC',
    scope: 'Multi-functional Bedroom & Study',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    description: 'Smart dual-purpose room featuring a minimalist floating study desk with cable management, warm cane shutters, and soft taupe accent wardrobe suited for work-from-home days.',
    budgetTier: 'Turnkey Bedroom & Study',
    duration: '18 Working Days',
    youtubeUrl: 'http://www.youtube.com/watch?v=bgUuL2OwBCQ'
  },
  {
    id: 7,
    category: 'kitchen',
    title: 'Nordic Clay L-Shaped Kitchen & Bar',
    location: 'Keshavnagar / Hadapsar, Pune',
    scope: 'Modular Kitchen with Breakfast Counter',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'A contemporary L-shaped kitchen with bespoke fluted breakfast counter, Blum soft-close hydraulic fittings, high-capacity spice pullouts, and durable quartz countertop.',
    budgetTier: 'Modular Kitchen & Bar',
    duration: '24 Working Days',
    youtubeUrl: 'http://www.youtube.com/watch?v=j7bYomKWvTM'
  },
  {
    id: 8,
    category: 'refurbishment',
    title: 'Complete Foyer & Living Transformation',
    location: 'Moshi, Pimpri-Chinchwad',
    scope: 'Living Room Makeover & Storage Upgrade',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    description: 'Replaced dark and heavy furniture with slimline shoe console, ribbed wooden partition, recessed LED cove false ceiling, and textured lime plaster TV backdrop.',
    budgetTier: 'Living Refurbishment',
    duration: '20 Working Days',
    youtubeUrl: 'http://www.youtube.com/watch?v=-BWtbbuWl7c'
  }
];

function initPortfolio() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioGrid = document.getElementById('portfolio-grid');
  const lightboxModal = document.getElementById('portfolio-lightbox');
  const lightboxBackdrop = document.getElementById('portfolio-lightbox-backdrop');
  const lightboxClose = document.getElementById('portfolio-lightbox-close');

  // Render cards
  function renderPortfolio(filter = 'all') {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';

    const filteredItems = filter === 'all' 
      ? portfolioData 
      : portfolioData.filter(item => item.category === filter);

    filteredItems.forEach((item) => {
      const card = document.createElement('div');
      card.className = `portfolio-item group relative bg-[#F2ECE1] rounded-2xl overflow-hidden border border-[#E5DDD0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer`;
      card.setAttribute('data-category', item.category);
      card.setAttribute('data-id', item.id);

      const categoryLabels = {
        living: 'Living Space',
        kitchen: 'Modular Kitchen',
        bedroom: 'Bedroom Suite',
        refurbishment: 'Home Refurbishment'
      };

      card.innerHTML = `
        <div class="relative w-full h-72 sm:h-80 overflow-hidden bg-[#FAF7F2]">
          <img 
            src="${item.image}" 
            alt="${item.title} - SNB Interio Pune" 
            loading="lazy" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#2C2623]/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#C86D51] px-3 py-1 rounded-full w-max shadow-md mb-2">
              <i data-lucide="eye" class="w-3.5 h-3.5"></i> Click to View Case Details
            </span>
            <p class="text-xs text-[#FAF7F2]/90 flex items-center gap-1">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#C86D51]"></i> ${item.location}
            </p>
          </div>
          <div class="absolute top-4 left-4">
            <span class="bg-[#FAF7F2]/90 backdrop-blur-md text-[#2C2623] text-xs font-medium px-3 py-1 rounded-full shadow-sm border border-[#E5DDD0]/70">
              ${categoryLabels[item.category] || 'Interior'}
            </span>
          </div>
          <div class="absolute top-4 right-4 opacity-90 group-hover:opacity-100">
            <span class="bg-[#FF0000] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
              <i data-lucide="play" class="w-3 h-3 fill-current"></i> YouTube Tour
            </span>
          </div>
        </div>

        <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-[#6E655F] mb-1.5">
              <span>${item.scope}</span>
              <span class="font-medium text-[#7A8471] bg-[#7A8471]/10 px-2 py-0.5 rounded-md">${item.duration}</span>
            </div>
            <h3 class="font-serif-heading text-xl sm:text-2xl font-bold text-[#2C2623] group-hover:text-[#C86D51] transition-colors leading-snug">
              ${item.title}
            </h3>
            <p class="text-sm text-[#6E655F] mt-2 line-clamp-2 leading-relaxed">
              ${item.description}
            </p>
          </div>

          <div class="pt-4 mt-4 border-t border-[#E5DDD0] flex items-center justify-between">
            <span class="text-xs font-medium text-[#6E655F]">
              Tier: <strong class="text-[#2C2623] font-semibold">${item.budgetTier}</strong>
            </span>
            <span class="text-xs font-semibold text-[#C86D51] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Specs <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openLightbox(item));
      portfolioGrid.appendChild(card);
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filter Buttons Click
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-[#2C2623]', 'text-[#FAF7F2]', 'shadow-md');
        b.classList.add('bg-[#F2ECE1]', 'text-[#6E655F]');
      });
      btn.classList.add('active', 'bg-[#2C2623]', 'text-[#FAF7F2]', 'shadow-md');
      btn.classList.remove('bg-[#F2ECE1]', 'text-[#6E655F]');

      const filterVal = btn.getAttribute('data-filter') || 'all';
      renderPortfolio(filterVal);
    });
  });

  // Lightbox Open
  function openLightbox(item) {
    if (!lightboxModal) return;

    document.getElementById('lightbox-img').src = item.image;
    document.getElementById('lightbox-img').alt = item.title;
    document.getElementById('lightbox-title').innerText = item.title;
    document.getElementById('lightbox-location').innerText = item.location;
    document.getElementById('lightbox-scope').innerText = item.scope;
    document.getElementById('lightbox-desc').innerText = item.description;
    document.getElementById('lightbox-duration').innerText = item.duration;
    document.getElementById('lightbox-budget').innerText = item.budgetTier;

    // YouTube watch link
    const ytBtn = document.getElementById('lightbox-youtube-btn');
    if (ytBtn) {
      ytBtn.href = item.youtubeUrl || 'https://www.youtube.com/@snbInterrio';
    }

    // Set CTA link to prefill form
    const consultBtn = document.getElementById('lightbox-consult-btn');
    if (consultBtn) {
      consultBtn.onclick = () => {
        closeLightbox();
        const projectTypeSelect = document.getElementById('form-project-type');
        const messageBox = document.getElementById('form-message');
        if (projectTypeSelect) {
          projectTypeSelect.value = item.category === 'refurbishment' ? 'Refurbishment' : 'New Home Interior';
        }
        if (messageBox) {
          messageBox.value = `Hi Shwetaa Nandan, I saw your project "${item.title}" (${item.location}) on the SNB Interio YouTube/website and would like a quote for my flat.`;
        }
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    }

    // Set WhatsApp inquiry button
    const whatsappBtn = document.getElementById('lightbox-whatsapp-btn');
    if (whatsappBtn) {
      const waText = encodeURIComponent(`Hello Shwetaa Nandan, I was viewing your project "${item.title}" (${item.location}) on SNB Interio (@snbInterrio). Can you share details or a quote for a similar requirement in Pune?`);
      whatsappBtn.href = `https://wa.me/918983052188?text=${waText}`;
    }

    lightboxModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  // Initial render
  renderPortfolio('all');
}

/* ==========================================================================
   4. BEFORE / AFTER COMPARISON SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const container = document.getElementById('before-after-slider');
  const afterImageWrapper = document.getElementById('ba-after-wrapper');
  const handle = document.getElementById('ba-handle');

  if (!container || !afterImageWrapper || !handle) return;

  let isDragging = false;

  function setSliderPosition(xPos) {
    const rect = container.getBoundingClientRect();
    let position = ((xPos - rect.left) / rect.width) * 100;

    if (position < 0) position = 0;
    if (position > 100) position = 100;

    afterImageWrapper.style.width = `${position}%`;
    handle.style.left = `${position}%`;
  }

  // Mouse events
  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    e.preventDefault();
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    setSliderPosition(e.clientX);
  });

  // Touch events
  handle.addEventListener('touchstart', () => {
    isDragging = true;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      setSliderPosition(e.touches[0].clientX);
    }
  }, { passive: true });

  // Click on container directly
  container.addEventListener('click', (e) => {
    setSliderPosition(e.clientX);
  });
}

/* ==========================================================================
   5. INTERACTIVE BUDGET & COST ESTIMATOR
   ========================================================================== */
function initCostEstimator() {
  const homeTypeSelect = document.getElementById('calc-home-type');
  const finishTierSelect = document.getElementById('calc-finish-tier');
  const addonCheckboxes = document.querySelectorAll('.calc-addon-check');
  
  const outputPrice = document.getElementById('calc-output-price');
  const outputDuration = document.getElementById('calc-output-duration');
  const outputBreakdown = document.getElementById('calc-output-breakdown');
  const sendEstimateWaBtn = document.getElementById('calc-send-wa-btn');
  const applyEstimateFormBtn = document.getElementById('calc-apply-form-btn');

  if (!homeTypeSelect || !finishTierSelect || !outputPrice) return;

  // Base pricing matrix (in Lakhs INR)
  const baseRates = {
    '1bhk': { essential: 4.0, signature: 5.5, luxury: 7.5, days: '25-30' },
    '2bhk': { essential: 6.5, signature: 8.5, luxury: 12.0, days: '35-40' },
    '3bhk': { essential: 9.5, signature: 13.0, luxury: 18.0, days: '40-48' },
    '4bhk': { essential: 13.5, signature: 18.0, luxury: 24.0, days: '45-60' },
    'refurbishment': { essential: 4.5, signature: 6.8, luxury: 9.5, days: '20-35' }
  };

  const addonRates = {
    'false-ceiling': 0.85,
    'modular-kitchen': 2.4,
    'custom-wardrobes': 2.0,
    'lighting-decor': 0.7
  };

  function calculateEstimate() {
    const homeType = homeTypeSelect.value;
    const finishTier = finishTierSelect.value;
    const config = baseRates[homeType] || baseRates['2bhk'];

    let base = config[finishTier] || config['signature'];
    let totalAddons = 0;
    let selectedAddonNames = [];

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        const rate = addonRates[cb.value] || 0;
        totalAddons += rate;
        selectedAddonNames.push(cb.getAttribute('data-name') || cb.value);
      }
    });

    const totalMin = (base + totalAddons * 0.85).toFixed(1);
    const totalMax = (base * 1.15 + totalAddons * 1.1).toFixed(1);

    outputPrice.innerText = `₹${totalMin}L - ₹${totalMax} Lakhs*`;
    outputDuration.innerText = `${config.days} Working Days`;

    if (outputBreakdown) {
      const tierText = finishTier.charAt(0).toUpperCase() + finishTier.slice(1);
      const homeText = homeType.toUpperCase();
      outputBreakdown.innerHTML = `
        <div class="flex items-center justify-between text-xs text-[#6E655F]">
          <span>Configuration:</span>
          <span class="font-semibold text-[#2C2623]">${homeText} (${tierText} Tier)</span>
        </div>
        <div class="flex items-center justify-between text-xs text-[#6E655F] mt-1">
          <span>Turnkey Scope:</span>
          <span class="font-semibold text-[#7A8471]">Carpentry, Hardware, Finishes & Handover</span>
        </div>
        ${selectedAddonNames.length > 0 ? `
          <div class="mt-2 text-xs text-[#6E655F]">
            <span class="font-medium text-[#2C2623]">Included Add-ons:</span>
            <ul class="list-disc list-inside mt-0.5 text-[#6E655F] space-y-0.5">
              ${selectedAddonNames.map(name => `<li>${name}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      `;
    }

    // Update WhatsApp link
    if (sendEstimateWaBtn) {
      const waMsg = encodeURIComponent(
        `Hello Shwetaa Nandan (SNB Interio / @snbInterrio),\n` +
        `I generated an estimate on your website:\n` +
        `• Property: ${homeType.toUpperCase()}\n` +
        `• Finish Tier: ${finishTier.toUpperCase()}\n` +
        `• Add-ons: ${selectedAddonNames.join(', ') || 'None'}\n` +
        `• Estimated Budget: ₹${totalMin}L - ₹${totalMax}L\n\n` +
        `Can we discuss this and schedule a site visit in Pune / PCMC?`
      );
      sendEstimateWaBtn.href = `https://wa.me/918983052188?text=${waMsg}`;
    }
  }

  homeTypeSelect.addEventListener('change', calculateEstimate);
  finishTierSelect.addEventListener('change', calculateEstimate);
  addonCheckboxes.forEach(cb => cb.addEventListener('change', calculateEstimate));

  if (applyEstimateFormBtn) {
    applyEstimateFormBtn.addEventListener('click', () => {
      const contactSection = document.getElementById('contact');
      const formProjectType = document.getElementById('form-project-type');
      const formBudget = document.getElementById('form-budget');
      const formMessage = document.getElementById('form-message');

      if (formProjectType) {
        formProjectType.value = homeTypeSelect.value === 'refurbishment' ? 'Refurbishment' : 'New Home Interior';
      }
      if (formBudget) {
        formBudget.value = outputPrice.innerText.replace('*', '').trim();
      }
      if (formMessage) {
        formMessage.value = `Estimated budget for ${homeTypeSelect.value.toUpperCase()} (${finishTierSelect.value}): ${outputPrice.innerText}. Looking for consultation at Pride World City / Pune area.`;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  calculateEstimate();
}

/* ==========================================================================
   6. TESTIMONIALS CAROUSEL
   ========================================================================== */
function initTestimonials() {
  const testimonials = [
    {
      name: "Rohit & Meera Kulkarni",
      location: "Wellington, Pride World City",
      project: "2BHK Full Turnkey Home (₹18L)",
      rating: 5,
      review: "We were looking for an interior designer with minimalistic design. While going through several YouTube videos we found a video from SNB Interio (@snbInterrio) and we liked the designs. Shwetaa Nandan visited our site at Pride World City, understood our lifestyle, and delivered an exceptionally calm, warm home. Exactly on time!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      badge: "Google Verified Review"
    },
    {
      name: "Pooja & Amit Deshmukh",
      location: "Shlok, Moshi, Pune",
      project: "2BHK Interior & Modular Kitchen (₹11L)",
      rating: 5,
      review: "Shwetaa Nandan is a very talented designer. She understood our requirements as per our budget and transformed our home beautifully. She also delivered the project on time without any surprise cost hikes. Highly recommend SNB Interio!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      badge: "Google Verified Review"
    },
    {
      name: "Sandeep & Neha Patil",
      location: "Baner, Pune",
      project: "Full 2BHK Interior (Under ₹14L)",
      rating: 5,
      review: "She patiently took our inputs and worked along our needs. She even suggested better options to cater to our needs without overshooting the budget. We have loved her work so much! The lighting and fluted woodwork turned out divine.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      badge: "Google Verified Review"
    },
    {
      name: "Anand & Shailaja Joshi",
      location: "Kingsbury, Pride World City",
      project: "3BHK Minimalist Japandi Interior",
      rating: 5,
      review: "The transparent budgeting was the biggest blessing. Shwetaa Nandan gives genuine advice rather than pushing unnecessary expensive elements. The quality of carpentry and laminate work is flawless.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      badge: "Google Verified Review"
    }
  ];

  let currentIndex = 0;
  const container = document.getElementById('testimonial-carousel');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const dotsContainer = document.getElementById('testimonial-dots');

  if (!container) return;

  function renderSlide(index) {
    const item = testimonials[index];
    container.innerHTML = `
      <div class="bg-[#FAF7F2] p-8 sm:p-10 rounded-2xl border border-[#E5DDD0] shadow-sm relative overflow-hidden transition-all duration-500">
        <div class="absolute top-4 right-6 text-7xl font-serif text-[#C86D51]/15 select-none pointer-events-none">“</div>
        
        <div class="flex items-center gap-1 text-[#E5A93C] mb-4">
          ${'<i data-lucide="star" class="w-5 h-5 fill-current"></i>'.repeat(item.rating)}
          <span class="ml-2 text-xs font-semibold text-[#7A8471] bg-[#7A8471]/10 px-2 py-0.5 rounded-full flex items-center gap-1">
            <i data-lucide="badge-check" class="w-3.5 h-3.5 text-[#7A8471]"></i> ${item.badge}
          </span>
        </div>

        <p class="text-base sm:lg text-[#2C2623] italic font-serif leading-relaxed mb-6">
          "${item.review}"
        </p>

        <div class="flex items-center gap-4 pt-4 border-t border-[#E5DDD0]">
          <img src="${item.avatar}" alt="${item.name}" class="w-12 h-12 rounded-full object-cover border-2 border-[#C86D51]" />
          <div>
            <h4 class="font-bold text-[#2C2623] text-base">${item.name}</h4>
            <p class="text-xs text-[#6E655F]">${item.project} · <span class="text-[#C86D51] font-medium">${item.location}</span></p>
          </div>
        </div>
      </div>
    `;

    if (dotsContainer) {
      dotsContainer.innerHTML = testimonials.map((_, i) => `
        <button class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-[#C86D51]' : 'bg-[#D9CFC4]'}" aria-label="Slide ${i+1}"></button>
      `).join('');

      dotsContainer.querySelectorAll('button').forEach((btn, i) => {
        btn.addEventListener('click', () => {
          currentIndex = i;
          renderSlide(currentIndex);
        });
      });
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      renderSlide(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % testimonials.length;
      renderSlide(currentIndex);
    });
  }

  // Auto rotate every 8 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    renderSlide(currentIndex);
  }, 8000);

  renderSlide(0);
}

/* ==========================================================================
   7. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all others
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const content = otherItem.querySelector('.faq-content');
        if (content) content.style.maxHeight = null;
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('active');
        const content = item.querySelector('.faq-content');
        if (content) {
          content.style.maxHeight = content.scrollHeight + 32 + 'px';
        }
      }
    });
  });
}

/* ==========================================================================
   8. LEAD CONSULTATION FORM & WHATSAPP INTEGRATION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('consultation-form');
  const successModal = document.getElementById('form-success-modal');
  const successClose = document.getElementById('form-success-close');
  const successWaJump = document.getElementById('form-success-wa-jump');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const location = document.getElementById('form-location')?.value.trim();
    const projectType = document.getElementById('form-project-type')?.value;
    const budget = document.getElementById('form-budget')?.value;
    const message = document.getElementById('form-message')?.value.trim();

    // Basic validation
    if (!name || !phone || !location) {
      alert('Please fill in your Name, Phone Number, and Property Location.');
      return;
    }

    if (phone.length < 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    // Prepare WhatsApp pre-filled text
    const text = encodeURIComponent(
      `Hello Shwetaa Nandan (SNB Interio / @snbInterrio),\n\n` +
      `I would like to schedule a free interior consultation for my home:\n` +
      `• Name: ${name}\n` +
      `• Contact: ${phone}\n` +
      `• Property Location: ${location}\n` +
      `• Project Type: ${projectType || 'Residential Interior'}\n` +
      `• Estimated Budget: ${budget || 'Flexible'}\n` +
      `• Specific Notes: ${message || 'Looking for minimalist, budget-conscious design and on-time execution.'}\n\n` +
      `Please let me know when we can speak or meet for a site visit!`
    );

    const waUrl = `https://wa.me/918983052188?text=${text}`;

    if (successWaJump) {
      successWaJump.href = waUrl;
    }

    // Display nice confirmation modal
    if (successModal) {
      successModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    // Reset form
    form.reset();
  });

  if (successClose && successModal) {
    successClose.addEventListener('click', () => {
      successModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
}
