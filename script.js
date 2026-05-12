document.addEventListener('DOMContentLoaded', () => {

    // ハンバーガーメニュー

    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', () => {

        hamburger.classList.toggle('active');

        navMenu.classList.toggle('active');

        overlay.classList.toggle('active');

        document.body.classList.toggle('menu-open');

    });

    // メニュークリックで閉じる

    document.querySelectorAll('.nav-menu a').forEach(link => {

        link.addEventListener('click', closeMenu);

    });

    // オーバーレイクリックで閉じる

    overlay.addEventListener('click', closeMenu);

    function closeMenu(){

        hamburger.classList.remove('active');

        navMenu.classList.remove('active');

        overlay.classList.remove('active');

        document.body.classList.remove('menu-open');

    }

    // フェードイン

    const fadeElements = document.querySelectorAll('.fade-in,.fade-up');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add('show');

            }

        });

    },{
        threshold: 0.2
    });

    fadeElements.forEach(element => {

        observer.observe(element);

    });

    // スクロール時ヘッダー縮小

    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {


        if(window.scrollY > 50){

            header.classList.add('scrolled');

        }else{

            header.classList.remove('scrolled');

        }

    });

});