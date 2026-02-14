document.addEventListener('DOMContentLoaded', function() {
            // Password check
            const passwordModal = document.getElementById('passwordModal');
            const welcomeScreen = document.getElementById('welcomeScreen');
            const mainContent = document.getElementById('mainContent');
            const passwordInput = document.getElementById('passwordInput');
            const submitPassword = document.getElementById('submitPassword');
            const togglePassword = document.getElementById('togglePassword');
            
            submitPassword.addEventListener('click', function() {
                if (passwordInput.value.toLowerCase() === 'september202025') {
                    passwordModal.style.opacity = '0';
                    setTimeout(() => {
                        passwordModal.style.display = 'none';
                        welcomeScreen.style.display = 'flex';
                        
                        setTimeout(() => {
                            welcomeScreen.style.opacity = '0';
                            setTimeout(() => {
                                welcomeScreen.style.display = 'none';
                                mainContent.style.display = 'block';
                            }, 800);
                        }, 2500);
                    }, 500);
                } else {
                    passwordInput.value = '';
                    passwordInput.placeholder = 'Try again, love...';
                    passwordInput.style.borderColor = '#ff4d4d';
                    setTimeout(() => {
                        passwordInput.style.borderColor = '#ffb7c5';
                        passwordInput.placeholder = 'date we became official...';
                    }, 1500);
                }
            });
            
            // Allow Enter key to submit password
            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    submitPassword.click();
                }
            });

            // Toggle show/hide password
            if (togglePassword) {
                togglePassword.addEventListener('click', function() {
                    const isPassword = passwordInput.getAttribute('type') === 'password';
                    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
                    this.textContent = isPassword ? '🙈' : '👁️';
                    this.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
                });
            }
            
            // Tab switching
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');
                    
                    // Update active tab
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show corresponding content
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === targetTab) {
                            content.classList.add('active');
                        }
                    });
                });
            });

            // Music player: play/pause per song and ensure only one plays at a time
            const songs = document.querySelectorAll('.song');
            let currentAudio = null;
            let currentBtn = null;

            songs.forEach(song => {
                const btn = song.querySelector('.play-btn');
                const audio = song.querySelector('audio');
                if (!btn || !audio) return;

                btn.addEventListener('click', function(e) {
                    e.stopPropagation(); // prevent triggering other click handlers (e.g., expandable letters)

                    // If a different audio is playing, stop it
                    if (currentAudio && currentAudio !== audio) {
                        currentAudio.pause();
                        currentAudio.currentTime = 0;
                        if (currentBtn) currentBtn.textContent = '▶️';
                    }

                    if (audio.paused) {
                        audio.play();
                        btn.textContent = '⏸️';
                        currentAudio = audio;
                        currentBtn = btn;
                    } else {
                        audio.pause();
                        btn.textContent = '▶️';
                        if (currentAudio === audio) {
                            currentAudio = null;
                            currentBtn = null;
                        }
                    }
                });

                audio.addEventListener('ended', function() {
                    btn.textContent = '▶️';
                    if (currentAudio === audio) {
                        currentAudio = null;
                        currentBtn = null;
                    }
                });
            });
            
            // Expandable love letters with auto-close functionality
            const letters = document.querySelectorAll('.letter, .letter1, .letter2');
            
            letters.forEach(letter => {
                letter.addEventListener('click', function() {
                    // Close all other letters
                    letters.forEach(otherLetter => {
                        if (otherLetter !== this) {
                            otherLetter.classList.remove('expanded');
                        }
                    });
                    // Toggle the clicked letter
                    this.classList.toggle('expanded');
                });
            });
            
            
            // Add floating decorative elements
            function addFloatingElements() {
                for (let i = 0; i < 15; i++) {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = '❤️';
                    heart.style.left = Math.random() * 100 + '%';
                    heart.style.top = Math.random() * 100 + '%';
                    heart.style.animationDelay = Math.random() * 5 + 's';
                    document.body.appendChild(heart);
                }
                
                for (let i = 0; i < 5; i++) {
                    const teddy = document.createElement('div');
                    teddy.classList.add('teddy-bear');
                    teddy.innerHTML = '🧸';
                    teddy.style.left = Math.random() * 100 + '%';
                    teddy.style.top = Math.random() * 100 + '%';
                    teddy.style.animationDelay = Math.random() * 5 + 's';
                    document.body.appendChild(teddy);
                }
            }
            
            addFloatingElements();
        });