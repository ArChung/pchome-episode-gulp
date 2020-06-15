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
    ChungTool.addYouTube(vPop.find('.videoWrap'), vid);
    vPop.removeClass('hide');
  });


  vPop.find('.bg').click(function () {
    vPop.find('.videoWrap').empty();
    vPop.addClass('hide');
  });

}

function init_simple_ani() {
  inView('.tempHide')
    .on('enter', (el) => {
      $(el).addClass('show');
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