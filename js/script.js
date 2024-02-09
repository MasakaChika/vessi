/* ------- slide ------- */
$(document).ready(function () {
  $('.slide').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
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

/* ------- swiper ------- */
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

/* ------- faq ------- */
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

/* ------- copyright year ------- */
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

/*
document.addEventListener('DOMContentLoaded', () => {
  // 通常のセクション用のObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      });
    },
    {
      rootMargin: '-50% 0px -50% 0px',
    }
  );

  // #topセクション用のObserver
  const topObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const navLink = document.querySelector(`a[href="#${entry.target.id}"]`);
        if (entry.isIntersecting) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      });
    },
    {
      rootMargin: '0% 0px', // ここで#top用のrootMarginを変更
    }
  );

  // 監視対象のセクションを追加
  document.querySelectorAll('section').forEach((section) => {
    if (section.id === 'top') {
      topObserver.observe(section); // #topだけ別のObserverで監視
    } else {
      observer.observe(section);
    }
  });
});
*/
//aos設定
AOS.init({
  offset: 0,
});

document.addEventListener('DOMContentLoaded', function () {
  const visited = localStorage.getItem('visited');
  const scrollContainer = document.querySelector('.scroll-container');

  if (!visited) {
    // ユーザーが初めて訪れた場合、アニメーションを有効にする
    scrollContainer.style.animation = 'fadein 2s ease-in forwards';
    // 訪問済みとしてローカルストレージに記録
    localStorage.setItem('visited', 'true');
  } else {
    // 既に訪れたことがあるユーザーの場合、アニメーションを無効にする
    scrollContainer.style.opacity = '1'; // アニメーションの代わりに即座に表示
  }
});
