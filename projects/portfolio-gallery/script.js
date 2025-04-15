document.addEventListener('DOMContentLoaded', () => {
    // Static image gallery data for a client-side only solution
    const galleryData = [
        {
            id: 1,
            title: 'Mountain Sunrise',
            description: 'A breathtaking view of the sun rising over mountain peaks, casting golden light across the valley.',
            category: 'nature',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['mountains', 'sunrise', 'landscape', 'dawn']
        },
        {
            id: 2,
            title: 'Modern Architecture',
            description: 'Clean lines and geometric patterns define this stunning example of contemporary architectural design.',
            category: 'architecture',
            image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['building', 'modern', 'design', 'urban']
        },
        {
            id: 3,
            title: 'Tech Workspace',
            description: 'A minimalist workspace with the latest technology gadgets arranged in a clean, productive layout.',
            category: 'technology',
            image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['workspace', 'computer', 'tech', 'minimal']
        },
        {
            id: 4,
            title: 'Portrait in Natural Light',
            description: 'A candid portrait capturing genuine emotion, shot with natural window light for a soft, flattering effect.',
            category: 'people',
            image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['portrait', 'people', 'lighting', 'emotion']
        },
        {
            id: 5,
            title: 'Ocean Waves at Sunset',
            description: 'Powerful ocean waves crash against the shore as the sun sets on the horizon, creating a dramatic seascape.',
            category: 'nature',
            image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['ocean', 'sunset', 'waves', 'seascape']
        },
        {
            id: 6,
            title: 'Historic Building',
            description: 'Ornate details and classic design elements showcase the rich history and craftsmanship of this heritage structure.',
            category: 'architecture',
            image: 'https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['historic', 'building', 'heritage', 'classic']
        },
        {
            id: 7,
            title: 'Circuit Board Close-up',
            description: 'Macro photography reveals the intricate patterns and components of a modern printed circuit board.',
            category: 'technology',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['electronics', 'circuit', 'macro', 'tech']
        },
        {
            id: 8,
            title: 'Street Portrait',
            description: 'A compelling street portrait capturing character and life story in a single authentic moment.',
            category: 'people',
            image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['street', 'portrait', 'character', 'urban']
        },
        {
            id: 9,
            title: 'Forest Waterfall',
            description: 'A serene waterfall hidden deep in a lush forest, surrounded by moss-covered rocks and vibrant greenery.',
            category: 'nature',
            image: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['waterfall', 'forest', 'nature', 'peaceful']
        },
        {
            id: 10,
            title: 'City Skyline',
            description: 'A dramatic city skyline photographed at blue hour, when artificial lights create a perfect balance with the fading natural light.',
            category: 'architecture',
            image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['skyline', 'city', 'urban', 'dusk']
        },
        {
            id: 11,
            title: 'Gadget Collection',
            description: 'A carefully arranged collection of modern tech gadgets and accessories showcasing current technology trends.',
            category: 'technology',
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['gadgets', 'tech', 'devices', 'modern']
        },
        {
            id: 12,
            title: 'Cultural Celebration',
            description: 'A vibrant scene capturing the joy and tradition of a cultural celebration with authentic costumes and expressions.',
            category: 'people',
            image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['cultural', 'celebration', 'tradition', 'festival']
        },
        {
            id: 13,
            title: 'Desert Landscape',
            description: 'The stark beauty of desert sand dunes, shaped by wind and light to create natural sculptural forms.',
            category: 'nature',
            image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['desert', 'dunes', 'landscape', 'minimal']
        },
        {
            id: 14,
            title: 'Futuristic Design',
            description: 'Innovative architectural design pushing boundaries with unconventional shapes and sustainable materials.',
            category: 'architecture',
            image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['futuristic', 'design', 'innovation', 'architecture']
        },
        {
            id: 15,
            title: 'Retro Computing',
            description: 'A nostalgic look at vintage computing technology that paved the way for our modern digital world.',
            category: 'technology',
            image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            tags: ['retro', 'vintage', 'computer', 'nostalgia']
        }
    ];

    // DOM Elements
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxTags = document.getElementById('lightbox-tags');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    const closeBtn = document.querySelector('.lightbox .close');
    const prevBtn = document.querySelector('.lightbox .prev');
    const nextBtn = document.querySelector('.lightbox .next');
    
    // Current state
    let currentCategory = 'all';
    let currentItems = [...galleryData];
    let currentIndex = 0;
    
    // Initialize gallery
    displayLoading();
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        displayGallery(currentItems);
    }, 800);
    
    // Functions
    function displayLoading() {
        gallery.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Loading gallery...</p>
            </div>
        `;
    }
    
    function displayGallery(items) {
        if (items.length === 0) {
            gallery.innerHTML = `
                <div class="no-results">
                    <h3>No images found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }
        
        gallery.innerHTML = '';
        
        items.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            galleryItem.innerHTML = `
                <div class="gallery-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="gallery-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="gallery-tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            
            galleryItem.addEventListener('click', () => {
                openLightbox(item, items);
            });
            
            gallery.appendChild(galleryItem);
        });
    }
    
    function filterGallery(category) {
        currentCategory = category;
        displayLoading();
        
        setTimeout(() => {
            if (category === 'all') {
                currentItems = [...galleryData];
            } else {
                currentItems = galleryData.filter(item => item.category === category);
            }
            
            // Apply search if there's a query
            const searchQuery = searchInput.value.trim().toLowerCase();
            if (searchQuery) {
                applySearch(searchQuery, false);
                return;
            }
            
            displayGallery(currentItems);
        }, 400);
    }
    
    function applySearch(query, showLoading = true) {
        if (showLoading) displayLoading();
        
        setTimeout(() => {
            let filteredItems;
            
            // First filter by category if one is selected
            filteredItems = currentCategory === 'all' ? 
                [...galleryData] : 
                galleryData.filter(item => item.category === currentCategory);
            
            // Then apply search
            if (query) {
                filteredItems = filteredItems.filter(item => 
                    item.title.toLowerCase().includes(query) ||
                    item.description.toLowerCase().includes(query) ||
                    item.tags.some(tag => tag.toLowerCase().includes(query))
                );
            }
            
            currentItems = filteredItems;
            displayGallery(currentItems);
        }, showLoading ? 400 : 0);
    }
    
    function openLightbox(item, items) {
        lightboxImg.src = item.image;
        lightboxTitle.textContent = item.title;
        lightboxDescription.textContent = item.description;
        
        // Display tags
        lightboxTags.innerHTML = '';
        item.tags.forEach(tag => {
            const tagEl = document.createElement('span');
            tagEl.className = 'tag';
            tagEl.textContent = tag;
            lightboxTags.appendChild(tagEl);
        });
        
        // Set current index for navigation
        currentIndex = items.findIndex(i => i.id === item.id);
        
        // Show lightbox
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    function showPreviousImage() {
        if (currentItems.length <= 1) return;
        
        currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
        const prevItem = currentItems[currentIndex];
        
        // Animate the transition
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = prevItem.image;
            lightboxTitle.textContent = prevItem.title;
            lightboxDescription.textContent = prevItem.description;
            
            // Update tags
            lightboxTags.innerHTML = '';
            prevItem.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'tag';
                tagEl.textContent = tag;
                lightboxTags.appendChild(tagEl);
            });
            
            lightboxImg.style.opacity = '1';
        }, 200);
    }
    
    function showNextImage() {
        if (currentItems.length <= 1) return;
        
        currentIndex = (currentIndex + 1) % currentItems.length;
        const nextItem = currentItems[currentIndex];
        
        // Animate the transition
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.src = nextItem.image;
            lightboxTitle.textContent = nextItem.title;
            lightboxDescription.textContent = nextItem.description;
            
            // Update tags
            lightboxTags.innerHTML = '';
            nextItem.tags.forEach(tag => {
                const tagEl = document.createElement('span');
                tagEl.className = 'tag';
                tagEl.textContent = tag;
                lightboxTags.appendChild(tagEl);
            });
            
            lightboxImg.style.opacity = '1';
        }, 200);
    }
    
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    function switchView(viewType) {
        if (viewType === 'grid') {
            gallery.className = 'gallery grid-view';
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        } else {
            gallery.className = 'gallery list-view';
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        }
    }
    
    // Event Listeners
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter gallery
            filterGallery(button.dataset.category);
        });
    });
    
    // Search
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        applySearch(searchInput.value.trim().toLowerCase());
    });
    
    searchInput.addEventListener('input', () => {
        applySearch(searchInput.value.trim().toLowerCase());
    });
    
    // View switching
    gridViewBtn.addEventListener('click', () => switchView('grid'));
    listViewBtn.addEventListener('click', () => switchView('list'));
    
    // Lightbox controls
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPreviousImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close lightbox when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'ArrowLeft') showPreviousImage();
            else if (e.key === 'ArrowRight') showNextImage();
            else if (e.key === 'Escape') closeLightbox();
        }
    });
    
    // Transition effect for lightbox image
    lightboxImg.style.transition = 'opacity 0.3s ease';
});