//slickを動かすためのコード
$(document).ready(function () {
  $('.slide').slick({
    dots: false,
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  });
});

/* -- ナビゲーションclose -- */
document.addEventListener('DOMContentLoaded', function () {
  // ナビゲーションのリンクを取得
  var navLinks = document.querySelectorAll('.site-nav__content-nav a');

  // 各リンクに対してイベントリスナーを設定
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      // ナビゲーションを閉じるためにチェックボックスの状態を変更
      document.getElementById('nav-toggle').checked = false;
    });
  });
});

//Swiper
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel: true,
  keyboard: true,
});

//アコーディオンの設定

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.faq__button').forEach(function (button) {
    button.addEventListener('click', function () {
      const openIcon = this.querySelector('.faq__open');
      const content = this.nextElementSibling;

      if (content.style.maxHeight) {
        // maxHeightが設定されている（つまり、セクションが開いている）場合
        content.style.maxHeight = null; // コンテンツを非表示にする
        openIcon.style.transform = 'rotate(-90deg)'; // アイコンを元の角度に戻す
      } else {
        // maxHeightが設定されていない（セクションが閉じている）場合
        content.style.maxHeight = content.scrollHeight + 'px'; // コンテンツの高さを設定して表示する
        openIcon.style.transform = 'rotate(0deg)'; // アイコンを-90度に回転させる
      }
    });
  });
});

//smallタグに年が変われば更新されるようにする
const year = document.querySelector('#year');
const date = new Date();
year.textContent = date.getFullYear();

console.log(date.getFullYear()); //年を取得
console.log(date.getDay()); //曜日を取得
console.log(date.getHours()); //時を取得

//セクション表示状態の監視
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.querySelector(`a[href="#${entry.target.id}"]`).classList.add('active');
        } else {
          document.querySelector(`a[href="#${entry.target.id}"]`).classList.remove('active');
        }
      });
    },
    {
      rootMargin: '-50% 0px -50% 0px',
    }
  );

  // 監視対象のセクションを追加
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });
});

//FAQトグル用
document.querySelectorAll('.faq__button').forEach((button) => {
  button.addEventListener('click', () => {
    const toggleContent = button.nextElementSibling;

    if (toggleContent.style.display === 'block') {
      toggleContent.style.display = 'none';
    } else {
      toggleContent.style.display = 'block';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var toTopLink = document.querySelector('.to-top a');

  toTopLink.addEventListener('click', function (e) {
    // デフォルトのアンカー動作を防止
    e.preventDefault();

    // スムーズスクロールを実行
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
