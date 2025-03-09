
// JavaScript代码，用于实现鼠标悬浮旋转效果(AN2)
document.addEventListener('DOMContentLoaded', function() {
    // 获取页面上的元素，这里假设类名为.AN2的元素是唯一的
    var element = document.querySelector('.AN2');
  
    if (element) {
      // 鼠标悬浮时的事件监听器
      element.addEventListener('mouseenter', function() {
        // 添加旋转90度的样式
        element.style.transform = 'rotate(90deg)';
      });
  
      // 鼠标离开时的事件监听器
      element.addEventListener('mouseleave', function() {
        // 移除旋转样式，恢复为原始状态
        // 由于CSS中已有transition效果，这里设置为空字符串即可触发过渡
        element.style.transform = '';
        // 如果需要明确指定没有旋转，也可以设置为 'rotate(0deg)'
        // element.style.transform = 'rotate(0deg)';
      });
    } else {
      console.warn('未找到类名为.AN2的元素');
    }
  });




  document.addEventListener("DOMContentLoaded", function() {
    // 选择具有类名 BT1 的图片元素
    var bt1Image = document.querySelector('.BT1');
    
    // 创建一个 IntersectionObserver 实例
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            // 检查元素是否进入视口且可见比例大于等于三分之二
            if (entry.isIntersecting && entry.intersectionRatio >= 0.37) {
                // 如果尚未加载 GIF，则设置 src 属性
                if (!bt1Image.src) { // 确保 GIF 尚未加载
                    bt1Image.src = bt1Image.getAttribute("data-src");
                }
                // 停止观察，防止重复触发
                observer.unobserve(bt1Image);
            }
        });
    });

    // 开始观察 BT1 图片
    observer.observe(bt1Image);
});





const txElement = document.querySelector('.TW');
const txParentElement = document.querySelector('.TX');
let currentLeft = 0; // 用于跟踪当前的left偏移量，以父元素宽度的百分比为单位
const maxOffset = 40; // 最大偏移量，以父元素宽度的百分比为单位

// 监听鼠标滚轮事件
window.addEventListener('wheel', (event) => {
  const scrollAmount = event.deltaY;
  const parentWidth = txParentElement.clientWidth; // 获取父元素的宽度

  // 根据滚轮方向调整偏移量
  if (scrollAmount > 0) {
    // 向下滚动，向左移动
    if (currentLeft > -maxOffset) { // 确保不会超出最大左移限制
      currentLeft -= 3; // 以父元素宽度的百分比减小
    }
  } else {
    // 向上滚动，向右移动
    if (currentLeft < maxOffset) { // 确保不会超出最大右移限制
      currentLeft += 3; // 以父元素宽度的百分比增加
    }
  }

  // 更新元素的transform属性
  // 这里将百分比转换为像素
  txElement.style.transform = `translate(calc(-50% + ${currentLeft * parentWidth / 100}px), -50%)`;
});
 