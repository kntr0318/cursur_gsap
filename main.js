var cursorElem = document.querySelector('.cursor');
var cursorBefore = document.querySelector('.cursor-before');

document.addEventListener('mousemove', function(e) {
  var cursor = {
    x: e.pageX,
    y: e.pageY,
  };
  
  // GSAPを使ってカーソルの位置をアニメーションで移動させる
  gsap.to(cursorElem, {
    x: cursor.x,
    y: cursor.y,
    duration: 0.1,  // アニメーションの継続時間
    ease: "power2.out"  // イージング関数
  });

  gsap.to(cursorBefore, {
    x: cursor.x,
    y: cursor.y,
    duration: 0.6,
    ease: "cubic-bezier(0.23, 1, 0.32, 1)",
    opacity: 0.3
  });
});

cursorElem.addEventListener('mousedown', function(e) {
  if  (e.which === 1) {
    // クリック時にカーソルを小さくする
    gsap.to(cursorElem, {
      width: 15,
      height: 15,
      marginLeft: -7.5,
      marginTop: -7.5,
      duration: 0.1,
      ease: "power2.out"
    });
  }
});

cursorElem.addEventListener('mouseup', function(e) {
  if  (e.which === 1) {
    // クリックを解除した際にカーソルを元に戻す
    gsap.to(cursorElem, {
      width: 20,
      height: 20,
      marginLeft: -10,
      marginTop: -10,
      duration: 0.1,
      ease: "power2.out"
    });
  }
});
