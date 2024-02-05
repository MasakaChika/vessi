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

/* -- slide -- */
/*
var $slide = $('.slide')
  .slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 4000,
    autoplay: true,
  })
  .on({
    beforeChange: function (event, slick, currentSlide, nextSlide) {
      $('.slick-slide', this).eq(currentSlide).addClass('preve-slide');
      $('.slick-slide', this).eq(nextSlide).addClass('slide-animation');
    },
    afterChange: function () {
      $('.preve-slide', this).removeClass('preve-slide slide-animation');
    },
  });
$slide.find('.slick-slide').eq(0).addClass('slide-animation');
*/

// スライダーの初期化関数
function initResponsiveSlider() {
  // スマートフォン用スライダーの設定
  if ($(window).width() < 768) {
    // PC用スライダーが初期化されている場合は破棄
    if ($('.slide-pc').hasClass('slick-initialized')) {
      $('.slide-pc').slick('unslick');
    }
    // スマートフォン用スライダーを初期化
    if (!$('.slide').hasClass('slick-initialized')) {
      $('.slide')
        .slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          speed: 2000,
          autoplaySpeed: 4000,
          autoplay: true,
        })
        .on({
          beforeChange: function (event, slick, currentSlide, nextSlide) {
            $('.slick-slide', this).eq(currentSlide).addClass('preve-slide');
            $('.slick-slide', this).eq(nextSlide).addClass('slide-animation');
          },
          afterChange: function () {
            $('.preve-slide', this).removeClass('preve-slide slide-animation');
          },
        });
      $('.slide').find('.slick-slide').eq(0).addClass('slide-animation');
    }
  } else {
    // スマートフォン用スライダーが初期化されている場合は破棄
    if ($('.slide').hasClass('slick-initialized')) {
      $('.slide').slick('unslick');
    }
    // PC用スライダーを初期化
    if (!$('.slide-pc').hasClass('slick-initialized')) {
      $('.slide-pc').slick({
        // PC用スライダーの設定をここに追加
        // 例:
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 6000,
      });
    }
  }
}

// ドキュメントが読み込まれた時とウィンドウがリサイズされた時にスライダーを初期化
$(document).ready(initResponsiveSlider);
$(window).resize(initResponsiveSlider);

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
