init_base();

inView.offset(130);

$(document).ready(() => {
  initVideoBtn();
  init_simple_ani();
});


function initVideoBtn() {
  const vPop = $('#pop');

  $('.vBtn').click(function () {
    const t = $(this);
    const vid = t.attr('data-vid');

    if (vid) {
      ChungTool.addYouTube(vPop.find('.videoWrap'), vid);
      vPop.removeClass('hide');
    }
  });


  vPop.find('.bg').click(function () {
    vPop.find('.videoWrap').empty();
    vPop.addClass('hide');
  });

}

function init_simple_ani() {
  inView('.tempHide')
    .on('enter', (el) => {
      $(el).addClass('t-show');
    })
  // .on('exit', (el) => {
  //   $(el).removeClass('show');
  // })
}

// function init_simple_ani() {
//   inView('.tempHide')
//     .on('enter', (el) => {
//       $(el).addClass('show');
//     })
//     .on('exit', (el) => {
//       $(el).removeClass('show');
//     })
// }

// function init_sideBar() {
//   $(document).click(function (event) {
//     if (!$(event.target).closest("#menu-check").length) {
//       console.log('test');
//       $('#menu-check').prop("checked", false);
//     }
//   });


//   $('#menu a').click(function (e) {
//     e.preventDefault();
//     const t = $(this);
//     const id = t.attr('data-section');
//     ChungTool.pageScrollAni($(`#section-${id}`).offset().top)
//   });


//   // init position
//   const _t = $('#section-index').offset().top;
//   $('#menuToggle').css({
//     'top': `${_t + 40}px`
//   });

//   $('#menu').css({
//     'margin-top': `${-_t - 67}px`
//   });

// }