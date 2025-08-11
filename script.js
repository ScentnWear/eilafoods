// Products data
const products = {
    'hormone-balance-tea': {
        name: 'Hormone Balance Tea',
        price: 2500,
        originalPrice: 3000,
        image: 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        shortDescription: 'A carefully crafted herbal tea blend designed to naturally support hormonal balance and overall wellness.',
        description: `
            <p>Our Hormone Balance Tea is a premium herbal blend specifically formulated to support natural hormonal equilibrium. This carefully crafted tea combines traditional herbs known for their hormone-balancing properties.</p>
            <p>Made with 100% organic ingredients, this tea provides a gentle and natural approach to supporting your body's hormonal health. Each cup delivers a soothing experience while working to promote balance from within.</p>
            <p>Perfect for daily use as part of your wellness routine. The tea has a pleasant, mild flavor that makes it enjoyable to drink throughout the day.</p>
        `,
        benefits: `
            <ul>
                <li><strong>Hormonal Balance:</strong> Supports natural hormone regulation</li>
                <li><strong>Stress Relief:</strong> Contains adaptogenic herbs that help manage stress</li>
                <li><strong>Better Sleep:</strong> Promotes restful sleep and relaxation</li>
                <li><strong>Digestive Support:</strong> Gentle on the stomach with digestive benefits</li>
                <li><strong>Natural Energy:</strong> Provides sustained energy without caffeine crashes</li>
                <li><strong>Antioxidant Rich:</strong> High in natural antioxidants for overall health</li>
            </ul>
        `,
        ingredients: `
            <ul>
                <li><strong>Chasteberry:</strong> Known for supporting female hormonal health</li>
                <li><strong>Red Raspberry Leaf:</strong> Rich in vitamins and minerals</li>
                <li><strong>Spearmint:</strong> Helps with hormonal balance and digestion</li>
                <li><strong>Nettle Leaf:</strong> Nutrient-dense herb with balancing properties</li>
                <li><strong>Lemon Balm:</strong> Calming herb that supports relaxation</li>
                <li><strong>Rose Petals:</strong> Adds flavor and provides vitamin C</li>
            </ul>
            <p><em>All ingredients are certified organic and ethically sourced.</em></p>
        `,
        usage: `
            <div class="usage-steps">
                <h4>Preparation Instructions:</h4>
                <ol>
                    <li>Boil fresh, filtered water to 212°F (100°C)</li>
                    <li>Add 1-2 teaspoons of tea blend to your cup or teapot</li>
                    <li>Pour hot water over the herbs and steep for 5-7 minutes</li>
                    <li>Strain the tea and enjoy while warm</li>
                </ol>
                <h4>Recommended Usage:</h4>
                <ul>
                    <li>Drink 1-2 cups daily for optimal benefits</li>
                    <li>Best consumed between meals</li>
                    <li>Can be enjoyed morning or evening</li>
                    <li>Consistent daily use recommended for best results</li>
                </ul>
                <p><strong>Note:</strong> Consult with your healthcare provider before use if you are pregnant, nursing, or have any medical conditions.</p>
            </div>
        `
    },
    'pcos-support-mix': {
        name: 'PCOS Support Mix',
        price: 3200,
        originalPrice: 3800,
        image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        shortDescription: 'A specialized superfood blend formulated to support women with PCOS through natural nutrition.',
        description: `
            <p>Our PCOS Support Mix is a comprehensive superfood blend specifically designed for women managing Polycystic Ovary Syndrome (PCOS). This powerful formula combines nutrient-dense ingredients that target the root causes of PCOS symptoms.</p>
            <p>Developed with input from nutritionists and healthcare professionals, this mix provides essential nutrients that support insulin sensitivity, hormone balance, and overall reproductive health.</p>
            <p>Each serving is packed with vitamins, minerals, and phytonutrients that work synergistically to support your body's natural healing processes.</p>
        `,
        benefits: `
            <ul>
                <li><strong>Insulin Sensitivity:</strong> Supports healthy blood sugar levels</li>
                <li><strong>Hormone Regulation:</strong> Helps balance testosterone and other hormones</li>
                <li><strong>Weight Management:</strong> Supports healthy metabolism and weight control</li>
                <li><strong>Inflammation Reduction:</strong> Contains anti-inflammatory compounds</li>
                <li><strong>Energy Boost:</strong> Provides sustained energy throughout the day</li>
                <li><strong>Skin Health:</strong> Supports clear, healthy skin from within</li>
                <li><strong>Digestive Health:</strong> Promotes healthy gut function</li>
            </ul>
        `,
        ingredients: `
            <ul>
                <li><strong>Inositol:</strong> Supports insulin sensitivity and ovulation</li>
                <li><strong>Cinnamon Extract:</strong> Helps regulate blood sugar levels</li>
                <li><strong>Spearmint Powder:</strong> Supports hormone balance</li>
                <li><strong>Fenugreek:</strong> Aids in glucose metabolism</li>
                <li><strong>Turmeric:</strong> Powerful anti-inflammatory properties</li>
                <li><strong>Green Tea Extract:</strong> Rich in antioxidants</li>
                <li><strong>Chromium:</strong> Supports healthy glucose metabolism</li>
                <li><strong>Omega-3 Rich Seeds:</strong> Supports heart and brain health</li>
            </ul>
            <p><em>All ingredients are organic, non-GMO, and third-party tested for purity.</em></p>
        `,
        usage: `
            <div class="usage-steps">
                <h4>How to Use:</h4>
                <ol>
                    <li>Mix 1-2 tablespoons with 8-12 oz of water, smoothie, or yogurt</li>
                    <li>Stir well and let sit for 2-3 minutes to allow full mixing</li>
                    <li>Consume immediately for best taste and nutrition</li>
                    <li>Can also be added to oatmeal, cereals, or baked goods</li>
                </ol>
                <h4>Best Practices:</h4>
                <ul>
                    <li>Take once daily, preferably with breakfast</li>
                    <li>Start with 1 tablespoon and gradually increase to 2</li>
                    <li>Maintain consistent daily use for optimal results</li>
                    <li>Store in a cool, dry place away from direct sunlight</li>
                </ul>
                <p><strong>Important:</strong> Please consult your healthcare provider before starting any new supplement, especially if you have medical conditions or take medications.</p>
            </div>
        `
    },
    'metabolism-booster': {
        name: 'Metabolism Booster',
        price: 2800,
        originalPrice: 3300,
        image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
        images: [
            'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
            'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=600'
        ],
        shortDescription: 'A natural blend of metabolism-boosting ingredients designed to support healthy weight management.',
        description: `
            <p>Our Metabolism Booster is a scientifically formulated blend of natural ingredients designed to support healthy metabolism and weight management. This powerful formula works by supporting your body's natural fat-burning processes.</p>
            <p>Unlike synthetic alternatives, our metabolism booster uses only natural, plant-based ingredients that work in harmony with your body. Each ingredient has been carefully selected based on scientific research and traditional use.</p>
            <p>This product is designed to be part of a healthy lifestyle that includes proper nutrition and regular physical activity.</p>
        `,
        benefits: `
            <ul>
                <li><strong>Metabolic Support:</strong> Helps boost natural metabolism</li>
                <li><strong>Energy Enhancement:</strong> Provides clean, sustained energy</li>
                <li><strong>Fat Burning:</strong> Supports healthy fat oxidation</li>
                <li><strong>Appetite Control:</strong> Helps manage healthy appetite</li>
                <li><strong>Thermogenesis:</strong> Supports body's heat production</li>
                <li><strong>Blood Sugar Support:</strong> Helps maintain healthy glucose levels</li>
                <li><strong>Mental Focus:</strong> Supports cognitive function and alertness</li>
            </ul>
        `,
        ingredients: `
            <ul>
                <li><strong>Green Coffee Bean Extract:</strong> Rich in chlorogenic acid</li>
                <li><strong>Garcinia Cambogia:</strong> Supports healthy appetite</li>
                <li><strong>Green Tea Extract:</strong> High in metabolism-boosting EGCG</li>
                <li><strong>Cayenne Pepper:</strong> Supports thermogenesis</li>
                <li><strong>L-Carnitine:</strong> Helps convert fat to energy</li>
                <li><strong>Ginger Root:</strong> Supports digestion and metabolism</li>
                <li><strong>Forskolin:</strong> Supports healthy body composition</li>
                <li><strong>Chromium Picolinate:</strong> Supports glucose metabolism</li>
            </ul>
            <p><em>All ingredients are standardized extracts for maximum potency and effectiveness.</em></p>
        `,
        usage: `
            <div class="usage-steps">
                <h4>Directions for Use:</h4>
                <ol>
                    <li>Take 1-2 capsules 30 minutes before meals</li>
                    <li>Start with 1 capsule daily for the first week</li>
                    <li>Gradually increase to 2 capsules daily if well-tolerated</li>
                    <li>Take with plenty of water (8-10 oz)</li>
                </ol>
                <h4>Optimization Tips:</h4>
                <ul>
                    <li>Take on an empty stomach for best absorption</li>
                    <li>Combine with regular exercise for enhanced results</li>
                    <li>Maintain a balanced, healthy diet</li>
                    <li>Stay well hydrated throughout the day</li>
                    <li>Avoid taking within 6 hours of bedtime</li>
                </ul>
                <p><strong>Caution:</strong> Do not exceed recommended dosage. Not suitable for pregnant or nursing women. Consult your healthcare provider if you have any medical conditions.</p>
            </div>
        `
    }
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Mobile Navigation
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Statistics counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateNumber(entry.target, target);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, stepTime);
}

