 document.querySelector('.menu_derecho').addEventListener('click', function() {
            const mobileMenu = document.querySelector('.select_menu');
            if (mobileMenu.style.display === 'flex') {
                mobileMenu.style.display = 'none';
            } else {
                mobileMenu.style.display = 'flex';
                mobileMenu.style.flexDirection = 'column';
                mobileMenu.style.position = 'absolute';
                mobileMenu.style.right = '20px';
                mobileMenu.style.top = '100px';
                mobileMenu.style.backgroundColor = '#f9f7e4';
                mobileMenu.style.padding = '20px';
                mobileMenu.style.borderRadius = '0 0 10px 10px';
                mobileMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                mobileMenu.style.gap = '15px';
            }
        });