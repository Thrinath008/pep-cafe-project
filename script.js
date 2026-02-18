document.addEventListener("DOMContentLoaded", () => {
    const q = s => document.querySelector(s), qa = s => document.querySelectorAll(s);
    const nav = q('.navbar'), links = q('#nav-links'), btn = q('#mobile-menu-btn');

    const toggle = () => {
        links.classList.toggle('active');
        const i = btn.querySelector('i');
        i.classList.toggle('fa-bars'); i.classList.toggle('fa-times');
    };

    if (btn) btn.onclick = toggle;
    window.onscroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    qa('.nav-links a').forEach(a => a.onclick = () => links.classList.contains('active') && toggle());

    const qty = q('.quantity-selector input');
    if (qty) {
        q('.decrease').onclick = () => qty.value > 1 && qty.value--;
        q('.increase').onclick = () => qty.value < 10 && qty.value++;
    }

    qa('.tab-btn').forEach(b => b.onclick = () => {
        qa('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
        b.classList.add('active');
        q('#' + b.dataset.tab).classList.add('active');
    });
});