// Product click handlers
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.getAttribute('data-product');
            window.location.href = `product.html?id=${productId}`;
        });
    });

    // Initialize animations
    animateStats();
    
    // Auto-rotate testimonials
    rotateTestimonials();
});

// Testimonials rotation
function rotateTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;

    if (testimonials.length === 0) return;

    setInterval(() => {
        testimonials[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonials.length;
        testimonials[currentIndex].classList.add('active');
    }, 5000); // Change every 5 seconds
}

// Product page functions
function getProductFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function loadProductDetails() {
    const productId = getProductFromURL();
    const product = products[productId];
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.title = `${product.name} - Eila Foods`;
    document.getElementById('page-title').textContent = `${product.name} - Eila Foods`;
    
    // Update breadcrumb
    document.getElementById('breadcrumb-product').textContent = product.name;
    
    // Update main product info
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-price').textContent = `PKR ${product.price.toLocaleString()}`;
    document.getElementById('product-short-description').textContent = product.shortDescription;
    
    // Update images
    document.getElementById('main-product-image').src = product.images[0];
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        if (product.images[index]) {
            thumb.src = product.images[index];
            thumb.addEventListener('click', () => {
                document.getElementById('main-product-image').src = product.images[index];
                thumbnails.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        }
    });
    
    // Update tab content
    document.getElementById('detailed-description').innerHTML = product.description;
    document.getElementById('product-benefits').innerHTML = product.benefits;
    document.getElementById('product-ingredients').innerHTML = product.ingredients;
    document.getElementById('product-usage').innerHTML = product.usage;
    
    // Load related products
    loadRelatedProducts(productId);
}

function loadRelatedProducts(currentProductId) {
    const relatedContainer = document.getElementById('related-products');
    if (!relatedContainer) return;
    
    const otherProducts = Object.keys(products).filter(id => id !== currentProductId);
    
    relatedContainer.innerHTML = otherProducts.map(productId => {
        const product = products[productId];
        return `
            <div class="product-card" data-product="${productId}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="price">PKR ${product.price.toLocaleString()}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click handlers to related products
    relatedContainer.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = card.getAttribute('data-product');
            window.location.href = `product.html?id=${productId}`;
        });
    });
}

function setupProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function setupWhatsAppOrder() {
    const whatsappBtn = document.getElementById('whatsapp-order');
    if (!whatsappBtn) return;
    
    whatsappBtn.addEventListener('click', () => {
        const productId = getProductFromURL();
        const product = products[productId];
        
        if (!product) return;
        
        const message = encodeURIComponent(
            `Hi! I'm interested in ordering the ${product.name}.\n\n` +
            `Product: ${product.name}\n` +
            `Price: PKR ${product.price.toLocaleString()}\n` +
            `Product Link: ${window.location.href}\n\n` +
            `Please let me know about delivery details and payment options. Thank you!`
        );
        
        const whatsappURL = `https://wa.me/923006605128?text=${message}`;
        window.open(whatsappURL, '_blank');
    });
}

// Newsletter subscription
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        const button = newsletterForm.querySelector('button');
        const input = newsletterForm.querySelector('input');
        
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const email = input.value.trim();
            
            if (email && validateEmail(email)) {
                // Here you would typically send the email to your backend
                alert('Thank you for subscribing! We\'ll send you health tips and updates.');
                input.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add loading states and error handling
function showLoading() {
    // Add loading spinner or animation
}

function hideLoading() {
    // Remove loading spinner or animation
}

// Scroll to top functionality
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: var(--primary-color);
                color: white;
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                cursor: pointer;
                z-index: 1000;
                transition: var(--transition);
            `;
            document.body.appendChild(scrollBtn);
            
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    } else {
        const scrollBtn = document.querySelector('.scroll-to-top');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// Performance optimization: Lazy load images
const lazyImages = document.querySelectorAll('img[data-lazy]');
if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.lazy;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}

// Add some interactive elements for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.product-card, .stat-item, .testimonial');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});